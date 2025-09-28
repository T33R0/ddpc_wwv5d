'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

export const ZoomParallax = ({ images }: { images: { src: string; alt: string }[] }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  if (images.length < 7) {
    return null; // Or a fallback UI
  }

  return (
    <div ref={container} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen bg-black">
        {images.slice(0, 7).map((image, index) => (
          <motion.div
            key={index}
            style={{ scale: scales[index] }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <div className="relative w-[25vw] h-[25vh] md:w-[20vw] md:h-[20vh]">
              <Image
                src={image.src}
                fill
                alt={image.alt}
                className="object-cover"
                placeholder="blur"
                blurDataURL={image.src}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
