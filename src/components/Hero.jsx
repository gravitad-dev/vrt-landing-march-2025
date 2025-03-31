import { Layout } from "./Layout";

export const Hero = () => {
  return (
    <div className="w-full h-[80vh]  bg-[#1A1A1A]">
      <Layout>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl font-bold">Welcome to the Hero Section</h1>
        </div>
      </Layout>
    </div>
  );
};
