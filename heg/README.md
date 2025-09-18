# HEG - 언어 교육완구 웹사이트

HEG는 한국어와 영어 학습을 위한 혁신적인 교육완구를 소개하는 React 기반 웹사이트입니다. "하나의 소리, 두개의 그림"이라는 컨셉으로 같은 발음의 다른 언어를 큐브 형태로 표현하여 언어 학습에 흥미를 더합니다.

## 🚀 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **스냅 스크롤**: 부드러운 전체 화면 섹션 전환
- **제품 캐러셀**: Swiper.js를 활용한 인터랙티브 제품 소개
- **고정 헤더**: 스크롤 시에도 항상 접근 가능한 네비게이션

## 🛠 기술 스택

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Swiper 12.0.1 (캐러셀)
- **Linting**: ESLint

## 📁 프로젝트 구조

```
heg/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # 고정 헤더 컴포넌트
│   │   ├── MainBackground.jsx      # 메인 섹션
│   │   ├── ProductCarousel.jsx     # 제품 캐러셀
│   │   └── ProductInformation.jsx  # 제품 정보
│   ├── assets/images/             # 이미지 파일들
│   ├── App.jsx                    # 메인 앱 컴포넌트
│   ├── main.jsx                   # 엔트리 포인트
│   └── index.css                  # 전역 스타일
├── public/                        # 정적 파일들
└── netlify.toml                   # Netlify 배포 설정
```

## 🏗 설치 및 실행

### 필수 조건
- Node.js (권장: 18.0.0 이상)
- npm 또는 yarn

### 설치
```bash
# 저장소 클론
git clone [repository-url]
cd heg

# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:5173`으로 접속

### 빌드
```bash
npm run build
```

### 미리보기
```bash
npm run preview
```

## 🎯 페이지 섹션

### 1. 메인 배경 섹션
- 제품 소개 문구와 배경 이미지
- "하나의 소리, 두개의 그림" 컨셉 설명
- 반투명 오버레이로 가독성 향상

### 2. 제품 캐러셀 섹션
- 8개의 학습 큐브 소개 (A~D 발음과 한글 조합)
- 자동 재생 및 수동 네비게이션
- 반응형 슬라이드 개수 (모바일: 1개, 태블릿: 2-3개, 데스크톱: 4개)

### 3. 추가 이미지 캐러셀
- 확장 가능한 섹션 구조

## 🎨 디자인 특징

- **색상 테마**: 각 학습 큐브별 고유 색상 (오렌지, 노랑, 초록, 파랑, 보라)
- **타이포그래피**: 볼드 폰트로 강조된 제목과 읽기 쉬운 본문
- **애니메이션**: 호버 효과 및 부드러운 전환
- **접근성**: 적절한 대비와 alt 텍스트 제공

## 📱 반응형 브레이크포인트

- **Mobile**: 320px 이상
- **Tablet**: 640px 이상
- **Desktop**: 1024px 이상
- **Large Desktop**: 1280px 이상

## 🚀 배포

이 프로젝트는 Netlify에 배포하도록 설정되어 있습니다. `netlify.toml` 파일에 배포 설정이 포함되어 있습니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.

---

**HEG** - 언어 학습의 새로운 경험을 만들어갑니다. 🎓