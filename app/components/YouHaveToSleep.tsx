"use client";
import { useEffect, useState } from "react";

const YouHaveToSleep = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    if (currentHour >= 2) {
      setShowModal(true);
    }
  }, []);
  {
    if (showModal)
      return (
        <div className="absolute w-full h-full bg-white">
          <div className="bg-black text-white min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight leading-tight">
                You Have to Sleep 😴
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-md mx-auto">
                Put your phone down. Drink water. Take a deep breath. Your
                future self is begging you to rest.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="inline-block px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                OK. I will Sleep
              </button>
            </div>
          </div>
        </div>
      );
  }
};

export default YouHaveToSleep;
