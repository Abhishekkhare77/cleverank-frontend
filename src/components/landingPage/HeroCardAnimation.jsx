"use client"; // Ensure this is for client-side rendering

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialCards = [
  { id: "3", src: "/research-Paper/Paper-3.png" },
  { id: "4", src: "/research-Paper/Paper-4.png" },
  { id: "6", src: "/research-Paper/Paper-6.png" },
  { id: "8", src: "/research-Paper/Paper-8.png" },
  { id: "9", src: "/research-Paper/Paper-9.png" },
  { id: "10", src: "/research-Paper/Paper-10.png" },
  { id: "12", src: "/research-Paper/Paper-12.png" },
];

const HeroCardAnimation = () => {
  const [cardOrder, setCardOrder] = useState(initialCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardOrder((prev) => [...prev.slice(1), prev[0]]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stack relative h-[24rem] w-72 mr-32  mb-8">
      <AnimatePresence>
        {cardOrder.map((card, index) => (
          <motion.div
            key={card.id}
            className="card absolute inset-0 flex items-center justify-center  shadow-lg  border bottom-10 right-20 h-full w-full"
            style={{
              zIndex: cardOrder.length - index,
            }}
            animate={{
              translateX: index * 10,
              translateY: index * 10,
            }}
            initial={{ translateX: 0, translateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            <Image
              src={card.src}
              alt={`Card ${card.id}`}
              height={1000}
              width={1000}
              className="object-cover h-full w-full"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeroCardAnimation;
