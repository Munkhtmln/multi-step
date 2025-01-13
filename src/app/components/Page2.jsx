"use client";
import Header from "./Header";
import Continue from "./Continue";
import Secondpage from "./Secondpage";
import Continue2 from "./Continue2";

export default function Page() {
  return (
    <div className="bg-[#F4F4F4] h-[100vh] flex">
      <div className=" w-[480px] h-[655px] bg-[#Ffffff] m-auto ">
        <div className="w-[416px] h-[385px]       ">
          <Header />
          <Secondpage />
        </div>
        <Continue2 />
      </div>
    </div>
  );
}
