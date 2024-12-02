"use client";
import ProductSlider from './slide1';

export const Section1 = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Sliding Text */}
      <div className="relative py-16">
        <div className="relative mb-40 overflow-hidden">
          <div className="inline-block font-bold text-[50px] text-center italic animate-left">
            <p className="mb-4 leading-none">
              The Perfect Gift <span className="text-[#276598]">&nbsp;&nbsp;Sell Giftcards Online</span>
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="container mx-auto flex items-start gap-6">
          {/* Featured Card */}
          <div className="relative h-[500px] w-[450px] shrink-0 bg-[url('/card1.webp')] bg-cover bg-center px-8 pt-80">
            <div 
              className="absolute inset-0" 
              style={{
                background: "linear-gradient(180deg, rgba(66, 66, 66, 0.13) 52.6%, rgba(66, 66, 66, 0.70) 81.25%)"
              }}
            />
            <div className="relative z-10 text-white">
              <p className="mb-4 font-bold text-3xl">SELLING FAST</p>
              <p className="text-[15px]">Direct customers where YOU want them to go.</p>
              <p className="text-[15px]">Place the units you want to MOVE here.</p>
            </div>
          </div>

          {/* Slider Section */}
          <div className="w-[calc(100%-474px)] pr-12">
            <ProductSlider />
          </div>
        </div>
      </div>
    </div>
  );
};