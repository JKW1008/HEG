import ReactFullpage from "@fullpage/react-fullpage";
import Header from "./components/Header";
import ImageCarousel from "./components/ImageCarousel";
import MainBackground from "./components/MainBackground";
import ProductCarousel from "./components/ProductCarousel";

const App = () => {
  return (
    <>
      {/* 고정 헤더 */}
      <Header />

      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
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
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {/* 섹션 1: 메인 배경 */}
              <div className="section">
                <MainBackground />
              </div>

              {/* 섹션 2: 제품 캐러셀 */}
              <div className="section">
                <ProductCarousel />
              </div>

              {/* 섹션 3: 이미지 갤러리 */}
              <div className="section">
                <ImageCarousel />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default App;
