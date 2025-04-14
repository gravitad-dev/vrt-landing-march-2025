export const Logo = () => {
  return (
    <div className="flex flex-col items-start justify-center h-full w-min font-poppins select-none cursor-pointer ">
      <h1 className="text-[20px] font-bold text-primary leading-[24px]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500">
          VRT
        </span>
      </h1>
      <div className="h-[1px] w-full bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500"></div>
      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-[20px]">
        VirtualRealTime
      </p>
    </div>
  );
};
