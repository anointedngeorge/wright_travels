import Image from "next/image";
import Topnav from "./components/Topnav";
import Menu from "./components/Menu";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="container-fluid">
        <Topnav />
        <Menu />
        <Hero />
    </main>
  );
}
