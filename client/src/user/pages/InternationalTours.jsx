import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PackageCard from '../components/packageCard'; 
import { internationalToursData } from '../../data/internationalTours';

export default function InternationalTours() {
  return (
    <div className="pt-16 bg-gradient-to-br from-[#A5D8F0]/20 to-white min-h-screen">
      {/* Hero Section with updated text colors */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-[#2A3A5B]"
          >
            International Tours
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mt-4"
          >
            Experience new cultures and create lifelong memories around the globe.
          </motion.p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalToursData.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/tour/international/${tour.id}`}>
                  <PackageCard packageData={tour} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}