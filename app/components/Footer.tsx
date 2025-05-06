import Link from "next/link";

export default function Footer(){
    return (
        <div className="w-[95%] mx-auto flex items-center justify-between">
            <p><span>reach us:</span> <Link className="text-gray-500" href={"https://mail.google.com/mail/u/0/#inbox"}> khamidov.ko@gmail.com</Link></p>
            <p><Link href={"/terms"}>read our Philosophy</Link></p>
        </div>
    )
}