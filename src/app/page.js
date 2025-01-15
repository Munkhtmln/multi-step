"use client";
import Firstpage from "./components/Firstpage";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { useState } from "react";

export default function Home() {
  const [activestage, setActivestage] = useState(0);
  const FormStages = [Firstpage, Page2, Page3][activestage];

  const [userinfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    phonenumber: "",
  });
  const [userinfoerror, setUserInfoError] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    phonenumber: "",
  });
  const errorcheck = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
    setUserInfoError((prev) => ({ ...prev, [name]: "" }));
  };
  const pagechanger = () => {
    // let error = false;
    // const {
    //   firstname,
    //   lastname,
    //   username,
    //   email,
    //   phonenumber,
    //   password,
    //   confirmpassword,
    // } = userinfo;
    // if (!firstname.trim()) {
    //   setUserInfoError((prev) => ({ ...prev, firstname: "Нэрээ оруулна уу" }));
    //   error = true;
    // }

    // if (!lastname.trim()) {
    //   setUserInfoError((prev) => ({ ...prev, lastname: "Овгоо оруулна уу" }));
    //   error = true;
    // }
    // if (!username.trim()) {
    //   setUserInfoError((prev) => ({
    //     ...prev,
    //     username: "Хэрэглэгчийн нэрээ оруулна уу",
    //   }));
    //   error = true;
    // }
    // if (!email.trim()) {
    //   setUserInfoError((prev) => ({
    //     ...prev,
    //     email: "Please provide a valid email address.",
    //   }));
    //   error = true;
    // }
    // if (!phonenumber.trim()) {
    //   setUserInfoError((prev) => ({
    //     ...prev,
    //     phonenumber: "Please enter a valid phone number.",
    //   }));
    //   error = true;
    // }
    // if (!password.trim()) {
    //   setUserInfoError((prev) => ({
    //     ...prev,
    //     password: "Password must include letters and numbers.",
    //   }));
    //   error = true;
    // }
    // if (!confirmpassword.trim()) {
    //   setUserInfoError((prev) => ({
    //     ...prev,
    //     confirmpassword: "Passwords do not match. Please try again.",
    //   }));
    //   error = true;
    // }
    // if (error == false) {
    setActivestage(activestage + 1);
    // }
  };
  const back = () => {
    setActivestage(activestage - 1);
  };
  return (
    <div>
      <FormStages
        activestage={activestage}
        setActivestage={setActivestage}
        pagechanger={pagechanger}
        errorcheck={errorcheck}
        userinfoerror={userinfoerror}
        userinfo={userinfo}
        setUserInfoError={setUserInfoError}
        back={back}
      />
      {/* <button
        onClick={() => {
          setActivestage(activestage + 1);
        }}
        className=" bg-blue-600 w-[400px] h-[200px]"
      >
        contivouhasdika{" "}
      </button> */}
    </div>
  );
}
