const ApiError = require('../../utils/ApiError');
const mongoose = require('mongoose');

/**
 * @desc    Service helper to perform CRUD operations on nested arrays within a Page Document.
 * @param   {object} Model - The Mongoose Model (e.g., AboutContent, ContactContent).
 * @param   {string} rootArrayPath - Path to the array (e.g., 'ourMembers.cards', 'faqSection.faqs').
 * @param   {string} elementIdKey - The field name of the unique ID within the array element (e.g., 'memberId', 'faqId').
 * @param   {string} action - 'add', 'update', or 'delete'.
 * @param   {object} updateData - The data to add/update.
 * @param   {string} elementId - The ID of the element to update/delete (from req.params).
 */
exports.manageNestedArray = async ({ Model, rootArrayPath, elementIdKey, action, updateData, elementId }) => {
    // Determine the single document's _id (e.g., 'HomeContent' -> 'home_page')
    // We use Model.modelName and clean it up (removes 'Content')
    const pageId = Model.modelName.toLowerCase().replace(/content$/, '') + '_page';

    // 1. Fetch the document by its predetermined _id
    const pageDocument = await Model.findById(pageId); 

    if (!pageDocument) {
        throw new ApiError(`Static page document not found (ID: ${pageId}). Ensure initial document exists.`, 404);
    }
    
    // 2. Dynamically access the array (e.g., pageDocument.ourMembers.cards)
    const arrayPathParts = rootArrayPath.split('.');
    let currentObject = pageDocument;
    
    // Traverse the object to find the nested array
    for (let i = 0; i < arrayPathParts.length; i++) {
        const part = arrayPathParts[i];
        if (i === arrayPathParts.length - 1 && !Array.isArray(currentObject[part])) {
             // If we reached the array path but it's missing or not an array
             throw new ApiError(`Array path missing or invalid at: ${rootArrayPath}`, 404);
        }
        currentObject = currentObject[part];
    }
    const currentArray = currentObject; // This is the target array reference

    switch (action) {
        case 'add':
            // Generate a unique ObjectId for the new element
            if (elementIdKey) {
                updateData[elementIdKey] = new mongoose.Types.ObjectId();
            }
            currentArray.push(updateData);
            break;

        case 'update':
            // Find the index of the element to update by its unique ID
            const indexToUpdate = currentArray.findIndex(item => item[elementIdKey]?.toString() === elementId);
            if (indexToUpdate === -1) {
                throw new ApiError(`Element not found with ID: ${elementId}`, 404);
            }
            // Merge existing data with new update data
            Object.assign(currentArray[indexToUpdate], updateData);
            break;

        case 'delete':
            // Find the index of the element to delete
            const indexToDelete = currentArray.findIndex(item => item[elementIdKey]?.toString() === elementId);
            if (indexToDelete === -1) {
                throw new ApiError(`Element not found with ID: ${elementId}`, 404);
            }
            currentArray.splice(indexToDelete, 1);
            break;
            
        default:
            throw new ApiError('Invalid array action.', 400);
    }

    // Save the entire parent document after modification
    await pageDocument.save({ validateBeforeSave: true });
    return pageDocument; // Return the updated parent document
};
