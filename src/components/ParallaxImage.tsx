import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  perspective?: number;
  scale?: number;
  transitionSpeed?: number;
  gyroscope?: boolean;
}

const ParallaxImage = ({
  src,
  alt,
  className = "",
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  perspective = 1000,
  scale = 1.05,
  transitionSpeed = 500,
  gyroscope = true
}: ParallaxImageProps) => {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={imgRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <Tilt
        tiltMaxAngleX={tiltMaxAngleX}
        tiltMaxAngleY={tiltMaxAngleY}
        perspective={perspective}
        scale={scale}
        transitionSpeed={transitionSpeed}
        gyroscope={gyroscope}
        className="overflow-hidden rounded-lg shadow-lg"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </Tilt>
    </motion.div>
  );
};

export default ParallaxImage;