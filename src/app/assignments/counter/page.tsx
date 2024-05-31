"use client";

import Header from "@/components/header";
import { useState } from "react";

export default function Assignment3() {
  const [count, setCount] = useState(0);
 


  return (
    <>
      <Header title={"카운터 만들기"} hasBack={true} />

      <div className="flex flex-col items-center gap-2 m-5">
        <h1 className="text-6xl">{count}</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setCount((현재카운트) => 현재카운트 + 1)}
            className="bg-blue-400 text-white font-semibold text-2xl size-10 rounded-md active:bg-blue-500 active:scale-95"
          >
            +
          </button>
          <button
            onClick={() => 
              setCount(count - 1)}
            className="bg-blue-400 text-white font-semibold text-2xl size-10 rounded-md active:bg-blue-500 active:scale-95"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}
