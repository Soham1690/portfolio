import { useEffect, useState } from "react";

const TypingText = () => {
  const firstText = "Hi, I'm Soham";
  const secondText = "Full Stack Developer";

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  useEffect(() => {
    let firstIndex = 0;
    let secondIndex = 0;

    const typeFirst = () => {
      if (firstIndex <= firstText.length) {
        setFirst(firstText.slice(0, firstIndex));
        firstIndex++;
        setTimeout(typeFirst, 35);
      } else {
        setTimeout(typeSecond, 300);
      }
    };

    const typeSecond = () => {
      if (secondIndex <= secondText.length) {
        setSecond(secondText.slice(0, secondIndex));
        secondIndex++;
        setTimeout(typeSecond, 35);
      }
    };

    typeFirst();
  }, []);

  return (
    <>
      <h1 className="text-4xl sm:text-6xl font-bold text-white">
        {first}
        <span className="text-[#915EFF] animate-pulse">|</span>
      </h1>

      <h2 className="mt-3 text-[#915EFF] text-2xl sm:text-3xl font-semibold">
        {second}
      </h2>
    </>
  );
};

export default TypingText;
