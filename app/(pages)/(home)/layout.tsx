
// components 
import HomeHeader from "@/app/components/HomeHeader";

export default function HomeLayout({ children }: { children: React.ReactNode }) {


    return (
        <div>
            <HomeHeader />
            {children}
        </div>
    )
}