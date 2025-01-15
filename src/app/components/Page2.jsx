"use client";
import Header from "./Header";
import Continue from "./Continue";
import Input from "./Input";

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
        <div className="">
          <Header />
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
            />
            <Input
              name="confirmpassword"
              label="Confirm password"
              error={userinfoerror.confirmpassword}
              placeholder="Confirm password"
              errorcheck={errorcheck}
              userinfovalue={userinfo.confirmpassword}
            />
          </div>
        </div>
        <div className="flex gap-3 pt-6 w-[100%] px-5">
          <button className="bg-blue-600 w-[200px] rounded-md" onClick={back}>
            {" "}
            Back
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
