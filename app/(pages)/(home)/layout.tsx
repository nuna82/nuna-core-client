
// components 
import HomeHeader from "@/app/reuseable/HomeHeader";

export default function HomeLayout({ children }: { children: React.ReactNode }) {


    return (
        <div>
            <HomeHeader first="Posts" second="Users" third="Communities" firstLink="/"  secondLink="/users" thirdLink="/communities" />
            {children}
        </div>
    )
}