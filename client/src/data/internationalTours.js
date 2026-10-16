// src/data/internationalTours.js

// --- Import paths now EXACTLY match your filenames, including spaces and special characters ---
import japanImg from '../assets/tours_images/Japan.jpg';
import malaysiaLangkawiImg from '../assets/tours_images/Malaysia &Langkawi.jpg';
import phuQuocImg from '../assets/tours_images/Phu Quoc.jpg';
import singaporeMalaysiaImg from '../assets/tours_images/Singapore Malaysia.jpg';
import srilankaImg from '../assets/tours_images/Srilanka.jpg';
import thailandImg from '../assets/tours_images/Thailand.jpg';
import vietnamImg from '../assets/tours_images/vietnam.jpg';
import dubaiImg from '../assets/tours_images/dubai.jpg';
import baliImg from '../assets/tours_images/bali.jpg';
import hongkongImg from '../assets/tours_images/Hongkong.jpg';

export const internationalToursData = [
  {
    id: "dubai-abu-dhabi",
    title: "Dubai with Abu Dhabi - Spectacularly Futuristic",
    shortDescription: "Experience majestically modern Dubai, with its luxurious lifestyle and desert safaris, and explore culturally rich Abu Dhabi, home to grand landmarks.",
    image: dubaiImg,
    duration: "06N/07D",
    places: ["Dubai", "Abu Dhabi"],
    price: "71000",
    bestTime: { peak: "October - March", mid: "March - May (Discounted Rates)" },
    itinerary: [
      { day: 1, title: "Arrival in Dubai", description: "Arrive at Dubai International Airport and transfer to your hotel. In the evening, relax or explore Dubai Marina and JBR Walk." },
      { day: 2, title: "Dubai City Tour", description: "Visit the Burj Khalifa Observation Deck, explore Dubai Mall & Aquarium, visit the Dubai Frame, and the Al Fahidi Historical District." },
      { day: 3, title: "Dubai Desert Safari", description: "Morning at leisure. In the evening, enjoy a thrilling Desert Safari with dune bashing, a camel ride, and a cultural show with dinner." },
      { day: 4, title: "Dubai to Abu Dhabi", description: "Drive to Abu Dhabi. Visit the magnificent Sheikh Zayed Grand Mosque and take a photo stop at Emirates Palace." },
      { day: 5, title: "Abu Dhabi Sightseeing & Ferrari World", description: "Visit the BAPS Swaminarayan Temple. Spend the rest of the day at Ferrari World Abu Dhabi enjoying thrilling rides." },
      { day: 6, title: "Abu Dhabi to Dubai", description: "Return to Dubai. The evening is free for optional activities like visiting Global Village or Mall of the Emirates." },
      { day: 7, title: "Departure", description: "After breakfast, transfer to Dubai Airport for your onward journey." },
    ]
  },
  {
    id: "vietnam-traditionally-crafted",
    title: "Vietnam: Traditionally Crafted",
    shortDescription: "Discover breathtaking landscapes from Ha Long Bay to the Mekong Delta, explore bustling cities, and enjoy authentic cuisine.",
    image: vietnamImg,
    duration: "06N/07D",
    places: ["Hanoi", "Danang", "Hoi An", "Ho Chi Minh"],
    price: "68999",
    bestTime: { peak: "October - March", mid: "March - May (Discounted Rates)" },
    itinerary: [
      { day: 1, title: "Arrival in Hanoi", description: "Arrive at Noi Bai Airport and transfer to your hotel. In the evening, explore Hanoi's Old Quarter and enjoy a traditional water puppet show." },
      { day: 2, title: "Hanoi & Ninh Binh Day Trip", description: "Take a full-day excursion to Ninh Binh to explore stunning limestone karsts and rural villages by boat. Visit Bai Dinh Pagoda." },
      { day: 3, title: "Hanoi & Ha Long Bay Day Cruise", description: "Drive to Ha Long Bay for a day cruise. Enjoy scenic limestone karsts, grottoes, kayaking, and a seafood lunch on board." },
      { day: 4, title: "Hanoi to Da Nang / Hoi An", description: "Take a morning flight to Da Nang. Explore Marble Mountains, Coconut Village, and visit the Golden Bridge (Ba Na Hills)." },
      { day: 5, title: "Hoi An Sightseeing", description: "Explore the lantern-lit streets of Hoi An Ancient Town, including the Japanese Covered Bridge and local markets." },
      { day: 6, title: "Da Nang to Ho Chi Minh City", description: "Fly to Ho Chi Minh City. Take an afternoon excursion to the historic Cu Chi Tunnels." },
      { day: 7, title: "Ho Chi Minh City & Departure", description: "Enjoy a morning city sightseeing tour before transferring to the airport for your departure." },
    ]
  },
  {
    id: "phu-quoc-hoi-chi-minh",
    title: "Phu Quoc & Ho Chi Minh - Serenely Tropical",
    shortDescription: "Relax on the serenely tropical beaches of Phu Quoc and then experience the vibrantly bustling Ho Chi Minh City.",
    image: phuQuocImg,
    duration: "06N/07D",
    places: ["Phu Quoc", "Ho Chi Minh City"],
    price: "45999",
    bestTime: { peak: "October - March", mid: "March - May (Discounted Rates)" },
    itinerary: [
      { day: 1, title: "Arrival in Ho Chi Minh City", description: "Arrive at Tan Son Nhat Airport and transfer to your hotel. Enjoy a leisure stroll in Ben Thanh Market or Nguyen Hue Walking Street." },
      { day: 2, title: "Ho Chi Minh City Sightseeing", description: "Visit the Cu Chi Tunnels and take a city tour including Notre Dame Cathedral and the Central Post Office." },
      { day: 3, title: "Ho Chi Minh City to Phu Quoc", description: "Take a morning flight to Phu Quoc Island and transfer to your resort. Relax on the tropical beaches." },
      { day: 4, title: "Phu Quoc Exploration", description: "Visit Phu Quoc National Park and Suoi Tranh Waterfall. Explore local fishing villages and enjoy the sunset at Long Beach." },
      { day: 5, title: "Phu Quoc Island Adventure", description: "Enjoy a full day of island hopping, snorkeling, or scuba diving. Optional visit to Vinpearl Safari." },
      { day: 6, title: "Leisure Day in Phu Quoc", description: "Relax on the pristine beaches, enjoy spa treatments, or explore local markets for souvenirs." },
      { day: 7, title: "Departure", description: "Take a morning flight back to Ho Chi Minh City for your onward journey." },
    ]
  },
  {
    id: "srilanka-lushly-verdant",
    title: "Sri Lanka - Lushly Verdant",
    shortDescription: "Discover serenely tropical beaches, majestic tea-covered hills, and wildly thrilling wildlife safaris in the Pearl of the Indian Ocean.",
    image: srilankaImg,
    duration: "07N/08D",
    places: ["Colombo", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Galle", "Bentota"],
    price: "51999",
    bestTime: { peak: "October - March", mid: "March - May (Discounted Rates)" },
    itinerary: [
      { day: 1, title: "Arrival in Colombo", description: "Arrive at Bandaranaike International Airport and transfer to your hotel. Explore Galle Face Green and Gangaramaya Temple." },
      { day: 2, title: "Colombo to Kandy", description: "Drive to Kandy. Visit the Temple of the Tooth Relic (Sri Dalada Maligawa) and enjoy a Kandy Cultural Show in the evening." },
      { day: 3, title: "Kandy to Nuwara Eliya", description: "Visit Peradeniya Botanical Garden, then drive to Nuwara Eliya. Explore tea plantations and Gregory Lake." },
      { day: 4, title: "Nuwara Eliya to Ella", description: "Take the famous scenic train ride from Nuwara Eliya to Ella. Explore the Nine Arches Bridge and Little Adam's Peak." },
      { day: 5, title: "Ella to Yala National Park", description: "Drive to Yala National Park. In the afternoon, take a jeep safari to spot leopards, elephants, and other wildlife." },
      { day: 6, title: "Yala to Galle", description: "Drive to Galle and visit the Galle Fort (a UNESCO World Heritage Site), exploring its lighthouse and Dutch-era streets." },
      { day: 7, title: "Galle to Bentota / Colombo", description: "Drive to Bentota for beach relaxation or water sports. Optional visit to a turtle hatchery." },
      { day: 8, title: "Departure", description: "Transfer to Bandaranaike International Airport for your onward journey." },
    ]
  },
  {
    id: "singapore-malaysia",
    title: "Singapore & Malaysia - Majestically Modern",
    shortDescription: "Explore majestically modern Singapore and discover culturally rich Malaysia, from the Petronas Towers to scenic highlands.",
    image: singaporeMalaysiaImg,
    duration: "06N/07D",
    places: ["Singapore", "Kuala Lumpur", "Genting Highlands"],
    price: "71999",
    bestTime: { peak: "October - March", mid: "March - May (Discounted Rates)" },
    itinerary: [
      { day: 1, title: "Arrival in Singapore", description: "Arrive at Changi Airport and transfer to your hotel. Enjoy an evening stroll at Marina Bay Sands and Merlion Park." },
      { day: 2, title: "Singapore City Tour", description: "A full-day city tour visiting Chinatown, Little India, Orchard Road for shopping, and the Singapore Flyer for panoramic views." },
      { day: 3, title: "Jurong Bird Park & Sentosa Island", description: "In the morning, visit Jurong Bird Park. In the afternoon, explore Sentosa Island's beaches and attractions like the S.E.A Aquarium." },
      { day: 4, title: "Universal Studios & Night Safari", description: "Spend the day at Universal Studios Singapore. In the evening, experience the world-famous Night Safari." },
      { day: 5, title: "Singapore to Genting Highlands", description: "Transfer to Malaysia and visit Genting Highlands. Enjoy a cable car ride and the cool hilltop weather." },
      { day: 6, title: "Kuala Lumpur City Tour", description: "Visit the iconic Batu Caves, Petronas Twin Towers, KL Tower, and heritage areas. Evening free for shopping." },
      { day: 7, title: "Departure", description: "Transfer to Kuala Lumpur Airport for your onward journey." },
    ]
  },
  {
    id: "malaysia-langkawi",
    title: "Malaysia & Langkawi - Vibrantly Bustling",
    shortDescription: "Experience towering Kuala Lumpur and then unwind in serenely tropical Langkawi, exploring scenic beaches and islands.",
    image: malaysiaLangkawiImg,
    duration: "06N/07D",
    places: ["Kuala Lumpur", "Genting Highlands", "Langkawi"],
    price: "51999",
    bestTime: { peak: "October - March", mid: "March - May (Discounted Rates)" },
    itinerary: [
      { day: 1, title: "Arrival in Kuala Lumpur", description: "Arrive at Kuala Lumpur International Airport and transfer to your hotel. Evening stroll at Petronas Twin Towers and KLCC Park." },
      { day: 2, title: "Kuala Lumpur City Tour", description: "Full-day city sightseeing including Batu Caves, Merdeka Square, and the vibrant Central Market & Chinatown." },
      { day: 3, title: "Genting Highlands Excursion", description: "Enjoy a day trip to Genting Highlands, featuring a scenic cable car ride, theme park fun, and shopping." },
      { day: 4, title: "Kuala Lumpur to Langkawi", description: "Take a morning flight to Langkawi Island. Transfer to your resort and relax on Pantai Cenang Beach." },
      { day: 5, title: "Langkawi Exploration", description: "Visit the Langkawi Sky Bridge & Cable Car for majestic views. Explore Telaga Tujuh Waterfalls." },
      { day: 6, title: "Leisure Day in Langkawi", description: "A free day for beach relaxation, water sports, or exploring local markets for souvenirs." },
      { day: 7, title: "Departure", description: "After a leisurely morning, transfer to Langkawi Airport for your onward journey." },
    ]
  },
  {
    id: "hongkong-macau",
    title: "Hong Kong & Macau - Luxuriously Opulent",
    shortDescription: "Experience majestically modern Hong Kong with its vibrant streets and scenic harbor, then explore historically rich Macau's cultural sites and opulent resorts.",
    image: hongkongImg,
    duration: "06N/07D",
    places: ["Hong Kong", "Macau"],
    price: "51999",
    bestTime: { peak: "October - March", mid: "March - May (Discounted Rates)" },
    itinerary: [
      { day: 1, title: "Arrival in Hong Kong", description: "Arrive at Hong Kong International Airport and transfer to your hotel. Evening stroll at Tsim Sha Tsui Promenade." },
      { day: 2, title: "Hong Kong City Tour", description: "Visit Victoria Peak for panoramic views, explore Man Mo Temple, and Aberdeen Fishing Village." },
      { day: 3, title: "Disneyland / Ocean Park", description: "Spend a full day at either Hong Kong Disneyland or Ocean Park for thrilling rides and entertainment." },
      { day: 4, "title": "Lantau Island & Ngong Ping", "description": "Visit the Tian Tan Buddha (Big Buddha) and Po Lin Monastery via the scenic Ngong Ping 360 cable car." },
      { day: 5, title: "Hong Kong to Macau", description: "Take a morning ferry to Macau. Visit the Ruins of St. Paul's, Senado Square, and A-Ma Temple." },
      { day: 6, title: "Macau Exploration", description: "Visit the Macau Tower for panoramic views. Explore Taipa Village and the luxurious Cotai Strip resorts." },
      { day: 7, title: "Departure", description: "Transfer to Macau or Hong Kong Airport for your onward journey." },
    ]
  },
  {
    id: "japan-cherry-blossom",
    title: "Japan - Cherry Blossom Special",
    shortDescription: "Experience enchantingly scenic cherry blossom streets, culturally rich temples, and vibrantly bustling cities.",
    image: japanImg,
    duration: "08N/09D",
    places: ["Tokyo", "Kyoto", "Osaka", "Hiroshima", "Miyajima"],
    price: "275000",
    bestTime: { peak: "March - May", mid: "August - October (Discounted Rates)" },
    itinerary: [
      { day: 1, title: "Arrival in Tokyo", description: "Arrive at Narita or Haneda Airport and transfer to your hotel. Evening stroll at Shibuya Crossing." },
      { day: 2, title: "Tokyo City Tour", description: "Visit Asakusa Temple (Senso-ji), Meiji Shrine, and the Imperial Palace. Explore Akihabara or Ginza." },
      { day: 3, title: "Mount Fuji & Hakone", description: "Take a full-day excursion to Mount Fuji's 5th Station, enjoy a Lake Ashi cruise, and ride the Hakone Ropeway." },
      { day: 4, title: "Tokyo to Kyoto", description: "Take the Shinkansen (bullet train) to Kyoto. Visit Kinkaku-ji (Golden Pavilion) and the Gion district." },
      { day: 5, title: "Kyoto Sightseeing", description: "Visit the Fushimi Inari Taisha shrine and walk through the Arashiyama Bamboo Grove." },
      { day: 6, title: "Kyoto to Osaka", description: "Transfer to Osaka. Visit Osaka Castle and explore the vibrant Dotonbori district." },
      { day: 7, title: "Osaka to Hiroshima & Miyajima Island", description: "Take the Shinkansen to Hiroshima. Visit the Peace Memorial Park & Museum, then take a ferry to Miyajima Island to see the Itsukushima Shrine." },
      { day: 8, title: "Hiroshima to Tokyo", description: "Take the Shinkansen back to Tokyo. Evening free for last-minute shopping." },
      { day: 9, "title": "Departure from Tokyo", "description": "Transfer to Narita or Haneda Airport for your onward journey." },
    ]
  },
  {
    id: "bali-blissful",
    title: "Bali - Peacefully Blissful",
    shortDescription: "Explore serenely tropical beaches, lushly verdant rice terraces, and culturally rich temples on the Island of the Gods.",
    image: baliImg,
    duration: "06N/07D",
    places: ["Kuta", "Nusa Penida", "Ubud", "Mara Safari"],
    price: "36999",
    bestTime: { peak: "October - March", mid: "March - May (Discounted Rates)" },
    itinerary: [
      { day: 1, title: "Arrival in Kuta", description: "Arrive at Ngurah Rai International Airport and transfer to your hotel in Kuta. Enjoy the evening at Kuta Beach." },
      { day: 2, title: "Kuta Sightseeing", description: "Visit the Tanah Lot Temple, Handara Gate, and Garuda Wisnu Kencana (GWK) Cultural Park. Watch the Kecak dance at Uluwatu Temple at sunset." },
      { day: 3, "title": "Kuta to Nusa Penida", "description": "Take a morning speedboat to Nusa Penida. Visit Kelingking Beach, Angel's Billabong, and Broken Beach." },
      { day: 4, title: "Nusa Penida to Ubud", description: "Take a morning ferry back to the mainland and transfer to Ubud. Visit the Tirta Empul (holy water temple)." },
      { day: 5, title: "Ubud & Surroundings", description: "Experience the Bali Swing, explore the Tegalalang Rice Terraces, and visit the Lempuyang Temple (Gate of Heaven)." },
      { day: 6, title: "Ubud to Mara Safari", description: "Transfer to Mara Safari & Marine Park for wildlife encounters and cultural shows." },
      { day: 7, title: "Departure from Bali", description: "After a leisurely morning, transfer to Ngurah Rai International Airport for your onward journey." },
    ]
  },
  {
    id: "thailand-tropical",
    title: "Thailand - Serenely Tropical",
    shortDescription: "Experience vibrantly bustling Bangkok, relax on serenely tropical beaches in Phuket, and explore picturesque islands in Krabi.",
    image: thailandImg,
    duration: "06N/07D",
    places: ["Bangkok", "Phuket", "Krabi"],
    price: "36999",
    bestTime: { peak: "October - March", mid: "March - May (Discounted Rates)" },
    itinerary: [
      { day: 1, title: "Arrival in Bangkok", description: "Arrive at Suvarnabhumi Airport and transfer to your hotel. Explore the Asiatique Riverfront in the evening." },
      { day: 2, title: "Bangkok City Tour", description: "Visit the Grand Palace, Wat Pho (Reclining Buddha), and Wat Arun (Temple of Dawn)." },
      { day: 3, title: "Bangkok to Phuket", description: "Take a morning flight to Phuket. Relax on Patong, Kata, or Karon Beach." },
      { day: 4, title: "Phuket Sightseeing", description: "Take an island hopping tour to the famous Phi Phi Islands, Maya Bay, and Bamboo Island." },
      { day: 5, title: "Phuket to Krabi", description: "Transfer to Krabi by road or speedboat. Explore Railay Beach and Phra Nang Cave Beach." },
      { day: 6, title: "Krabi Excursion", description: "Enjoy a full-day island hopping tour to Hong Islands, Chicken Island, and Poda Island for snorkeling." },
      { day: 7, title: "Departure", description: "After a morning at leisure, transfer to Krabi Airport for your onward journey." },
    ]
  }
];