import { cn } from "@/lib/utils";

export const Layout = ({ children, className, props }) => {
  return (
    <div className="relative w-full h-full flex justify-center">
      <div
        className={cn(
          "flex flex-col items-center w-full xl:max-w-[1200px] px-6 xl:px-0",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
