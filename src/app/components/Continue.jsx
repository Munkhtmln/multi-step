import { ChevronRight } from "lucide-react";

export default function ({ pages, handleclick }) {
  return (
    <div className="w-[100%] h-[40px]">
      <button
        onClick={handleclick}
        className="flex w-[100%] h-[100%]  justify-center items-center bg-[#121316] text-white  text-base font-semibold rounded-md"
      >
        Continue <p>{pages}</p> <ChevronRight />
      </button>
    </div>
  );
}
