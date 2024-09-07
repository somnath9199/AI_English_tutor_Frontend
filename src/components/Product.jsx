import React from 'react';
import { motion } from 'framer-motion';
import productimage from '../assets/first.svg';
import Secondimage from '../assets/second.svg';
import Thirdimage from '../assets/Third.svg';
import FourthImage from '../assets/Fourth.svg';
import FifthImage from '../assets/Fifth.svg';
import SixthImage from '../assets/Sixth.svg';

const Product = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Headline and Subheadline */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-green-500 font-bold mb-4">Discover Our AI English Tutor</h2>
          <p className="text-lg text-gray-700">
            Transform your English learning experience with our advanced AI-powered tutor.
          </p>
        </motion.div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <img src={productimage} alt="Personalized Learning Paths" className="w-[12rem] h-[12rem] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Personalized Learning Paths</h3>
            <p className="text-gray-600 text-center">
              Customizes lessons based on individual proficiency and learning style.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <img src={Secondimage} alt="Interactive Speaking Practice" className="w-[18rem] h-[12rem] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Interactive Speaking Practice</h3>
            <p className="text-gray-600 text-center">
              Provides real-time speech recognition and feedback on pronunciation.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <img src={Thirdimage} alt="Grammar and Vocabulary Enhancement" className="w-[12rem] h-[12rem] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Grammar and Vocabulary Enhancement</h3>
            <p className="text-gray-600 text-center">
              Offers exercises and quizzes to improve grammar and expand vocabulary.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <img src={FourthImage} className="w-[12rem] h-[12rem] mb-4 mx-auto" alt="24/7 Availability" />
            <h3 className="text-xl font-semibold mb-2 text-center">24/7 Availability</h3>
            <p className="text-gray-600 text-center">
              Provides access to learning materials and tutoring any time of the day.
            </p>
          </motion.div>

          {/* Feature 5 */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <img src={FifthImage} alt="Adaptive AI Tutor" className="w-[12rem] h-[12rem] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Adaptive AI Tutor</h3>
            <p className="text-gray-600 text-center">
              Uses advanced AI to analyze user progress and adjust lesson difficulty accordingly.
            </p>
          </motion.div>

          {/* Feature 6 */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <img src={SixthImage} alt="Progress Tracking and Analytics" className="w-[12rem] h-[12rem] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Progress Tracking and Analytics</h3>
            <p className="text-gray-600 text-center">
              Provides detailed reports and analytics on user performance and progress.
            </p>
          </motion.div>
        </div>
      </div> 
    </section>
  );
};

export default Product;
