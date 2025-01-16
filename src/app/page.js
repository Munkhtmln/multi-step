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
    setActivestage(activestage + 1);
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
    </div>
  );
}
