import { Layout } from "../../app/Layout";

export const Gallery = () => {
  return (
    <section className="w-full min-h-[80vh] bg-bg text-tbody py-[15%] lg:py-[5%]">
      <Layout className="flex justify-between items-center">
        <div className=" relative grid grid-cols-4 grid-rows-2 w-full gap-5 max-h-[80vh]">
          <div className="col-span-2 row-span-2 bg-gray-400/80 rounded-xl overflow-hidden">
            <img
              src="gallery-1.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>

          <div className="col-span-2 bg-gray-400/80 rounded-xl overflow-hidden">
            <img
              src="gallery-2.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>

          <div className="col-span-1 bg-gray-400/80 rounded-xl overflow-hidden">
            <img
              src="gallery-3.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>

          <div className="col-span-1 bg-gray-400/80 rounded-xl overflow-hidden">
            <img
              src="gallery-4.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-bg/0 to-bg" />
        </div>
      </Layout>
    </section>
  );
};
