// "use client";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Home",
};

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // 로딩은 백엔드에서 되기 때문에 사용자가 5초(로딩시간)을 감내해야함.
  // 근데 그러면 UX가 나빠지기 때문에 로딩화면에 로딩이 되고 있다는 것을 보여주는 것이 좋음.
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}
// 로딩 작업은 loading.tsx에서 작성한 Loading 컴포넌트를 실행.
// const html = await Homepage();
// isLoading ? <Loading /> : html
// 백엔드에서 작업이 안 끝나면 Loading 컴포넌트를 보여주고 끝나면 html을 보여줌 (STREAMING 사용)

// 리액트에서는 useState, useEffect 훅을 통해 데이터 패칭을해야되는데
// 리액트(API요청) --> 백엔드(DB에 데이터 요청) --> DB(query) --> 백엔드 (API 전달) --> 리액트
// export default function Page() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     const response = await fetch(
//       "https://nomad-movies.nomadcoders.workers.dev/movies"
//     );
//     const json = await response.json();
//     setMovies(json);
//     setIsLoading(false);
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);
//   return <>{isLoading ? "Loading..." : JSON.stringify(movies)}</>;
// }

// next.js에서는 server 컴포넌트에서 하기때문에 백엔드에서 직접 접근할 수 있음.
export default async function HomePage() {
  const movies: [{ id: number; title: string }] = await getMovies();
  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </>
  );
}
