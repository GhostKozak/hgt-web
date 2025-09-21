import Image from "next/image";

export const PrimaryButton = ({
  text = "Example Button",
  size,
  href = "#",
  bgColor = "bg-yellow-200",
  textColor = "text-black",
}: {
  text: string;
  size?: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
}) => {
  return (
    <a
      href={href}
      className={`group inline-flex gap-20 rounded-full px-7 py-3.5 font-medium ${size} ${bgColor} ${textColor}`}
    >
      {text}
      <Image
        src={"/arrow.svg"}
        alt=""
        width={24}
        height={24}
        className="inline-block transition-all duration-500 group-hover:rotate-45"
      />
    </a>
  );
};

export const StaticButton = ({ text = "Example Button" }: { text: string }) => {
  return (
    <button
      type="button"
      className="inline-flex gap-5 border-b py-1 text-base font-semibold"
    >
      {text}
      <Image
        src={"/arrow.svg"}
        alt=""
        width={24}
        height={24}
        className="transition-all ease-in group-hover:rotate-45"
      />
    </button>
  );
};
