// bracket(대괄호[]) -> props를 콘솔 찍으면 params의 키는 []에 있는 것이 되고 value는 사용자가 입력한 값
// ex localhost:3000/movies/123?region=kr
// { params: { id: '123' }, searchParams: { region: 'kr' } }

import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // console.log(props); // 백엔드에서만 실행

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
