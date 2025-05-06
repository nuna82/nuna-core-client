// components
import LeftSidebar from "../components/LeftSidebar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import YouHaveToSleep from "../components/YouHaveToSleep";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* main  */}
      <main className=" flex justify-center">
        <div className="max-w-[285px] w-full py-5">
          <Sidebar />
        </div>

        <div className="flex-1 border-x border-[#30305D] max-w-[630px] min-h-screen">
          <Header />
          {children}
        </div>

        <div className="max-w-[285px] w-full py-5">
          <LeftSidebar />
        </div>
        <YouHaveToSleep />
      </main>
    </div>
  );
}
