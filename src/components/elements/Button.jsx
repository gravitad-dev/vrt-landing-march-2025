import { cn } from "@/lib/utils";

export const Button = ({ variant = "default", className, children, props }) => {
  const variants = {
    default:
      "bg-inherit text-tbody border border-border hover:border-primary px-4 transition h-[45px]",
    primary:
      "bg-primary text-white px-6 hover:bg-[#222160] hover:dark:bg-white hover:dark:text-black transition",
    secondary:
      "border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none",
    warning: "",
    danger: "",
    "primary-t":
      "bg-primary/40 border rounded-xl border-primary backdrop-blur-sm text-white px-8 hover:bg-[#222160] hover:dark:bg-white hover:dark:text-black transition",
  };

  return (
    <button
      className={cn(
        `rounded-lg h-[44px] min-w-[44px] flex justify-center items-center  cursor-pointer ${variants[variant]}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
