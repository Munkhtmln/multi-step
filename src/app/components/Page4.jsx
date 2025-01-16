export default function Finish() {
  return (
    <div className="bg-[#F4F4F4] h-[100vh] p-60">
      <div className="bg-white w-[480px] h-[193px] flex flex-col  m-auto rounded-lg p-8">
        <img className="w-[60px] h-[60px] " src="/Logo.png" alt="" />
        <h1 className="font-semibold  text-2xl   mt-2     ">
          You're All Set 😎
        </h1>
        <p className=" w-[416px] h-[22px] font-normal text-lg text-[#8E8E8E] mt-2">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
}
