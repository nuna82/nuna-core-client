"use client";
import Image from "next/image";
import Link from "next/link";
import emailicon from "../icons/email_icon.svg";
import { useState } from "react";

const LoginForm = () => {
  const [isLinkSended, setLinkSended] = useState(true);
  return (
    <div>
      {isLinkSended && (
        <>
          <h1 className="text-[40px] leading-[100%] font-[robotobold] mb-2">
            Log in without password
          </h1>
          <p className="text-base text-[#8C8998] mb-8">
            we will send magic link to your email, just click it
          </p>

          <form action="" method="POST" className="w-1/2 mb-4">
            <label htmlFor="name">
              <span className="mb-1.5 text-[#8C8998]">your email</span>

              <section className="bg-[#1B1B2D] flex items-center rounded-md space-x-4 px-4">
                <Image src={emailicon} width={24} height={24} alt="user icon" />
                <input
                  className="h-12 w-full"
                  id="name"
                  type="text"
                  placeholder="mail@example.com"
                />
              </section>
            </label>
          </form>

          <div className="flex items-center gap-2 mb-2">
            <label>
              <input type="checkbox" className="input" />
              <span className="custom-checkbox"></span>
            </label>

            <p className="text-[#8C8998] flex items-center mb-1 gap-1">
              allow all terms and cool stuff
              <Link href="/terms" className="text-blue-600 underline">
                in Nuna
              </Link>
            </p>
          </div>
          <button className="px-16 pt-4 pb-3.5 bg-[#0C8CE9] rounded-md">
            Receive Link
          </button>
        </>
      )}

      {!isLinkSended && (
        <div className="container">
          <button className="px-16 pt-4 pb-3.5 bg-[#0C8CE9] rounded-md">
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
