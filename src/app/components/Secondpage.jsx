import Input from "./Input";

export default function () {
  return (
    <div className="mt-4 ml-[32px] flex flex-col gap-[12px]  ">
      <Input
        label="Email"
        error="Please provide a valid email address."
        placeholder="Your email"
      />
      <Input
        label="Phone number"
        error="Please enter a valid phone number."
        placeholder="Your phone number"
      />
      <Input
        label="Password"
        error="Password must include letters and numbers."
        placeholder="Your password"
      />
      <Input
        label="Confirm password"
        error="Passwords do not match. Please try again."
        placeholder="Confirm password"
      />
    </div>
  );
}
