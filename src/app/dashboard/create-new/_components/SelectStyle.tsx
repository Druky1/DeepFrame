"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function SelectStyle({onUserSelect} : any) {
  const styleOptions = [
    {
      id: 1,
      name: "Modern",
      image:
        "https://i.pinimg.com/1200x/25/16/7f/25167f49ca7cf717e8edbcc78bac026d.jpg",
    },
    {
      id: 2,
      name: "Cartoon",
      image:
        "https://i.pinimg.com/736x/cd/6f/a6/cd6fa65a8169e04861fa06c9923ad6c9.jpg",
    },
    {
      id: 3,
      name: "Comic",
      image:
        "https://i.pinimg.com/736x/4d/9b/94/4d9b9440032202aacd7cae6f2bd5f199.jpg",
    },
    {
      id: 4,
      name: "Animated",
      image:
        "https://i.pinimg.com/1200x/6d/74/dc/6d74dc3155c47e67271486857c2b275e.jpg",
    },
    {
      id: 5,
      name: "GTA",
      image:
        "https://i.pinimg.com/736x/8b/ef/27/8bef2771baab1a2768adee4e9f863933.jpg",
    }
  ];

  const [styleSelected, setStyleSelected] = React.useState('');

  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl">Style</h2>
      <p className="text-gray-500 mt-2 text-sm">
        Select the style of your video
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
        {styleOptions.map((item) => (
          <motion.div
            key={item.id}
            className={`relative w-full h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer
              ${styleSelected === item.name ? "border-4 border-purple-400" : ""}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => {setStyleSelected((prev) => (prev === item.name ? "" : item.name))
              onUserSelect("imageStyle", item.name);
            }}
          >
            <Image
              className="object-cover"
              fill
              src={item.image}
              alt={item.name}
            />
            <motion.div
              className="absolute inset-0 flex items-end p-2 justify-center bg-black/40 text-white text-lg font-semibold opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {item.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SelectStyle;
