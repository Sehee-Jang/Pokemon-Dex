# 포켓몬 대시보드

이 프로젝트는 사용자가 자신만의 포켓몬 팀을 구성하고, 개별 포켓몬에 대한 정보를 조회하며, 선택된 팀을 로컬 스토리지를 통해 관리할 수 있는 React 기반의 포켓몬 대시보드 애플리케이션입니다.


## 목차

1. [기능](#기능)
2. [프로젝트 구조](#프로젝트-구조)
3. [사용 방법](#사용-방법)
4. [의존성](#의존성)


## 기능

- **홈 페이지**: "포켓몬 도감 시작하기" 버튼을 클릭하여 포켓몬 도감 페이지로 이동할 수 있습니다.
- **포켓몬 도감**: 다양한 포켓몬을 검색하고 최대 6개의 포켓몬을 팀에 추가할 수 있습니다.
- **대시보드**: 선택한 포켓몬 팀을 조회하고 팀에서 제거할 수 있습니다.
- **상세 정보 페이지**: 개별 포켓몬에 대한 상세 정보를 확인할 수 있습니다.
- **로컬 스토리지 연동**: 선택한 포켓몬 팀이 로컬 스토리지에 저장되어, 다음 방문 시에도 유지됩니다.


## 프로젝트 구조

이 프로젝트의 구조는 다음과 같습니다:

```
src/
├── components/
│   ├── Button.jsx             # styled-components를 사용하여 커스텀 버튼 컴포넌트
│   ├── Dashboard.jsx          # 선택된 포켓몬을 관리하는 대시보드 컴포넌트
│   ├── PokemonCard.jsx        # 개별 포켓몬을 추가/제거하는 카드 컴포넌트
│   ├── PokemonList.jsx        # 포켓몬 카드 목록을 표시하는 컴포넌트
├── pages/
│   ├── Home.jsx               # 포켓몬 도감을 시작하는 홈 페이지 컴포넌트
│   ├── PokeDex.jsx            # 포켓몬 도감 페이지 컴포넌트
│   ├── CardDetails.jsx        # 포켓몬 상세 정보를 보여주는 컴포넌트
├── redux/
│   ├── modules/
│   │   └── cards.js           # 포켓몬 선택을 관리하는 Redux 모듈
│   └── store.js               # Redux 스토어 설정 파일
├── shared/
│   ├── Router.jsx             # React Router를 사용하여 애플리케이션 라우팅
├── styles/
│   └── GlobalStyle.js         # styled-components를 사용한 글로벌 스타일
├── App.jsx                    # 메인 애플리케이션 컴포넌트
└── index.js                   # React 애플리케이션의 진입점
```

## 사용 방법

- 홈페이지에서 "포켓몬 도감 시작하기" 버튼을 클릭하여 포켓몬 도감을 시작하세요.
- 도감 페이지에서 원하는 포켓몬 카드를 클릭하여 팀에 추가할 수 있습니다(최대 6마리).
- 대시보드에서 선택한 포켓몬 팀을 확인할 수 있으며, 필요 시 포켓몬을 제거할 수 있습니다.
- 포켓몬을 클릭하면 상세 페이지에서 해당 포켓몬에 대한 자세한 정보를 볼 수 있습니다.
- 선택한 포켓몬 팀은 자동으로 로컬 스토리지에 저장되며, 다음 방문 시에도 유지됩니다.


## 의존성

- **React**: 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리.
- **React Router DOM**: React 애플리케이션을 위한 선언적 라우팅.
- **Redux**: 예측 가능한 상태 관리를 위한 JavaScript 컨테이너.
- **Styled-components**: React 애플리케이션의 스타일링을 위한 비주얼 프리미티브.
- **로컬 스토리지**: 선택된 포켓몬 팀을 저장하기 위해 브라우저의 로컬 스토리지를 사용.