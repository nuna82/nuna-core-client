
// components 
import Footer from "@/app/components/Footer";
import HomeHeader from "@/app/reuseable/HomeHeader";

export default function AddPost({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <HomeHeader first="Post" second="Collection" third="Community" firstLink="/create" secondLink="/create/collection" thirdLink="/create/community" />
            {children}
        </div>
    )
}