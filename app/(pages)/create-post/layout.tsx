
// components 
import HomeHeader from "@/app/reuseable/HomeHeader";

export default function AddPost({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <HomeHeader first="Post" second="Collection" third="Community" firstLink="/create-post" secondLink="/users" thirdLink="/communities" />
            {children}
        </div>
    )
}