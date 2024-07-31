import type { Metadata } from "next";
import { Overpass } from "next/font/google";

import "styles/style.scss";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Interactive rating component",
    description:
        "An interactive component that allows users to rating the company's work"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={overpass.className}>{children}</body>
        </html>
    );
}
