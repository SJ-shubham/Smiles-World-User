import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Import BOTH data files
import { domesticToursData } from '../../data/domesticTours';
import { internationalToursData } from '../../data/internationalTours'; 

import { Calendar, MapPin, Tag, Clock, Sun, Zap, Star } from 'lucide-react';

export default function TourDetailPage() {
  // Get BOTH type ('domestic' or 'international') and the tourId from the URL
  const { type, tourId } = useParams();

  // Select the correct data array based on the 'type' from the URL
  const tourDataArray = type === 'domestic' ? domesticToursData : internationalToursData;

  // Find the specific tour in the selected array
  const tour = tourDataArray.find(t => t.id === tourId);

  if (!tour) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold">Tour not found!</h1>
        <Link to="/" className="text-blue-600 mt-4 inline-block">Back to Home</Link>
      </div>
    );
  }

  const infoCards = [
    { icon: <Clock size={20} />, label: "Duration", value: tour.duration },
    { icon: <MapPin size={20} />, label: "Places Covered", value: tour.places.join(', ') },
    { icon: <Sun size={20} />, label: "Best Time to Visit", value: tour.bestTime.peak },
    { icon: <Zap size={20} />, label: "Peak Season", value: tour.bestTime.peak },
    { icon: <Star size={20} />, label: "Mid Season", value: tour.bestTime.mid },
    { icon: <Tag size={20} />, label: "Starting From", value: `₹${tour.price}/- Per Person` }
  ];

  return (
    <div className="pt-16 bg-white">
      <div className="h-96 lg:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${tour.image})` }}>
        <div className="h-full w-full bg-black/50 flex items-center justify-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">{tour.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-blue-600 text-white text-center py-4 px-6 rounded-lg text-2xl font-bold mb-12 shadow-lg">
          Thank You For Your Inquiry!
        </div>

        <p className="text-center text-slate-600 text-lg mb-12">{tour.shortDescription}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center mb-16">
          {infoCards.map((card, index) => (
            <div key={index} className="p-4 bg-slate-50 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center justify-center">
              <div className="text-orange-500 mb-2">{card.icon}</div>
              <h3 className="font-bold text-sm text-slate-800">{card.label}</h3>
              <p className="text-slate-600 text-sm mt-1">{card.value}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-center mb-10 text-[#2A3A5B]">Day-by-Day Itinerary</h2>
        <div className="relative space-y-8 border-l-2 border-gray-200 ml-6 pl-8">
          {tour.itinerary.map((day, index) => (
            <div key={day.day} className="relative">
              <div className="absolute -left-[43px] top-1 flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {day.day}
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-xl text-[#2A3A5B]">{day.title}</h3>
                <p className="text-slate-600 mt-1">{day.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}