export default function Home({
  label,
  error,
  placeholder,
  errorcheck,
  name,
  userinfovalue,
  type,
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-sm flex  ">
        {label}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff0000"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 6v12" />
          <path d="M17.196 9 6.804 15" />
          <path d="m6.804 9 10.392 6" />
        </svg>
      </p>
      <input
        onChange={errorcheck}
        className="border-2 rounded-lg outline-blue-300 p-[12px] w-[416px] h-[44px]   "
        type={type}
        name={name}
        id=""
        placeholder={placeholder}
        value={userinfovalue}
      />
      <p className="text-red-500 text-sm">{error}</p>
    </div>
  );
}
