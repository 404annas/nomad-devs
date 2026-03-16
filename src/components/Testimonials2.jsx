"use client";
import React, { useState } from "react";
import { Star, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";

const Testimonials2 = () => {
  // Data
  const reviews = [
    {
      id: 1,
      name: "John",
      date: "8 December, 2025",
      location: "London, UK",
      rating: 5,
      text: `Saleha was incredibly helpful throughout our entire project. She was recommended to us by our architect, and from the very beginning she guided us step-by-step, helping us understand what needed to be done and where to source all the materials. She also helped us shop around and even secured a trade discount, which saved us money and made the project much more manageable.\n\nShe organised everything brilliantly, including bringing in the right people from different trades. The builders from Manes Construction Ltd were especially outstanding — so friendly, supportive, and easy to work with that they genuinely began to feel like family. They resolved any issues quickly, worked efficiently, and completed everything to a high standard. We were very happy with their work.\n\nAnother thing I really appreciated was how clearly Saleha planned out the payment schedule. I was initially concerned about this, but her approach made the whole process smooth and stress-free.\n\nOverall, we are pleased with both Saleha and the team she provided. I would happily recommend her to others in the future, and I would definitely use the same team again for any future projects.`,
    },
    {
      id: 2,
      name: "Deepa",
      date: "9 June, 2025",
      location: "London, UK",
      rating: 5,
      text: `Saleha has been brilliant all along. She designed our living room and changed it to something extraordinary and special.\n\nNot least, Saleha is approachable and a wonderful human being. Highly recommend because Saleha is simply the best!`,
    },
    {
      id: 3,
      name: "Sameera Dalvi",
      date: "19 February, 2025",
      location: "London, UK",
      rating: 5,
      text: "As an architect i worked with saleha on one of the interior design  project. The outcome was brilliant. Client was very pleased  with the results. she is very professional!!",
    },
    {
      id: 4,
      name: "Talib",
      date: "18 February, 2025",
      location: "London, UK",
      rating: 4,
      text: "I would like to express my appreciation for the exceptional interior design services provided by Saleha. Her expertise and attention to detail ensured that my home was designed exactly as I envisioned, with every aspect carefully considered. The final result transformed my space into a beautiful and comfortable place to live. Thank you, Saleha, for your outstanding services in Dubai—your recommendations for each design element were truly valuable!",
    },
    {
      id: 5,
      name: "Rajiv",
      date: "17 October, 2024",
      location: "London, UK",
      rating: 5,
      text: "Excellent service and wouldn’t hesitate to recommend to my family and friends. I have worked on few of their job as structural engineer and they were great in dealing with client requirements and coordinating the site works with rest of disciplines. I strong recommend them.",
    },
    {
      id: 6,
      name: "Alok",
      date: "23 September, 2024",
      location: "London, UK",
      rating: 5,
      text: "Saleha and her team recently worked on creating the most beautiful wardrobes. They were extremely efficient and the quality of their craftsmanship was exceptional. I would highly recommend Dwell for any type of renovations around the house!",
    },
    {
      id: 7,
      name: "Ashley Newman",
      date: "20 September, 2024",
      location: "London, UK",
      rating: 5,
      text: "Very helpful with great ideas and concepts for our house, we would highly recommend Saleha and her team that worked with us to help design and decorate our new home. From start to finish, took the time to understand what we wanted. She made life easy by project managing and co-ordinating the works. She was always contactable and responsive taking time to answer any questions ans was professional, considerate and reliable. The finished work is great, better than I ever could have managed. I am grateful to Saleha and the team and look forward to working with them again.",
    },
    {
      id: 8,
      name: "Moiz Siawala",
      date: "18 September, 2024",
      location: "London, UK",
      rating: 5,
      text: `Thanks to Saliha and team for understanding our requirements and providing useful insights into what will work and what wont.\n\nThe planning application process went smoothly and we got approval for everything we required without any issues.`,
    },
    {
      id: 9,
      name: "Jay",
      date: "6 September, 2024",
      location: "London, UK",
      rating: 4,
      text: "I wanted to post a review of the decoration project with Dwell Rich( SK). The execution was smooth and timely. I am happy with the final look of the room and corridor. She implemented the project with care and consideration. She managed to find great deals on the accessories and furniture.",
    },
    {
      id: 10,
      name: "Katie",
      date: "6 September, 2024",
      location: "London, UK",
      rating: 5,
      text: `Hi,\n\nOn a completely different note, I would like to share positive feedback about Saleha's Design Service with the group.\n\nI am one of the first in the area to try Saleha for a Reception Room upgrade project.\n\nThe result has been very amazing and has a huge difference to this space in our room.\n\nLike Saleha's bold approach to trying new ideas, understanding clients tastes preferences and bringing it all to fruition.\n\nThank you Saleha!\n\nRegards Deepa`,
    },
    {
      id: 11,
      name: "Brenda",
      date: "27 August, 2024",
      location: "London, UK",
      rating: 4,
      text: `We are delighted that the project can finally get underway. The service provided by  Saleha, Interior designer, invaluable in terms of finding the right interior designer for our project. They were professional, friendly, knowledgable and helpful throughout and we could not recommend them highly enough.\n\nThank you Saleha for understanding the client preferences and bringing it to all fruition.`,
    },
    {
      id: 12,
      name: "Beena",
      date: "18 August, 2024",
      location: "London, UK",
      rating: 5,
      text: `She has been very helpful for kick starting my project with all her services with planning and designing.`,
    },
    {
      id: 13,
      name: "HU-452831006",
      date: "30 July, 2024",
      location: "London, UK",
      rating: 4,
      text: `Dwell gave an alternative idea for our kitchen layout, arranged for finalised structural drawings and sent a couple of builders to quote on the work. A calm and helpful process - thank you!`,
    },
    {
      id: 14,
      name: "HU-298729913",
      date: "30 July, 2024",
      location: "London, UK",
      rating: 5,
      text: `We did recently wardrobe and double bed work from this company. Suleha recommended Shinda carpenter and he did extremely good quality, strong furniture job with 100% adherance to scheduled time. Highly recommended.`,
    },
    {
      id: 15,
      name: "HU-623745579",
      date: "28 July, 2024",
      location: "London, UK",
      rating: 5,
      text: `As a first time buyer, we didn’t have any idea of getting the building work done for an extension and where to start it. But Saleha helped us to understand each step in detail from the rules and regulations, to architecture requirements and the type of construction required in our budget. I would highly recommend their services for anyone in the are of Chessington, Surbiton, Kingston as they can provide a high level of knowledge and a good quality of work.`,
    },
    {
      id: 16,
      name: "HU-886398553",
      date: "25 July, 2024",
      location: "London, UK",
      rating: 5,
      text: `Very good service by Saleha and team. Keep it up`,
    },
  ];

  // --- States ---
  const [selectedReview, setSelectedReview] = useState(null); // For Modal

  // --- Modal Handlers ---
  const openModal = (review) => {
    setSelectedReview(review);
    document.body.style.overflow = "hidden"; // Disable scroll
  };

  const closeModal = () => {
    setSelectedReview(null);
    document.body.style.overflow = "unset"; // Enable scroll
  };

  // Helper to render stars
  const renderStars = (count) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < count ? "#FFC107" : "#E5E7EB"}
          stroke={i < count ? "#FFC107" : "#E5E7EB"}
          className="mr-0.5"
        />
      ));
  };

  return (
    <section className="w-full py-10 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-10 relative">
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gray-200 -z-10 hidden md:block"></div>
          <div className="pr-6 z-10 mx-auto md:mx-0">
            <h2 className="text-2xl sm:text-3xl font-serif text-black text-center px-4">
              User Reviews & Ratings
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Summary Box */}
          <div className="shrink-0 w-full lg:w-[280px]">
            <div className="bg-gray-100 rounded-xl p-8 flex flex-col items-center justify-center h-full min-h-[200px]">
              <span className="text-black text-5xl sm:text-6xl font-bold mb-2">4.8</span>
              <div className="flex gap-1 mb-2">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={20} fill="#FFC107" stroke="#FFC107" />
                ))}
              </div>
              <p className="text-gray-500 text-sm">based on 16+ reviews</p>
            </div>
          </div>

          {/* Marquee Carousel */}
          <div className="flex-1 overflow-hidden relative flex items-center">
            <Marquee gradient={false} speed={50} className="py-0.5">
              {reviews.map((review) => (
                <div key={review.id} className="w-[320px] md:w-[450px] mx-3">
                  <div className="border border-gray-200 rounded-xl p-6 h-[250px] flex flex-col justify-between bg-gray-100 transition-all">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-black font-medium text-lg truncate pr-2 w-[70%]">
                          {review.name}
                        </h3>
                        <div className="flex shrink-0">{renderStars(review.rating)}</div>
                      </div>
                      <p className="text-gray-400 text-xs mb-4">
                        {review.date} | {review.location}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                        {review.text}
                      </p>
                    </div>

                    <button
                      onClick={() => openModal(review)}
                      className="text-gray-400 text-sm underline self-start hover:text-black cursor-pointer transition-all duration-300 mt-2"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

      </div>

      {/* --- MODAL (With Smooth Framer Motion) --- */}
      <AnimatePresence>
        {selectedReview && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">

            {/* Backdrop (Fade In/Out) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal Content (Pop In/Out) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col relative z-10"
            >
              {/* Header */}
              <div className="flex justify-between items-start p-6 border-b border-gray-100">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedReview.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">{renderStars(selectedReview.rating)}</div>
                    <span className="text-sm text-gray-400">• {selectedReview.date}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{selectedReview.location}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors duration-300 text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
                  {selectedReview.text}
                </p>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Verified Review</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Testimonials2;