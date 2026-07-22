import { Space_Grotesk, Bitter } from "next/font/google";
import "@ant-design/v5-patch-for-react-19";
import "antd/dist/reset.css";
import "./portfolio.generated.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jacob Adams | Senior Backend & Data Engineer",
  description:
    "Senior Backend & Data Engineer with 5+ years building scalable APIs, cloud data platforms, and search infrastructure across AWS and modern backend stacks.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${bitter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
