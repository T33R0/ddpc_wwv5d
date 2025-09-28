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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -450]);

  if (images.length < 7) {
    return null; // Ensure we have enough images
  }

  const [img1, img2, img3, img4, img5, img6, img7] = images;

  return (
    <div ref={container} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Main center image */}
        <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
          <Image src={img1!.src} fill alt={img1!.alt} className="object-cover" />
        </motion.div>

        {/* Other images with different positions and transforms */}
        <motion.div style={{ y: y1 }} className="absolute top-[10vh] left-[5vw] w-[20vw] h-[30vh]">
          <Image src={img3!.src} fill alt={img3!.alt} className="object-cover" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute bottom-[10vh] right-[5vw] w-[15vw] h-[25vh]">
          <Image src={img4!.src} fill alt={img4!.alt} className="object-cover" />
        </motion.div>
        <motion.div style={{ y: y3 }} className="absolute top-[5vh] right-[10vw] w-[25vw] h-[20vh]">
          <Image src={img2!.src} fill alt={img2!.alt} className="object-cover" />
        </motion.div>
        <motion.div style={{ y: y4 }} className="absolute bottom-[20vh] left-[10vw] w-[15vw] h-[40vh]">
          <Image src={img5!.src} fill alt={img5!.alt} className="object-cover" />
        </motion.div>
        <motion.div style={{ y: y1 }} className="absolute bottom-[5vh] left-[30vw] w-[10vw] h-[15vh]">
          <Image src={img6!.src} fill alt={img6!.alt} className="object-cover" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute top-[30vh] right-[25vw] w-[12vw] h-[18vh]">
          <Image src={img7!.src} fill alt={img7!.alt} className="object-cover" />
        </motion.div>
      </div>
    </div>
  );
};
