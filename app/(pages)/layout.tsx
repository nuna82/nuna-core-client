
// components 
import LeftSidebar from "../components/LeftSidebar";
import ReadOur from "../components/ReadOur";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>

            {/* top thin header  */}
            <ReadOur />

            {/* main  */}
            <main className=" flex justify-center">
                <div className="max-w-[285px] w-full py-5">
                    <Sidebar />
                </div>

                <div className="flex-1 border-x border-[#30305D] max-w-[630px] h-screen py-5">
                    <Header />
                    {children}
                </div>

                <div className="max-w-[285px] w-full py-5">
                    <LeftSidebar />
                </div>
            </main>
        </div>
    )
}