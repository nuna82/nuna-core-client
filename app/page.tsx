// components
import Image from "next/image";
import ReadOur from "./components/ReadOur";

// assets
import Logo from "./icons/logo.svg";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div>
      {/* header or read our  */}
      <ReadOur />
      <main className="flex container">
        <Sidebar />
        buyerga post joylaydigan qismini qilishimiz mumkun
      </main>
    </div>
  );
}
