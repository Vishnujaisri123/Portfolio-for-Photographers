import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import PhotoGallery from '../components/PhotoGallery';
import { allPhotos, categories } from '../data/photos';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const handlePrevCategory = () => {
    setCurrentCategoryIndex((prevIndex) => 
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => 
      (prevIndex + 1) % categories.length
    );
  };

  const currentCategory = categories[currentCategoryIndex];

  return (
    <div>
      <PageHeader 
        title="Portfolio" 
        subtitle="Explore our collection of professional photographs across various styles and subjects." 
      />

      <div className="mb-12">
        <div className="flex items-center justify-center mb-8">
          <button 
            onClick={handlePrevCategory} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous category"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <motion.h2 
            key={currentCategory}
            className="text-3xl font-serif font-medium mx-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentCategory}
          </motion.h2>
          <button 
            onClick={handleNextCategory} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next category"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        <motion.div
          key={currentCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PhotoGallery 
            photos={allPhotos.filter(photo => photo.category === currentCategory)} 
          />
        </motion.div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-serif font-semibold mb-6 text-center">Complete Collection</h2>
        <PhotoGallery photos={allPhotos} categories={categories} />
      </div>
    </div>
  );
};

export default PortfolioPage;