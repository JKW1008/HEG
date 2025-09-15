const MainBackground = () => {
  return (
    <>
      <div
        className="w-full aspect-[900/309] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/MainBackground.png')" }}
      >
        <div className="absolute inset-0 bg-gray-400/30"></div>

        <div className="absolute bottom-12 left-24 z-10">
          <div className="bg-black/40 backdrop-blur-sm rounded-[36px] px-12 py-6 max-w-2xl">
            <h1 className="text-white text-xl md:text-2xl font-bold mb-3 text-left">
              하나의 소리, 두개의 그림
            </h1>
            <p className="text-white text-sm md:text-base leading-relaxed text-left">
              같은 소리가 나는 두개의 다른 언어를 하나의 큐브에서 표현하여,
              <br />
              언어라는 그림의 형태 변화에 흥미를 가지게 되는 언어 교육완구
              <br />
              <br />
              다양한 감각을 자극하여 더 효율적인 언어 공부가 가능해요.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBackground;
