import { useEffect, useState } from "react";

const HeroTyping = () => {
  const firstText = "Hi, I'm Soham";
  const secondText = "Full Stack Developer";

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  useEffect(() => {
    let i = 0;
    let j = 0;

    const typeFirst = setInterval(() => {
      setFirst(firstText.slice(0, i + 1));
      i++;
      if (i === firstText.length) {
        clearInterval(typeFirst);

        setTimeout(() => {
          const typeSecond = setInterval(() => {
            setSecond(secondText.slice(0, j + 1));
            j++;
            if (j === secondText.length) {
              clearInterval(typeSecond);
            }
          }, 30);
        }, 300);
      }
    }, 30);

    return () => clearInterval(typeFirst);
  }, []);

  return (
    <div>
      <h1 className="text-white font-black text-[40px] sm:text-[60px] lg:text-[80px] leading-tight">
        {first}
        <span className="text-[#915EFF] animate-pulse">|</span>
      </h1>

      <h2 className="mt-2 text-[#915EFF] text-2xl sm:text-3xl font-semibold">
        {second}
      </h2>

      <p className="mt-4 text-gray-300 text-lg sm:text-xl">
        A Developer Dedicated to Crafting
        <br className="sm:block hidden" />
        Modern & Scalable Web Solutions
      </p>
    </div>
  );
};

export default HeroTyping;
