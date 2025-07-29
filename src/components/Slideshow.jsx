import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Slideshow = ({ folder }) => {
  const slides = Array.from({ length: 7 }, (_, i) => `/${folder}/${i + 1}.jpg`);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop
      autoplay={{ delay: 2500 }}
      className="w-[80vw] max-w-md rounded-xl overflow-hidden border-4 border-pink-200 shadow-lg"
    >
      {slides.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img src={src} alt={`Slide ${idx}`} className="w-full h-auto object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slideshow;
