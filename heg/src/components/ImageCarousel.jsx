// src/components/ImageCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ImageCarousel = () => {
  const images = [
    {
      id: 1,
      src: "/images/MainCarosel1.png",
      alt: "다양한 색상의 3D 알파벳 블록들이 그리드 형태로 배열",
    },
    {
      id: 2,
      src: "/images/MainCarosel2.png",
      alt: "알파벳 블록들의 상세한 모습과 질감",
    },
    {
      id: 3,
      src: "/images/MainCarosel3.png",
      alt: "알파벳 블록으로 MAGIC 단어를 만든 모습",
    },
    {
      id: 4,
      src: "/images/MainCarosel4.png",
      alt: "손으로 알파벳 블록을 조작하는 모습",
    },
  ];

  return (
    <section className="w-screen h-screen relative bg-gray-100">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={1200}
        navigation={{
          prevEl: ".image-nav-prev",
          nextEl: ".image-nav-next",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        touchStartPreventDefault={false}
        touchMoveStopPropagation={false}
        allowTouchMove={true}
        touchRatio={1}
        touchAngle={45}
        threshold={10}
        className="w-full h-full"
        style={{
          touchAction: "pan-y pinch-zoom",
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-4/5 h-4/5 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 왼쪽 화살표 */}
      <button
        className="image-nav-prev absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14  flex items-center justify-center z-10 hover:bg-white/30 transition-all duration-200"
        aria-label="이전 이미지"
      >
        <svg
          className="w-14 h-14 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* 오른쪽 화살표 */}
      <button
        className="image-nav-next absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center z-10 hover:bg-white/30 transition-all duration-200"
        aria-label="다음 이미지"
      >
        <svg
          className="w-14 h-14 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Swiper 커스텀 스타일 */}
      <style jsx>{`
        /* 기본 네비게이션 버튼 숨기기 */
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }

        /* 슬라이드 전환 효과 */
        .swiper-slide {
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .swiper-slide-active {
          opacity: 1;
          transform: scale(1) translateZ(0);
        }

        .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.8;
          transform: scale(0.98) translateZ(0);
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel;
