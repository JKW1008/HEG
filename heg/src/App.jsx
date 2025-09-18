import ReactFullpage from "@fullpage/react-fullpage";
import Header from "./components/Header";
import ImageCarousel from "./components/ImageCarousel";
import MainBackground from "./components/MainBackground";
import ProductCarousel from "./components/ProductCarousel";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>


      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        scrollingSpeed={700}
        easing={'easeInOutCubic'}
        easingcss3={'ease-in-out'}
        navigation={false}
        anchors={['main', 'products', 'gallery']}
        navigationTooltips={['메인', '제품', '갤러리']}
        controlArrows={false}
        verticalCentered={true}
        fitToSection={true}
        fitToSectionDelay={1000}
        scrollBar={false}
        autoScrolling={true}
        normalScrollElements={''}
        bigSectionsDestination={'top'}
        touchSensitivity={15}
        normalScrollElementTouchThreshold={5}
        keyboardScrolling={true}
        animateAnchor={true}
        recordHistory={true}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              {/* 섹션 1: 메인 배경 + 헤더 */}
              <div className="section relative">
                <div className="absolute top-0 left-0 right-0 z-50">
                  <Header />
                </div>
                <MainBackground />
              </div>

              {/* 섹션 2: 제품 캐러셀 */}
              <div className="section">
                <ProductCarousel />
              </div>

              {/* 섹션 3: 이미지 갤러리 + 푸터 */}
              <div className="section flex flex-col">
                <div className="flex-1">
                  <ImageCarousel />
                </div>
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />

      {/* fullPage.js 워터마크 숨기기 */}
      <style jsx global>{`
        .fp-watermark {
          display: none !important;
        }
      `}</style>
    </>
  );
};

export default App;
