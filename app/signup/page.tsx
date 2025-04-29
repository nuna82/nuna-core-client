import Image from "next/image"
import palma from '../component_img/palmas.jpg'
import logo from '../icons/logo.svg'
import Link from "next/link"
import user_profile_icon from '../icons/user_profile_icon.svg'
import emailicon from '../icons/email_icon.svg'

const page = () => {
    return (
        <div className="flex flex-row h-screen w-screen">
            <Image src={palma} className="h-screen w-1/2" alt="image" width={500} height={500} />
            <div className="container py-5">
                <Link href='/' className="mb-72 inline-block"><Image src={logo} alt="image" width={172} height={64} /></Link>

                <h1 className="text-[40px] leading-[100%] font-[robotobold] mb-2">Register in easiest way</h1>
                <p className="text-base text-[#8C8998] mb-8">we will send magic link to your email, just click it</p>

                <form action="" method="POST" className="w-1/2 mb-4">

                    <label htmlFor="name">

                        <span className="mb-1.5 text-[#8C8998]">your name</span>

                        <section className="bg-[#1B1B2D] flex items-center rounded-md px-7 space-x-4 mb-5">
                            <Image src={user_profile_icon} width={24} height={24} alt="user icon" />
                            <input className="h-12 w-full" id="name" type="text" placeholder="John Doe" />
                        </section>
                    </label>

                    <label htmlFor="name">

                        <span className="mb-1.5 text-[#8C8998]">your email</span>

                        <section className="bg-[#1B1B2D] flex items-center rounded-md px-7 space-x-4">
                            <Image src={emailicon} width={24} height={24} alt="user icon" />
                            <input className="h-12 w-full" id="name" type="text" placeholder="mail@example.com" />
                        </section>
                    </label>

                </form>

                <div className="flex items-center gap-2 mb-4">
                    <input type="checkbox" name="" id="" />
                    <p className="text-[#8C8998]">allow all terms and cool stuff <Link href='/terms' className="text-blue-600 underline">in Nuna</Link></p>
                </div>
                <button className="px-16 pt-4 pb-3.5 bg-[#0C8CE9] rounded-md">Receive Link</button>
            </div>
        </div>
    )
}

export default page