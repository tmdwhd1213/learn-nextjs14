// 페이지만의 레이아웃을 만들 수 있다.

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      &copy; Next JS is great!
    </>
  );
}
