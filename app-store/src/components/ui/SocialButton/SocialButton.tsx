interface SocialButtonProps {
  provider: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  border?: boolean;
}

const SocialButton = ({
  provider,
  icon,
  bgColor,
  textColor,
  border,
}: SocialButtonProps) => (
  <button
    className={`w-full flex items-center justify-center px-4 py-2 rounded-md ${bgColor} ${textColor} text-sm font-medium hover:opacity-90 transition-opacity ${
      border ? "border border-gray-300" : ""
    }`}
  >
    {icon}
    <span className="ml-2">Continue with {provider}</span>
  </button>
);

export default SocialButton;
