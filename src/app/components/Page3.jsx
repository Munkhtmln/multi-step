import { useState } from "react";
import Header from "./Header";
import Continue from "./Continue";

export default function Page3({ pagechanger, back }) {
  const [file, setFile] = useState(null);
  const filefunction = (e) => {
    const uploadfile = e.target.files[0];
    setFile(URL.createObjectURL(uploadfile));
  };

  return (
    <div className="bg-[#F4F4F4] h-[100vh] justify-center items-center ">
      <div className="w-[480px] h-[655px] bg-[#Ffffff] rounded-lg p-8 m-auto">
        <Header />
        <div className="flex  flex-col">
          <div className="flex ">
            <p>Date of Birth</p>
            <p className="text-red-500">*</p>
          </div>

          <input
            type="date"
            name=""
            id=""
            className="w-[416px] h-[48px] border-2 rounded-2xl px-4 "
          />
          <div className="flex mt-4">
            <p>Profile Image</p>
            <p className="text-red-500">*</p>
          </div>
          <div className="border-2 border-dashed w-[416px] h-[180px] rounded-md flex flex-col items-center justify-center bg-[#F9FAFB] mb-4">
            {file ? (
              <p className="text-gray-600">{file.name}</p>
            ) : (
              <>
                <label
                  htmlFor="fileinput"
                  className="text-blue-500 cursor-pointer"
                >
                  Choose file
                </label>
              </>
            )}

            <input
              id="fileinput"
              type="file"
              className="hidden"
              onChange={filefunction}
            />
            <img src={file} alt="" />
          </div>
          <img src={file} alt="" />
          <div className="flex gap-4  py-20">
            <button
              className="border-gray-100 border-2 justify-center items-center w-[144px] h-[42px] rounded-md"
              onClick={back}
            >
              Back
            </button>
            <Continue
              handleclick={pagechanger}
              pages="3/3"
              // handleclick={cont}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
