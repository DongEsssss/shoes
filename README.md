# ⭐ Starlight SHOES

**Starlight SHOES**는 "내가 신발 쇼핑몰을 만든다면 어떤 모습일까?"라는 고민에서 시작한 개인 웹 프로젝트입니다.  
Nike, ABC Mart 등 다양한 실존 쇼핑몰의 UI/UX 요소를 벤치마킹하여, 사용자 친화적인 메인 페이지를 직접 디자인하고 구현했습니다.  
디자인과 코드 모두 처음부터 직접 설계하였으며, 작은 디테일까지 신경 써서 구성했습니다.

>  ## 🎥 시연 영상
[![Starlight SHOES 시연 영상](https://img.youtube.com/vi/y4ZW83wWuncf/0.jpg)](https://youtu.be/y4ZW83wWuncf)


---

## 🛠️ 기술 스택

- **Frontend**: React + TypeScript
- **Styling**: SCSS (모듈 방식)
- **Data**: 로컬 `.json` 파일 기반 mock 데이터 사용
- **라이브러리**: Swiper, React Icons 등

---

## 📂 폴더 구조
<pre lang="md"><code>
shoes/
├── public/
│   └── index.html
├── src/
│   ├── assets/            # 이미지, 폰트 등 정적 리소스
│   ├── components/        # 버튼, 카드 등 재사용 컴포넌트
│   ├── data/              # shoes-data.json 등 mock 데이터
│   ├── pages/             # 메인 페이지
│   ├── styles/            # 전역 및 변수 SCSS
│   ├── utils/             # 유틸 함수
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── tsconfig.json
</code></pre>


---

## ✨ 프로젝트 특징 및 배운 점

### 🎨 디자인 중심 사고

- 다양한 실존 웹사이트의 구조, 스타일을 참고하여 **처음부터 끝까지 직접 디자인**했습니다.
- 단순한 복제가 아닌 **사용자 흐름, 정보 배치, 시각적 리듬**까지 고려한 설계

### ⚙️ 라이브러리 커스터마이징 경험

- `Swiper`를 도입하여 **자동 슬라이드, loop, pagination** 등 옵션을 설정하고,
- SCSS를 통해 스타일을 커스터마이징하면서 **외부 라이브러리와의 통합 경험**을 쌓을 수 있었습니다.
- `React Icons`를 활용하여 SVG 아이콘을 통일감 있게 적용

### 💡 SCSS + TypeScript 연동

- 전역 변수 및 믹스인을 관리하는 `variables.scss` 구성
- CSS Modules 형식(`.module.scss`)을 적용하여 **스타일 범위 충돌 방지**
- 타입스크립트와의 연결을 위해 `*.scss`에 대한 모듈 선언 처리

### 📁 구조적인 코드 설계

- 기능 및 관심사 기반으로 디렉토리 구조를 나누고 컴포넌트를 역할별로 분리
- `components`, `pages`, `data`, `styles`, `utils` 폴더 등으로 **모듈화된 구성**
- 유지보수성과 재사용성을 고려한 컴포넌트 중심 개발 방식

---
