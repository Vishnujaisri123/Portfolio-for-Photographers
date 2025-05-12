import { useState } from 'react';
import ParallaxImage from './ParallaxImage';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  categories?: string[];
}

const PhotoGallery = ({ photos, categories = [] }: PhotoGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [zoom, setZoom] = useState(1);

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openPhotoViewer = (photo: Photo) => {
    setSelectedPhoto(photo);
    setZoom(1);
  };

  const closePhotoViewer = () => {
    setSelectedPhoto(null);
    setZoom(1);
  };

  const increaseZoom = () => {
    setZoom(prev => Math.min(prev + 0.25, 2.5));
  };

  const decreaseZoom = () => {
    setZoom(prev => Math.max(prev - 0.25, 1));
  };

  return (
    <div className="w-full">
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center mb-8">
          <button
            className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'all' 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div 
            key={photo.id}
            onClick={() => openPhotoViewer(photo)}
            className="cursor-pointer"
          >
            <ParallaxImage
              src={photo.src}
              alt={photo.alt}
              tiltMaxAngleX={7}
              tiltMaxAngleY={7}
              perspective={1000}
              scale={1.05}
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closePhotoViewer}
          >
            <motion.div
              className="relative max-w-7xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className="absolute top-4 right-4 z-10 flex space-x-2">
                <button 
                  onClick={decreaseZoom}
                  className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors"
                >
                  <ZoomOut size={20} />
                </button>
                <button 
                  onClick={increaseZoom}
                  className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors"
                >
                  <ZoomIn size={20} />
                </button>
                <button 
                  onClick={closePhotoViewer}
                  className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="overflow-auto max-h-[90vh] flex items-center justify-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="max-w-full h-auto object-contain transition-transform duration-200"
                  style={{ transform: `scale(${zoom})` }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;