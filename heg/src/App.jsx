// App.jsx 예시
import Header from "./components/Header";
import ImageCarousel from "./components/ImageCarousel";
import MainBackground from "./components/MainBackground";
import ProductCarousel from "./components/ProductCarousel";

const App = () => {
  return (
    <div className="snap-container">
      {/* 고정 헤더 */}
      <Header />

      {/* 스냅 스크롤 컨테이너 */}
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* 섹션 1: 메인 배경 */}
        <section className="h-screen w-screen snap-start snap-always">
          <MainBackground />
        </section>

        {/* 섹션 2: 제품 캐러셀 */}
        <section className="h-screen w-screen snap-start snap-always">
          <ProductCarousel />
        </section>

        {/* 섹션 3: 추가 섹션 예시 */}
        <section className="h-screen w-screen snap-start snap-always">
          <ImageCarousel />
        </section>
      </main>

      {/* CSS 스타일 */}
      <style jsx>{`
        .snap-container {
          height: 100vh;
          overflow: hidden;
        }

        main {
          scroll-behavior: smooth;
          scroll-snap-type: y mandatory;
        }

        /* 모바일에서 더 부드러운 스크롤 */
        @media (max-width: 768px) {
          main {
            -webkit-overflow-scrolling: touch;
          }
        }

        /* 섹션 전환 애니메이션 */
        section {
          scroll-snap-align: start;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </div>
  );
};

export default App;
