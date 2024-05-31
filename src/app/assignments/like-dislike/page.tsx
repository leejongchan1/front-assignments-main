"use client";

import Header from "@/components/header";
import { useState } from "react";

export default function Assignment4() {
  const [like, setLike] = useState(false);
  // like가 true면 좋아요 클릭 상태
  // like가 false면 좋아요 취소 혹은 아직 클릭 안 한 상태

  let 보여줄텍스트 = "좋아요";
  if (like === true) {
    보여줄텍스트 = "좋아요 취소";
  }

  return (
    <>
      <Header title={"좋아요 / 싫어요 만들기"} hasBack={true} />
      <div className="h-screen flex items-center justify-center">
        <div className="flex gap-2 mb-20">
          <button onClick={() => setLike(!like)} className="bg-blue-400 text-white font-semibold text-xl rounded-md active:bg-blue-500 active:scale-95 p-2">
            {보여줄텍스트}
          </button>
          
        </div>
      </div>
    </>
  );
}
