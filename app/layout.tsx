import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/global.css";

// head 태그의 title, description 등등을 바꿀 수 있음 정확히 metadata라고 명명해야함
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The Best Movie on the frameworks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
