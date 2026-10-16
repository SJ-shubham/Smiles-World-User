// src/data/domesticTours.js

// --- Import the local images with their exact, corrected names and paths ---
import rajasthanRoyalImg from '../assets/tours_images/Rajasthan -Majestically Royal.png';
import rajasthanWildImg from '../assets/tours_images/Rajasthan.png';
import keralaTranquilImg from '../assets/tours_images/Tranquil Kerala.png';
import keralaVagamonImg from '../assets/tours_images/kerela.png';
import kutchImg from '../assets/tours_images/KUTCH.png';
import unityImg from '../assets/tours_images/Statue of Unity.png';
import meghalayaImg from '../assets/tours_images/Meghalaya.png';
import varanasiImg from '../assets/tours_images/Varanasi.png';
// NOTE: An image for Andaman was not found, so I am using another image as a placeholder.
// Please add an 'Andaman.png' to your 'tours_images' folder and update the import if you have one.
import andamanImg from '../assets/tours_images/bali.jpg'; 


export const domesticToursData = [
  {
    id: "andaman-serene",
    title: "Andaman - Serenely Beautiful, Magically Yours",
    shortDescription: "A tropical paradise known for crystal-clear waters, pristine beaches, and lush forests, offering a perfect blend of adventure and relaxation.",
    image: andamanImg,
    duration: "06N/07D",
    places: ["Port Blair", "Havelock Island", "Neil Island"],
    price: "38666",
    bestTime: {
      peak: "October - March",
      mid: "July - Sept (Discounted Rates)",
    },
    itinerary: [
      { day: 1, title: "Port Blair Arrival & Light & Sound Show", description: "Arrive at Port Blair, transfer to your hotel. Later, visit Corbyn's Cove Beach and the historic Cellular Jail for the evening Light & Sound Show." },
      { day: 2, title: "Havelock Island & Radha Nagar Beach", description: "Take a ferry to Havelock Island. In the afternoon, visit the Blue Flag certified Radha Nagar Beach for swimming and relaxation." },
      { day: 3, title: "Havelock - Elephant Beach", description: "Proceed to Elephant Beach, popular for snorkeling and other water-based activities. Usually includes a complimentary 5-minute snorkeling experience." },
      { day: 4, title: "Neil Island Exploration", description: "Travel to Neil Island. Visit Bharatpura Beach, Laxmanpura Beach for sunset, and the stunning Natural Bridge (Howrah Bridge)." },
      { day: 5, title: "Return to Port Blair", description: "After breakfast, take a ferry back to Port Blair. The evening is free for shopping or leisure at your own pace." },
      { day: 6, title: "North Bay (Coral Island) & Ross Island", description: "Board a speed boat to the historic Ross Island and then to North Bay, famous for scuba diving, snorkeling, and semi-submarine rides." },
      { day: 7, title: "Port Blair Departure", description: "After breakfast, transfer to the airport for your departure, concluding your tour." },
    ]
  },
  {
    id: "rajasthan-royal",
    title: "Rajasthan - Majestically Royal",
    shortDescription: "Discover majestic palaces, the serene blue charm of Jodhpur, and the magical golden dunes of Jaisalmer in this royal heritage tour.",
    image: rajasthanRoyalImg,
    duration: "06N/07D",
    places: ["Jaipur", "Jodhpur", "Jaisalmer"],
    price: "34999",
    bestTime: { peak: "October - March", mid: "July - September" },
    itinerary: [
       { day: 1, title: "Arrival in Jodhpur", description: "Arrive in Jodhpur, check into your hotel. Later, visit Jaswant Thada and Umaid Bhavan Palace." },
       { day: 2, title: "Jodhpur to Jaisalmer & Desert Camp", description: "Drive to Jaisalmer and check into a desert camp. Enjoy Sam Sand Dunes, a desert sunset, and Rajasthani folk music and dance." },
       { day: 3, title: "Jaisalmer Local Sightseeing", description: "Visit the Golden Fort, Patwon ki Haveli, Gadisar Lake, and Jain Mandir, then check into your city hotel." },
       { day: 4, title: "Jaisalmer to Jodhpur", description: "Drive back to Jodhpur. Visit Mehrangarh Fort, Kaylana Lake, and Mandore Garden." },
       { day: 5, title: "Jodhpur to Jaipur", description: "Drive to Jaipur. In the evening, visit Hawa Mahal and Birla Temple." },
       { day: 6, title: "Jaipur Local Sightseeing", description: "Explore the City Palace, Amer Fort, Jantar Mantar, and Jal Mahal." },
       { day: 7, title: "Departure from Jaipur", description: "After breakfast, proceed to Jaipur airport for your flight home." },
    ]
  },
  {
    id: "rajasthan-wildly-majestic",
    title: "Rajasthan - Wildly Majestic",
    shortDescription: "From serene Udaipur and historic Chittorgarh to wild Ranthambore, this tour covers the diverse landscapes of Rajasthan.",
    image: rajasthanWildImg,
    duration: "08N/09D",
    places: ["Udaipur", "Mount Abu", "Chittorgarh", "Kumbhalgarh", "Ranthambore", "Jaipur"],
    price: "44999",
    bestTime: { peak: "October - March", mid: "July - September" },
    itinerary: [
      { day: 1, title: "Arrival in Udaipur", description: "Arrive in Udaipur. In the evening, enjoy a boat ride on Lake Pichola and visit Jag Mandir." },
      { day: 2, title: "Udaipur Sightseeing", description: "Visit City Palace, Saheliyon Ki Bari, and Fateh Sagar Lake. Explore Bagore Ki Haveli in the evening." },
      { day: 3, title: "Udaipur to Mount Abu", description: "Drive to Mount Abu. Visit Nakki Lake, Sunset Point, and the famous Dilwara Temples." },
      { day: 4, title: "Mount Abu to Chittorgarh", description: "Drive to Chittorgarh and visit the magnificent Chittorgarh Fort, Vijay Stambh, and Kirti Stambh." },
      { day: 5, title: "Chittorgarh to Kumbhalgarh", description: "Drive to Kumbhalgarh. Explore the formidable Kumbhalgarh Fort and Badal Mahal." },
      { day: 6, title: "Kumbhalgarh to Ranthambore", description: "Embark on a scenic drive to Ranthambore, home of the majestic tigers." },
      { day: 7, title: "Ranthambore Safari & Transfer to Jaipur", description: "Enjoy a morning safari in Ranthambore National Park. In the afternoon, drive to Jaipur." },
      { day: 8, title: "Jaipur Sightseeing", description: "Visit Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar. Explore local markets." },
      { day: 9, title: "Jaipur Departure", description: "After breakfast, transfer to Jaipur Airport for your onward journey." },
    ]
  },
  {
    id: "kerala-tranquil",
    title: "Peacefully Tranquil Kerala",
    shortDescription: "From lush hills to tranquil backwaters, Kerala offers the perfect blend of nature, culture, and relaxation in 'God's Own Country'.",
    image: keralaTranquilImg,
    duration: "06N/07D",
    places: ["Cochin", "Munnar", "Thekkady", "Kumarakom"],
    price: "36999",
    bestTime: { peak: "October - March", mid: "July - September" },
    itinerary: [
      { day: 1, title: "Arrival in Cochin (Kochi)", description: "Arrive in Cochin and transfer to your hotel. Explore Fort Kochi, Chinese Fishing Nets, and St. Francis Church." },
      { day: 2, title: "Cochin to Munnar", description: "Drive to the scenic hill station of Munnar. Visit Tea Plantations and the Tea Museum." },
      { day: 3, title: "Munnar Sightseeing", description: "Visit Eravikulam National Park, Mattupetty Dam, Echo Point, and Top Station for breathtaking views." },
      { day: 4, title: "Munnar to Thekkady", description: "Drive to Thekkady (Periyar). In the afternoon, enjoy a Spice Plantation Tour." },
      { day: 5, title: "Thekkady to Kumarakom", description: "Enjoy an early morning boat safari in Periyar Lake, then drive to Kumarakom, famous for its backwaters." },
      { day: 6, title: "Kumarakom - Backwater Experience", description: "Enjoy a houseboat cruise through the scenic backwaters of Kerala, exploring villages and coconut groves." },
      { day: 7, title: "Departure from Cochin", description: "After breakfast, transfer to Cochin Airport for your journey home." },
    ]
  },
  {
    id: "kerala-offbeat",
    title: "Enchantingly Hidden Kerala (Vagamon)",
    shortDescription: "An offbeat escape to the misty hills of Vagamon, relaxing beaches of Kovalam, and the scenic sunsets of Kanyakumari.",
    image: keralaVagamonImg,
    duration: "06N/07D",
    places: ["Vagamon", "Kovalam", "Kanyakumari"],
    price: "36999",
    bestTime: { peak: "October - March", mid: "July - September" },
    itinerary: [
      { day: 1, title: "Cochin to Vagamon", description: "Arrive at Cochin Airport and drive to Vagamon. Relax amid lush green meadows and misty hills." },
      { day: 2, title: "Vagamon Exploration", description: "Visit Vagamon Meadows, Pine Forests, Kurishumala Hill, and Thangalpara. Optional paragliding or off-road jeep ride." },
      { day: 3, title: "Vagamon to Kovalam", description: "Drive to Kovalam, Kerala's most loved beach town. Relax at Lighthouse Beach in the evening." },
      { day: 4, title: "Kovalam & Trivandrum", description: "Morning at leisure. Afternoon excursion to Trivandrum to visit Padmanabhaswamy Temple and Napier Museum." },
      { day: 5, title: "Kovalam to Kanyakumari", description: "Drive to Kanyakumari, the southernmost tip of India. Visit Vivekananda Rock Memorial and witness the magical sunset." },
      { day: 6, title: "Kanyakumari to Kovalam", description: "Experience the sunrise at Kanyakumari before returning to Kovalam. Evening free for leisure." },
      { day: 7, title: "Departure from Trivandrum", description: "After breakfast, transfer to Trivandrum Airport for your onward journey." },
    ]
  },
  {
    id: "rann-of-kutch",
    title: "Rann of Kutch - Magically White",
    shortDescription: "Witness the magically white expanse of the Rann of Kutch during the vibrant Rann Utsav festival and explore historically rich Ahmedabad.",
    image: kutchImg,
    duration: "03N/04D",
    places: ["Rann of Kutch", "Ahmedabad"],
    price: "24999",
    bestTime: { peak: "October - March", mid: "N/A" },
    itinerary: [
      { day: 1, title: "Bhuj to Rann Utsav - The Tent City", description: "Transfer from Bhuj to the Tent City at Dhordo. After check-in and lunch, visit the Sunset Point to witness the grandeur of the sunset over the White Rann." },
      { day: 2, title: "Kala Dungar and Handicraft Village", description: "Enjoy a morning Yoga session. Later, take a complimentary tour to Kala Dungar (Black Hill), the highest point of Kutch. On the route, visit the 'Gandhi Nu Gaam' handicraft village." },
      { day: 3, title: "Rann Utsav to Ahmedabad", description: "After breakfast, check out and transfer to Ahmedabad. In the evening, enjoy Kankaria lake and free time for shopping." },
      { day: 4, title: "Ahmedabad Sightseeing & Departure", description: "Visit BAPS Akshardham Temple, Adalaj Stepwell, and Sabarmati Ashram before transferring to Ahmedabad airport for your flight." },
    ]
  },
  {
    id: "statue-of-unity",
    title: "Statue of Unity - Proudly Iconic",
    shortDescription: "Visit the world's tallest statue, a tribute to Sardar Vallabhbhai Patel, set against the scenic backdrop of the Narmada River.",
    image: unityImg,
    duration: "04N/05D",
    places: ["Kevadiya", "Ahmedabad"],
    price: "24999",
    bestTime: { peak: "October - March", mid: "N/A" },
    itinerary: [
      { day: 1, title: "Arrival at Ahmedabad & transfer to Kevadiya", description: "Arrive in Ahmedabad and transfer to Kevadiya. Visit the Statue of Unity Viewing gallery, Butterfly & Cactus Garden, and Glow Garden." },
      { day: 2, title: "Kevadiya sightseeing", description: "After breakfast, proceed to the Jungle Safari. Enjoy the rest of the day at your leisure." },
      { day: 3, title: "Kevadiya to Ahmedabad", description: "After breakfast, drive to Ahmedabad and check into your hotel. In the evening, visit Kankariya lake." },
      { day: 4, title: "Ahmedabad sightseeing", description: "Visit Sabarmati Ashram, the Adalaj Stepwell, Auto World Vintage Car Museum, and Akshardham temple." },
      { day: 5, title: "Departure", description: "After breakfast, check out and transfer to Ahmedabad airport for your flight home." },
    ]
  },
  {
    id: "meghalaya-refreshing",
    title: "Meghalaya - Naturally Refreshing",
    shortDescription: "Discover the living root bridges of Cherrapunji, the crystal-clear waters of Dawki, and the culturally vibrant Khasi traditions.",
    image: meghalayaImg,
    duration: "06N/07D",
    places: ["Shillong", "Cherrapunjee", "Mawlynnong & Dawki", "Kaziranga", "Guwahati"],
    price: "36999",
    bestTime: { peak: "October-March", mid: "July - Sept (Discounted Rates)" },
    itinerary: [
      { day: 1, title: "Arrival Guwahati to Shillong", description: "Arrive in Guwahati and transfer to Shillong, the 'Scotland of the East'. Stop at Umiam Lake viewpoint en route." },
      { day: 2, title: "Day Excursion to Cherrapunjee", description: "Full day excursion to Cherrapunjee. Visit Seven Sister Falls, Nahkhalikai Falls, and Mwasmai Cave." },
      { day: 3, title: "Day excursion to Mawlynnong & Dawki", description: "Visit Mawlynnong, Asia's cleanest village, see the Living Root Bridge, and visit the crystal-clear Dawki river." },
      { day: 4, title: "Shillong to Kaziranga", description: "Drive to Kaziranga National Park, a world heritage site famous for the One Horned Rhinoceros." },
      { day: 5, title: "Kaziranga Safari & sightseeing", description: "Enjoy an Elephant safari and a Jeep safari (subject to availability). Later, visit the Kaziranga National Orchid and Biodiversity Park." },
      { day: 6, title: "Kaziranga to Guwahati", description: "Drive to Guwahati and check into your hotel. In the evening, enjoy a sunset cruise on the Mighty River Brahmaputra." },
      { day: 7, title: "Departure", description: "After breakfast, transfer to Guwahati airport for your flight home." },
    ]
  },
  {
    id: "varanasi-spiritual",
    title: "Varanasi - Prayagraj - Ayodhya: Spiritually Eternal",
    shortDescription: "A journey through India's spiritual heartland, from the eternal ghats of Varanasi to the sacred aura of Ayodhya.",
    image: varanasiImg,
    duration: "06N/07D",
    places: ["Chitrakoot", "Prayagraj", "Ayodhya", "Varanasi"],
    price: "28999",
    bestTime: { peak: "October - March", mid: "July - Sept (Discounted Rates)" },
    itinerary: [
      { day: 1, title: "Arrival Satana to Chitrakoot", description: "Arrive at Satana railway station and transfer to your hotel in Chitrakoot." },
      { day: 2, title: "Chitrakoot to Prayagraj", description: "Visit Gupt Godavari, Ramghat, and Sati Anusuya temple before driving to Prayagraj." },
      { day: 3, title: "Prayagraj to Ayodhya", description: "Visit Triveni Sangam and Anand Bhavan Museum, then drive to Ayodhya." },
      { day: 4, title: "Ayodhya to Varanasi", description: "Visit Ram Janmabhoomi, Hanuman Garhi, and Sharayu river before driving to Varanasi." },
      { day: 5, title: "Varanasi local sightseeing", description: "Visit Kashi Vishwanath temple, Annapurna temple, Vishalakshi temple, and Bharat Mata temple." },
      { day: 6, title: "Sarnath day tour", description: "Take a day excursion to Sarnath, visiting Dhamek Stupa and Sarnath Museum. In the evening, enjoy the Ganga Aarti." },
      { day: 7, title: "Departure from Varanasi", description: "After breakfast, transfer to Varanasi airport for your flight home." },
    ]
  },
];