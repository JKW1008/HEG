// src/components/ProductCarousel.jsx
import { useState, useEffect } from "react";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

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

  // 무한 캐러셀을 위해 앞뒤로 복제 아이템 추가
  const extendedItems = [
    ...items.slice(-4), // 마지막 4개를 앞에 복제
    ...items, // 원본 8개
    ...items.slice(0, 4), // 첫 4개를 뒤에 복제
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // 무한 루프 처리
  useEffect(() => {
    if (currentIndex >= items.length + 4) {
      // 끝에 도달하면 처음으로 (애니메이션 없이)
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(4);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    } else if (currentIndex < 4) {
      // 처음보다 앞으로 가면 끝으로 (애니메이션 없이)
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(items.length + 3);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  }, [currentIndex, items.length]);

  return (
    <section className="w-full bg-gray-100 pt-12 pb-20">
      <div className="max-w-[1920px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            패키지 구성품
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{ transform: `translateX(-${currentIndex * 24}%)` }}
            >
              {extendedItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="w-[24%] flex-shrink-0 px-2"
                >
                  <div
                    className={`${item.bgColor} rounded-[3rem] shadow-lg border-4 ${item.borderColor} aspect-[200/240] flex flex-col items-center pt-[4.17%] px-[5%]`}
                  >
                    {/* 내부 정사각형 컨테이너 - 90% 너비 (180/200) */}
                    <div className="bg-white rounded-[2rem] flex items-center justify-center aspect-square w-full">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 transform rotate-12 drop-shadow-lg">
                        {item.title.split(" ")[0]}
                      </div>
                    </div>

                    {/* 텍스트 영역 - 남은 공간 활용 */}
                    <div className="flex-1 flex items-center justify-center min-h-0">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white text-center">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 숨겨진 화살표 - 클릭 영역만 유지 */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-0 w-16 h-full opacity-0 z-10"
            aria-label="이전 슬라이드"
          />

          <button
            onClick={nextSlide}
            className="absolute right-0 top-0 w-16 h-full opacity-0 z-10"
            aria-label="다음 슬라이드"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
