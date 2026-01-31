import React, { useRef } from "react";

function MultiScrollTailwind() {
  const topnav = useRef(null)
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div>

      {/* Buttons */}
      <div className="bg-gray-900 flex justify-center p-4 items-center gap-5" ref={topnav}>
        <button
          onClick={() => scrollToSection(section1Ref)}
          className=" text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Section 1
        </button>

        <button
          onClick={() => scrollToSection(section2Ref)}
          className=" text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Section 2
        </button>

        <button
          onClick={() => scrollToSection(section3Ref)}
          className=" text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Section 3
        </button>

        <button
          onClick={() => scrollToSection(section4Ref)}
          className=" text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Section 4
        </button>
      </div>

      {/* Sections */}
      <div
        ref={section1Ref}
        className="h-screen bg-gray-500 flex justify-center items-center"
      >
        <h1 className="text-4xl font-bold">Section 1</h1>
      </div>

      <div
        ref={section2Ref}
        className="h-screen bg-gray-600 flex justify-center items-center"
      >
        <h1 className="text-4xl font-bold">Section 2</h1>
      </div>

      <div
        ref={section3Ref}
        className="h-screen bg-gray-700 flex justify-center items-center"
      >
        <h1 className="text-4xl font-bold">Section 3</h1>
      </div>

      <div
        ref={section4Ref}
        className="h-screen bg-gray-800 flex justify-center items-center"
      >
        <h1 className="text-4xl font-bold">Section 4</h1>
      </div>

      <div className="flex justify-center items-center flex-col p-5">
        <button className="bg-black text-white rounded-2xl p-2 cursor-pointer" onClick={()=> scrollToSection(topnav)}>Move to Top</button>
      </div>

    </div>
  );
}

export default MultiScrollTailwind;
