"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const ProductSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      hoverImg: "/car1.webp",
      img: "/car-hover1.webp",
      title: "2024 Kawasaki Mule SX 4x4 XC LE",
      description: "Off-road performance bike",
      price: 10799
    },
    {
      id: 2,
      hoverImg: "/car2.webp",
      img: "/car-hover2.webp",
      title: "2024 Kawasaki Mule SX 4x4 xc",
      description: "Motocross champion",
      price: 9799
    },
    {
      id: 3,
      hoverImg: "/car3.webp",
      img: "/car-hover3.webp",
      title: "2024 Kawasaki Mule SX 4x4 FE",
      description: "Professional dirt bike",
      price: 10199
    },
    {
      id: 4,
      hoverImg: "/car4.webp",
      img: "/car-hover4.webp",
      title: "2024 Kawasaki Mule PRO-MX SE",
      description: "Competition motorcycle",
      price: 15499
    },
    {
      id: 5,
      hoverImg: "/car5.webp",
      img: "/car-hover5.webp",
      title: "2024 Kawasaki Mule SX 4x4",
      description: "High-performance dirt bike",
      price: 9499
    },
    {
      id: 6,
      hoverImg: "/car5.webp",
      img: "/car-hover5.webp",
      title: "2024 Kawasaki Mule SX",
      description: "High-performance dirt bike",
      price: 8199
    },
    {
      id: 7,
      hoverImg: "/car7.webp",
      img: "/car-hover7.webp",
      title: "2024 Kawasaki Mule PRO-MX EPS",
      description: "High-performance dirt bike",
      price: 14099
    },
  ];

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 800 ;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 800;  
    }
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Slider Controls */}
      <div className="mb-4 flex justify-end absolute bottom-full right-0 z-10">
        <div className="flex gap-2">
          <button 
            onClick={slideLeft}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <AiOutlineArrowLeft className="text-xl" />
          </button>
          <button 
            onClick={slideRight}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <AiOutlineArrowRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="overflow-hidden">
      <div 
        ref={sliderRef}
        className="flex gap-8 overflow-x-hidden scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {products.map((product) => (
          <div 
            key={product.id} 
            className="flex-none w-[300px] md:w-[450px]"
          >
            <Link href={`/products/${product.id}`} className="block">
              <div className="group relative h-[435px] overflow-hidden">
                <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src={product.hoverImg}
                  alt={`${product.title} alternate view`}
                  fill
                  className="object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-[18px] text-gray-900 font-[Silverstone Sans,sans-serif] font-medium">{product.title}</h3>
              <p className="mt-2 text-[15px] font-normal text-gray-900 font-[-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol]">
                ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD
              </p>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ProductSlider;