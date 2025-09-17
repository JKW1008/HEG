const MainBackground = () => {
  return (
    <section
      className="w-screen h-screen bg-cover bg-center bg-no-repeat relative flex items-end overflow-hidden"
      style={{
        backgroundImage: "url('/images/MainBackground.png')",
      }}
    >
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-gray-400/10"></div>

      {/* 컨텐츠 */}
      <div className="relative z-10 w-full p-4 sm:p-6 md:p-12 lg:p-16 xl:p-24">
        <div className="bg-black/40 backdrop-blur-sm rounded-[20px] sm:rounded-[24px] md:rounded-[30px] lg:rounded-[36px] px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-12 lg:py-6 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <h1 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-1 sm:mb-2 md:mb-3 text-left">
            하나의 소리, 두개의 그림
          </h1>
          <p className="text-white text-xs sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg leading-relaxed text-left">
            같은 소리가 나는 두개의 다른 언어를 하나의 큐브에서 표현하여,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            언어라는 그림의 형태 변화에 흥미를 가지게 되는 언어 교육완구
            <br />
            <br />
            다양한 감각을 자극하여 더 효율적인 언어 공부가 가능해요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainBackground;
