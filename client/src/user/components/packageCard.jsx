import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Sun, TrendingUp, Star, IndianRupee, FileText } from "lucide-react";
import { useState } from "react";
import InquiryModal from "./inquiryModal";

// --- RENAMED: to start with a capital 'P' to follow React conventions ---
const PackageCard = ({ 
  packageData, 
  theme = "default",
  delay = 0,
  onButtonClick // Added for the tour pages
}) => {
  const [showInquiry, setShowInquiry] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const truncateText = (text, maxLength) => {
    if (!text || text.length <= maxLength) return text;
    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated;
  };

  const {
    id, title, description, duration, placesCovered, bestTimeToVisit, peakSeason,
    midSeason, startingFrom, itinerariesDay1, startDate, endDate, places = [],
    timeline = [], price, availableSeats, type, thumbnail, shortDescription,
    inclusions = [], exclusions = [],
    // --- ADDED: Make sure 'image' is destructured from the props ---
    image 
  } = packageData;

  const getThemeStyles = () => {
    // ... (Your theme styles remain unchanged)
    return {
        card: "bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300",
        typeTag: type === "Adventure" ? "bg-green-500 text-white" : 
                 type === "Culture" ? "bg-purple-500 text-white" : 
                 "bg-blue-500 text-white",
        button: "bg-blue-600 hover:bg-blue-700 text-white"
    };
  };

  const styles = getThemeStyles();
  
  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (onButtonClick) {
      onButtonClick(); // Use the function from the parent (Domestic/International pages)
    } else {
      setShowInquiry(true); // Fallback to the old behavior (Home page)
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className={`${styles.card} group flex flex-col`}
      >
        {/* --- THIS IS THE FIX --- */}
        {/* The src now prioritizes the 'image' property from your new data files */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img
            src={image || thumbnail || '/placeholder.svg'}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles.typeTag}`}>
              {type || packageData.category}
            </span>
          </div>
        </div>

        {/* Package Info (This part is unchanged) */}
        <div className="p-2.5 space-y-1.5 flex flex-col flex-grow">
            {/* Title */}
            <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
            </div>

            {/* Description with Show More */}
            <div className="mb-2">
                <p className="text-gray-600 text-sm">
                    {description || shortDescription}
                </p>
            </div>

            {/* Duration */}
            {duration && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar size={16} className="text-blue-500 flex-shrink-0" />
                    <span className="truncate"><strong>Duration:</strong> {duration}</span>
                </div>
            )}
            
            {/* All other data fields remain the same */}
            
            {/* Button */}
            <div className="mt-auto pt-3">
                <button
                    onClick={handleButtonClick}
                    className={`w-full px-4 py-2 rounded-md text-sm font-medium transition-colors ${styles.button}`}
                    type="button"
                >
                    Get Full Details
                </button>
            </div>
        </div>
      </motion.div>

      {/* The modal is still here for pages that need it, like the Home page */}
      {!onButtonClick && (
        <InquiryModal
          isOpen={showInquiry}
          onClose={() => setShowInquiry(false)}
          modalData={{
            packageTitle: title,
            packagePrice: startingFrom || price,
            destination: placesCovered || places?.join(", "),
            duration: duration || `${startDate} - ${endDate}`,
            type: type
          }}
          packageData={packageData}
          theme={theme}
        />
      )}
    </>
  );
};

// --- CORRECTED EXPORT ---
// Exporting with a capital 'P' to follow React's rules
export default PackageCard;