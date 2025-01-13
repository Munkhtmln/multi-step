import Input from "./Input";

export default function () {
  return (
    <div className="mt-4 ml-[32px] flex flex-col gap-[12px]  ">
      <Input
        label="First name "
        error="Нэрээ оруулна уу"
        placeholder="Your first name"
      />
      <Input
        label="Last name"
        error="Овгоо оруулна уу"
        placeholder="Your last name"
      />
      <Input
        label="Username"
        error="Хэрэглэгчийн нэрээ оруулна уу"
        placeholder="Your username name"
      />
    </div>
  );
}
