import Input from "./Input";
import Header from "./Header";
// import Continue from "./components/Continue";
import Continue from "./Continue";
import { act } from "react";

export default function ({
  activestage,
  setActivestage,
  errorcheck,
  userinfoerror,
  setUserInfoError,
  userinfo,
  pagechanger,
}) {
  const handleclick = () => {
    let error = false;
    const { firstname, lastname, username } = userinfo;
    if (!firstname.trim()) {
      setUserInfoError((prev) => ({ ...prev, firstname: "Нэрээ оруулна уу" }));
      error = true;
    }

    if (!lastname.trim()) {
      setUserInfoError((prev) => ({ ...prev, lastname: "Овгоо оруулна уу" }));
      error = true;
    }
    if (!username.trim()) {
      setUserInfoError((prev) => ({
        ...prev,
        username: "Хэрэглэгчийн нэрээ оруулна уу",
      }));
      error = true;
    }
    if (error == false) {
      pagechanger();
    }
  };
  return (
    <div className="bg-[#F4F4F4] h-[100vh]  flex">
      <div className=" w-[480px] h-[655px] bg-[#Ffffff] rounded-lg m-auto ">
        <div className="p-8 h-[655px] flex flex-col  justify-between  ">
          <div>
            <Header />
            <Input
              name="firstname"
              label="First name "
              error={userinfoerror.firstname}
              placeholder="Your first name"
              // onclick={handleclick}
              errorcheck={errorcheck}
              userinfovalue={userinfo.firstname}
            />
            <Input
              name="lastname"
              label="Last name"
              error={userinfoerror.lastname}
              placeholder="Your last name"
              // onclick={handleclick}
              errorcheck={errorcheck}
              userinfovalue={userinfo.lastname}
            />
            <Input
              name="username"
              label="Username"
              error={userinfoerror.username}
              placeholder="Your username name"
              // onclick={handleclick}
              errorcheck={errorcheck}
              userinfovalue={userinfo.username}
            />
          </div>
          <div className="  w-[100%] h-[40px]">
            <Continue
              activestage={activestage}
              setActivestage={setActivestage}
              handleclick={handleclick}
              pages="1/3"
            />
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
