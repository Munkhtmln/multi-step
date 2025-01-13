export default function () {
  return (
    <div className="bottom-60 left-70 ml-8 absoluterounded-md flex  w-[416px] gap-[8px] justify-center m-auto">
      <button className=" border-[#cbd5e1] border-[1px] w-[128px] h-[44px] rounded-md        ">
        <p className="text-base font-semibold flex justify-center items-center pr-2 gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back
        </p>{" "}
      </button>
      <button className="w-[280px] h-[44px] bg-[#121316] text-white  rounded-md text-base font-semibold  ">
        {" "}
        Continue 2/3
      </button>
    </div>
  );
}
