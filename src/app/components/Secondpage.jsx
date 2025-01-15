import Input from "./Input";

export default function () {
  return (
    <div className="mt-4 ml-[32px] flex flex-col gap-[12px]  ">
      <Input label="Email" error="" placeholder="Your email" />
      <Input label="Phone number" error="" placeholder="Your phone number" />
      <Input label="Password" error="" placeholder="Your password" />
      <Input label="Confirm password" error="" placeholder="Confirm password" />
    </div>
  );
}
