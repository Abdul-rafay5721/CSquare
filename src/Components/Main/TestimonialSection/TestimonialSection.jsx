import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "https://preview.colorlib.com/theme/avo/images/person_3.jpg",
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "https://preview.colorlib.com/theme/avo/images/person_1.jpg",
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "https://preview.colorlib.com/theme/avo/images/person_2.jpg",
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "https://preview.colorlib.com/theme/avo/images/person_3.jpg",
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "https://preview.colorlib.com/theme/avo/images/person_2.jpg",
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "https://preview.colorlib.com/theme/avo/images/person_2.jpg",
    name: "Roger Scott",
    position: "Marketing Manager",
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center mb-20 px-4 mt-10 sm:px-10 md:px-20 lg:px-64">
      <div className="mb-8 text-center">
        <h2 className="text-3xl mb-3 font-bold">CLIENTS SAY ABOUT US?</h2>
      </div>
      <div className="relative w-full">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              width: `${(testimonials.length * 100) / 3}%`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-1/3 p-4"
              >
                <div className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-600">
                  <div className="text-base mb-3 flex-grow">
                    <FaQuoteLeft className="text-red-600 text-2xl mb-2" />
                    <p>{testimonial.text}</p>
                  </div>
                  <div className="flex items-center mt-6">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-red-600"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    />
                    <div className="pl-3">
                      <p className="font-semibold text-red-600">{testimonial.name}</p>
                      <span className="text-sm text-gray-500">{testimonial.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
          aria-label="Next slide"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
