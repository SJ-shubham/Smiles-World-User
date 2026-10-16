import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronRight } from "lucide-react";
import FAQ from "../components/faq";
import { useContactPage } from "../hooks/useContactPage";
import { submitMessage } from "../services/formsApi";

export default function Contact() {
  const { data: pageData, isLoading, isError } = useContactPage();

  const fallbackData = {
    contactDetails: {
      phoneNumber: "+91 98765 43210", weekStart: "Mon", weekEnd: "Sat",
      dayStart: "9 AM", dayEnd: "8 PM", operatingHours: "",
      email: "hello@smilesworld.com", address: "123 Travel Street\nMumbai, Maharashtra 400001",
      users: 5000, communityRating: "4.9/5 average rating",
    },
    faqSection: {
      faqs: [
        { faqId: '1', question: 'How do I book a tour?', answer: 'You can book a tour directly through our website by selecting your desired package and filling out the booking form. You can also contact us via phone or email to have one of our travel experts assist you.' },
        { faqId: '2', question: 'What are the payment options?', answer: 'We accept various payment methods including credit/debit cards, net banking, and popular UPI platforms. All transactions are secure and encrypted.' },
        { 
          faqId: '3', 
          question: 'What is your cancellation policy?', 
          answer: (
            <>
              Our policy varies based on how far in advance you cancel. For complete details, please read our full policy.
              <Link to="/cancellation-policy" className="inline-flex items-center font-semibold text-purple-600 hover:text-purple-800 mt-2">
                Read Full Policy <ChevronRight size={16} className="ml-1" />
              </Link>
            </>
          ) 
        },
      ],
    },
  };

  const contactDetails = { ...fallbackData.contactDetails, ...pageData?.contactDetails };
  const faqSection = { ...fallbackData.faqSection, ...pageData?.faqSection };
  const operatingHours = contactDetails.operatingHours || `${contactDetails.weekStart}-${contactDetails.weekEnd}: ${contactDetails.dayStart} - ${contactDetails.dayEnd}`;

  const [formData, setFormData] = useState({ fullName: "", emailAddress: "", phoneNumber: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await submitMessage(formData);
      alert(response.message || "Message sent successfully!");
      setFormData({ fullName: "", emailAddress: "", phoneNumber: "", subject: "", message: "" });
    } catch (error) {
      alert(error.message || "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  if (isLoading) return <div>Loading contact information...</div>;
  if (isError) console.error("Failed to load page data, using fallback content.");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Get In Touch</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Have questions about our travel packages? We're here to help!</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <MessageCircle className="mr-3 text-purple-500" size={20} /> Let's Connect
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-2 rounded-full"><Phone className="text-purple-500" size={16} /></div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">Call Us</h3>
                      <p className="text-gray-600 text-sm">{contactDetails.phoneNumber}</p>
                      <p className="text-xs text-gray-500">{operatingHours}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-2 rounded-full"><Mail className="text-purple-500" size={16} /></div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">Email Us</h3>
                      <p className="text-gray-600 text-sm">{contactDetails.email}</p>
                      <p className="text-xs text-gray-500">We reply within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-2 rounded-full"><MapPin className="text-purple-500" size={16} /></div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">Visit Us</h3>
                      <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: contactDetails.address.replace(/\n/g, '<br />') }} />
                      <p className="text-xs text-gray-500">By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Join Our Community</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Over {contactDetails.users.toLocaleString()} happy travelers have chosen Smiles World
                </p>
                <div className="flex justify-center space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (<span key={i} className="text-base">⭐</span>))}
                </div>
                <p className="text-xs text-gray-500 mt-1">{contactDetails.communityRating}</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Send us a message</h2>
                <p className="text-gray-600 text-sm">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                    <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter your full name" className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                    <input id="phoneNumber" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} required placeholder="+91 98765 43210" className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address *</label>
                  <input id="emailAddress" name="emailAddress" type="email" value={formData.emailAddress} onChange={handleChange} required placeholder="your@email.com" className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject *</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full p-2.5 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm">
                    <option value="">Select a subject</option>
                    <option value="package-inquiry">Package Inquiry</option>
                    <option value="custom-trip">Custom Trip Planning</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your travel plans..." className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" rows={4} />
                </div>
                <div className="pt-3">
                  <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center">
                    {isSubmitting ? (<motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />) : (<Send size={16} className="mr-2" />)}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-3">We typically respond within 24 hours.</p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <FAQ title="Frequently Asked Questions" subtitle="Quick answers to common questions" faqs={faqSection.faqs} />
    </div>
  );
}