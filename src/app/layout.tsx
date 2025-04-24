
import { Poppins } from "next/font/google";
import "./globals.css";
import classNames from "classnames";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800", "600", "500", "400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(poppins.className, "playerStatsBody")}
      >
        {children}
      </body>
    </html>
  );
}
