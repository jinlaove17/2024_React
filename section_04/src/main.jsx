// 4.1) React.js를 소개합니다.

// React.js란?
// - Meta(Facebook)이 개발한 오픈소스 JavaScript 라이브러리
// - 대규모 웹 서비스의 UI를 더 편하게 개발하기 위해 만들어진 기술
// - ex) Neflex, FaceBook, Instagram, Notion, ...

// React의 기술적인 특징
// - 컴포넌트 기반으로 UI를 표현한다.
// - 화면 업데이트 구현이 쉽다.
// - 화면 업데이트가 빠르게 처리된다.

// 컴포넌트(Component)
// - 우리말로 "구성요소"라는 뜻
// - 화면을 구성하는 요소, UI를 구성하는 요소를 말함

// 업데이트란?
// - 사용자의 행동(클릭, 드래그)에 따라 웹 페이지가 스스로 모습을 바꿔 상호작용 하는 것

// 선언형 프로그래밍?
// - 과정은 생략하고 목적만 간결히 명시하는 방식

// 명령형 프로그래밍
// - 목적을 이루기 위한 모든 일련의 과정을 설명하는 방식

// React는 선언형 프로그래밍
// => 업데이트를 위한 복잡한 동작을 직접 명시할 필요 없이, 특정 변수의 값만을 바꾸는 것 만으로도 화면을 업데이트 시킬 수 있다.

// 브라우저 렌더링 과정(Critical Rendering Path)
//
//  HTML → DOM (요소들의 위치, 배치, 모양에 관한 모든 정보)
//          ↓
//     Render Tree    →         Layout          →           Painting
// (웹 페이지의 청사진)  (요소의 배치를 잡는 작업)    (실제로 화면에 그려내는 과정)
//          ↑
//  CSS → CSSOM (요소들의 스타일과 관련된 모든 정보)
//
//
// - JavaScript가 DOM을 수정하면 업데이트가 발생한다.
// - Reflow: Layout을 다시 한다.
// - Repaint: Painting을 다시 한다.
// - 위 두 과정은 시간이 오래 걸리는 작업
//
// React는 이 과정을 Virtual DOM으로 개선
// Virtual DOM이란?
// - DOM을 JavaScript 객체를 흉내낸 것으로 일종의 복제판이라고 생각하면 된다.
// - React는 업데이트가 발생하면 실제 DOM을 수정하기 전에 이 가상의 복제판 DOM에 먼저 반영해본다.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
