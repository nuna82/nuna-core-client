import Sidebar from "../components/Sidebar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container">
            <Sidebar />
            {children}
        </div>
    )
}