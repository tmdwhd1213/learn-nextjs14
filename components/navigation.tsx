"use client";
// * Render in the 백엔드, interactive or hydrate in 프론트엔드
// hydrate -> 실행하면 SSR을 실행하는데, 이는 자바스크립트를 지원하지 않는 html을 백엔드에서 만듬.
// use client를 컴포넌트 상단에 쓰면 interactive한 자바스크립트(리액트)기능을 사용할 수 있음.
// use server로 쓸 필요없이 나머지는 다 서버단에서 랜더링되고
// 심지어 use client를 써도 랜더링은 서버단에서! 그 이후에 자바스크립트 다운로드
// 효과!: 자바스크립트를 무작정 다운받는 것이 아닌 선택적으로 받을 수 있어 속도 측면에서 좋음

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  console.log(path);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" && "✔"}
        </li>
        <li>
          <Link href="/about-us">About Us</Link> {path === "/about-us" && "✔"}
        </li>
      </ul>
    </nav>
  );
}
