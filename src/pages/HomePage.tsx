import { motion } from 'framer-motion';
import ParallaxImage from '../components/ParallaxImage';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { ChevronRight, Camera } from 'lucide-react';
import { featuredPhotos } from '../data/photos';

const HomePage = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Auto rotate featured photos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % featuredPhotos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold mb-6 leading-tight">
              Capturing Moments in <span className="text-blue-600 dark:text-blue-400">Stunning</span> Detail
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Experience photography like never before with our immersive 3D portfolio showcasing moments frozen in time with depth and dimension.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/portfolio" variant="primary" size="lg">
                View Portfolio
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Book a Session
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px]"
          >
            <ParallaxImage
              src="https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Professional camera capturing a beautiful mountain landscape"
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
              scale={1.05}
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-12">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-serif font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Works
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore some of our finest photography showcasing the beauty of the world through our lens.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPhotos.slice(0, 6).map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ParallaxImage
                src={photo.src}
                alt={photo.alt}
                tiltMaxAngleX={7}
                tiltMaxAngleY={7}
                perspective={1000}
                scale={1.05}
              />
              <h3 className="mt-4 text-lg font-medium">{photo.alt}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{photo.category}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button to="/portfolio" variant="outline">
            View All Works <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800 rounded-2xl">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-serif font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Clients Say
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Wedding Client",
                quote: "The 3D photography experience was absolutely mind-blowing. My wedding photos have a depth and emotion that I've never seen before.",
              },
              {
                name: "Michael Chen",
                role: "Corporate Client",
                quote: "Our product catalog came to life with these incredible 3D photos. Our customers can almost feel the products through the screen.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                    <Camera className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <motion.div 
          className="bg-gray-900 dark:bg-gray-800 text-white rounded-2xl p-8 sm:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">Let's collaborate to capture your special moments with our cutting-edge 3D photography techniques.</p>
          <Button to="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;