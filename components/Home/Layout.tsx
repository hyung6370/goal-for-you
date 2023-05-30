import React, { ReactNode } from "react"
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Header />
            <Hero />
            <h1>레이아웃</h1>
            <div>{children}</div>
            <Footer />
        </div>
    )
}