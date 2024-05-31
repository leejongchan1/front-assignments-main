import Header from "@/components/header";
import Image from "next/image";

interface Profile {
  imageSrc: string;
  name: string;
  age: number;
  nationality: string;
  height: number;
  weight: number;
  job: string;
  famousLines: string[];
}

export default function Assignment2() {
  // 이 아래에 ProfileCard 컴포넌트 사용에 필요한 오브젝트(데이터)를 만들어 주세요.
  const 사람: Profile = {
    imageSrc:
      "data:image/jpeg;base64,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",
    name: "마석도",
    age: 45,
    nationality: "한국",
    height: 179,
    weight: 120,
    job: "형사",
    famousLines: ["누가 5야", "차 빼 이 개새끼야 바빠"],
  };
  return (
    <>
      <Header title={"프로필 카드 만들기"} hasBack={true} />
      <div className="w-full h-full flex flex-col overflow-y-auto py-5 px-5 gap-5">
        {/* 이 아래에 ProfileCard 컴포넌트를 사용하는 코드를 작성해 주세요. */}
        <ProfileCard
        imageSrc={사람.imageSrc}
        name={사람.name}
        age={사람.age}
        nationality={사람.nationality}
        height={사람.height}
        weight={사람.weight}
        job={사람.job}
        famousLines={사람.famousLines}
        ></ProfileCard>
      </div>
    </>
  );
}

function ProfileCard({
  imageSrc,
  name,
  age,
  nationality,
  height,
  weight,
  job,
  famousLines,
}: Profile) {
  return (
    <div className="p-5 bg-white border rounded-md mx-16">
      <div className="w-full flex justify-center pb-5">
        <img
          className="rounded-full size-40"
          src={imageSrc}
          width={500}
          height={500}
          alt="profile"
        />
      </div>
      <div className="w-full h-full flex flex-col gap-2">
        <div>
          <p className="text-xs text-stone-400">이름</p>
          <div>{name}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">나이</p>
          <div>{age}세</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">국적</p>
          <div>{nationality}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">키/몸무게</p>
          <div>
            {height}cm / {weight}kg
          </div>
        </div>
        <div>
          <p className="text-xs text-stone-400">직업</p>
          <div>{job}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">명대사</p>
          {famousLines.map((line, index) => (
            <div key={`${name}FamouseLine${index}`}>&quot;{line}&quot;</div>
          ))}
        </div>
      </div>
    </div>
  );
}
