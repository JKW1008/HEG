// src/components/ProductCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ProductInformation from "./ProductInformation";

const ProductCarousel = () => {
  const items = [
    {
      id: 1,
      borderColor: "border-orange-400",
      bgColor: "bg-orange-400",
      title: "A ㅏ",
    },
    {
      id: 2,
      borderColor: "border-orange-500",
      bgColor: "bg-orange-500",
      title: "A ㅐ",
    },
    {
      id: 3,
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-400",
      title: "A ㅑ",
    },
    {
      id: 4,
      borderColor: "border-green-400",
      bgColor: "bg-green-400",
      title: "B ㅓ",
    },
    {
      id: 5,
      borderColor: "border-green-500",
      bgColor: "bg-green-500",
      title: "B ㅕ",
    },
    {
      id: 6,
      borderColor: "border-blue-400",
      bgColor: "bg-blue-400",
      title: "C ㅗ",
    },
    {
      id: 7,
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500",
      title: "C ㅜ",
    },
    {
      id: 8,
      borderColor: "border-purple-400",
      bgColor: "bg-purple-400",
      title: "D ㅡ",
    },
  ];

  return (
    <section className="w-screen h-screen bg-gray-100 flex flex-col justify-center items-center py-12 px-8">
      <div className="max-w-[1920px] w-full flex-1 flex flex-col justify-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            패키지 구성품
          </h2>
        </div>

        <div className="relative flex-1 flex items-center px-4">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={4}
            spaceBetween={16}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
            className="product-swiper w-full"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className={`${item.bgColor} rounded-[3rem] shadow-lg border-4 ${item.borderColor} aspect-[200/240] flex flex-col items-center pt-[4.17%] px-[5%]`}
                >
                  {/* 내부 정사각형 컨테이너 - 90% 너비 (180/200) */}
                  <div className="bg-white rounded-[2rem] flex items-center justify-center aspect-square w-full">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 transform rotate-12 drop-shadow-lg">
                      {item.title.split(" ")[0]}
                    </div>
                  </div>

                  {/* 텍스트 영역 - 남은 공간 활용 */}
                  <div className="flex-1 flex items-center justify-center min-h-0">
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 커스텀 네비게이션 버튼 (숨겨진 클릭 영역) */}
          <button
            className="swiper-button-prev-custom absolute left-0 top-0 w-16 h-full opacity-0 z-10"
            aria-label="이전 슬라이드"
          />
          <button
            className="swiper-button-next-custom absolute right-0 top-0 w-16 h-full opacity-0 z-10"
            aria-label="다음 슬라이드"
          />
        </div>

        {/* ProductInformation을 하단에 배치 */}
        <div className="mt-12 px-4">
          <ProductInformation />
        </div>
      </div>

      {/* Swiper 커스텀 스타일 */}
      <style jsx>{`
        .product-swiper {
          padding: 0 !important;
          height: auto;
        }

        .product-swiper .swiper-wrapper {
          align-items: stretch;
        }

        /* 기본 네비게이션 버튼 숨기기 */
        .product-swiper .swiper-button-next,
        .product-swiper .swiper-button-prev {
          display: none;
        }

        /* 슬라이드 호버 효과 */
        .product-swiper .swiper-slide {
          transition: transform 0.3s ease;
        }

        .product-swiper .swiper-slide:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
};

export default ProductCarousel;
