import { cn } from "@/lib/utils";

export const Layout = ({ children, className, props }) => {
  return (
    <div
      className={cn(
        "relative w-full h-full flex justify-center  px-6 xl:px-0",
        className
      )}
      {...props}
    >
      <div className="w-full xl:max-w-[1200px] ">{children}</div>
    </div>
  );
};
