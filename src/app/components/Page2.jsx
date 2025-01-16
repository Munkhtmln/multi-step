"use client";
import Header from "./Header";
import Continue from "./Continue";
import Input from "./Input";
import { ChevronLeft } from "lucide-react";

export default function Page({
  pages,
  activestage,
  setactiveStage,
  errorcheck,
  userinfoerror,
  setUserInfoError,
  userinfo,
  pagechanger,
  back,
}) {
  const errhandle = () => {
    let err = false;
    const { email, phonenumber, password, confirmpassword } = userinfo;
    if (!email.trim()) {
      setUserInfoError((prev) => ({
        ...prev,
        email: "Please provide a valid email address.",
      }));
      err = true;
    }
    // if (!phonenumber.length > 6) {
    //   setUserInfoError((prev) => ({
    //     ...prev,
    //     phonenumber: "Please enter a valid phone number.",
    //   }));
    //   err = true;
    // }
    if (!phonenumber.trim()) {
      setUserInfoError((prev) => ({
        ...prev,
        phonenumber: "Please enter a valid phone number.",
      }));
      err = true;
    }
    if (!password.trim()) {
      setUserInfoError((prev) => ({
        ...prev,
        password: "Password must include letters and numbers.",
      }));
      err = true;
    }
    if (!confirmpassword.trim()) {
      setUserInfoError((prev) => ({
        ...prev,
        confirmpassword: "Passwords do not match. Please try again.",
      }));
      err = true;
    }
    if (err == false) {
      pagechanger();
    }
  };

  return (
    <div className="bg-[#F4F4F4] h-[100vh] justify-center flex">
      <div className=" w-[480px] h-[655px] justify-center flex flex-col bg-[#Ffffff] m-auto ">
        <div>
          {" "}
          <div className="ml-8">
            <Header />
          </div>
          <div className="mt-4 ml-[32px] flex flex-col gap-[12px]  ">
            <Input
              name="email"
              label="Email"
              error={userinfoerror.email}
              placeholder="Your email"
              errorcheck={errorcheck}
              userinfovalue={userinfo.email}
            />
            <Input
              name="phonenumber"
              label="Phone number"
              error={userinfoerror.phonenumber}
              placeholder="Your phone number"
              errorcheck={errorcheck}
              userinfovalue={userinfo.phonenumber}
            />
            <Input
              name="password"
              label="Password"
              error={userinfoerror.password}
              placeholder="Your password"
              errorcheck={errorcheck}
              userinfovalue={userinfo.paswword}
              type="password"
            />
            <Input
              name="confirmpassword"
              label="Confirm password"
              error={userinfoerror.confirmpassword}
              placeholder="Confirm password"
              errorcheck={errorcheck}
              userinfovalue={userinfo.confirmpassword}
              type="Password"
            />
          </div>
        </div>
        <div className="flex gap-3 pt-6 w-[100%] px-5">
          <button
            className="border-gray-100 border-2 justify-center items-center w-[128px] h-[100%] rounded-md"
            onClick={back}
          >
            <p className="">Back</p>
          </button>
          <Continue
            activestage={activestage}
            setactiveStage={setactiveStage}
            pages="2/3"
            handleclick={errhandle}
          />
        </div>
      </div>
    </div>
  );
}
