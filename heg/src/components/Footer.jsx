import logoImage from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="max-w-[1920px] mx-auto px-12">
        {/* 상단 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* 로고 및 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <img
              src={logoImage}
              alt="HEG Logo"
              className="h-12 w-auto object-contain mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              하나의 소리, 두개의 그림<br />
              언어라는 그림의 형태 변화에 흥미를 가지게 되는 언어 교육완구
            </p>
            <p className="text-gray-400 text-xs">
              © 2024 HEG. All rights reserved.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  홈
                </a>
              </li>
              <li>
                <a href="#shop" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  상품
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  소개
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  문의
                </a>
              </li>
            </ul>
          </div>

          {/* 고객 지원 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <a href="#support" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  고객센터
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  이용약관
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 구분선 */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs mb-4 md:mb-0">
              서울특별시 강남구 테헤란로 123, HEG 빌딩 | 대표: 홍길동 | 사업자등록번호: 123-45-67890
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="text-xs">개인정보처리방침</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="text-xs">이용약관</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;