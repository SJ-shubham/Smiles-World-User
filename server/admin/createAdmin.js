const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/AdminSchema'); // Adjust path if needed

// Load environment variables (assuming .env is in the server root)
dotenv.config({ path: './.env' }); 

// The credentials for your first admin account
const ADMIN_EMAIL = 'admin@smilesworld.com';
const ADMIN_USERNAME = 'SmilesAdmin';
const ADMIN_PASSWORD = 'YourSecurePassword123'; // CHANGE THIS!

const seedAdmin = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected for seeding...');

        // 1. Check if an admin already exists
        const existingAdmin = await Admin.findOne({ email: ADMIN_EMAIL });

        if (existingAdmin) {
            console.log('Admin account already exists. Skipping creation.');
            return;
        }

        // 2. Create the new admin account
        const newAdmin = await Admin.create({
            username: ADMIN_USERNAME,
            email: ADMIN_EMAIL,
            password: ADMIN_PASSWORD, // The schema middleware will hash this automatically!
            role: 'Admin' // Enforcing the single role
        });

        console.log(`✅ New Admin account created successfully: ${newAdmin.email}`);
        
    } catch (error) {
        console.error(`❌ Error creating initial admin: ${error.message}`);
        process.exit(1);
    } finally {
        mongoose.connection.close();
    }
};

seedAdmin();