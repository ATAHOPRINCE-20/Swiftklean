import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BRAND } from '../constants/brand';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: HeroSlide[] = [
  {
    image: "https://res.cloudinary.com/dywusgc6j/image/upload/v1781348302/IMG_20260521_193357_385_tk9cv7.jpg",
    title: "Professional Laundry & Cleaning Services",
    subtitle: "Speed, hygiene, and reliability you can trust"
  },
  {
    image: "https://res.cloudinary.com/dywusgc6j/image/upload/v1781348144/IMG_0169_ze1w5t.jpg",
    title: "Homes That Feel Brand New",
    subtitle: "Deep cleaning solutions for residential and commercial spaces"
  },
  {
    image: "https://res.cloudinary.com/dywusgc6j/image/upload/v1781348139/IMG_0187_iqglu8.jpg",
    title: "Excellence in Every Finish",
    subtitle: "500+ happy clients, 5-star rated service"
  }
];

export function HeroSlider({ onBookNow }: { onBookNow: () => void }) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-8 w-full">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition" />
    ),
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[600px] md:h-[700px]">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
            </div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl text-white">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-slate-200">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={onBookNow}
                      className="bg-[#1F9EB6] hover:bg-[#178A9F] text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg shadow-[#1F9EB6]/30"
                    >
                      Get Free Quote
                    </button>
                    <button
                      onClick={onBookNow}
                      className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
