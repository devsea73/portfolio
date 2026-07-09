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
  title: "Jacob Adams | Senior Data Engineer",
  description:
    "Senior Data Engineer portfolio featuring cloud data platforms, ML infrastructure, and large-scale ETL systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${bitter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
