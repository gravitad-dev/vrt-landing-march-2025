import { Logo } from "../elements/Logo";
import { Layout } from "./Layout";

export const Footer = () => {
  return (
    <section className="w-full bg-bg text-tbody pt-12">
      <Layout className="flex  justify-between items-center">
        {/*  */}
        <div className=" relative grid grid-cols-6 grid-rows-2 min-h-[200px]  w-full gap-8 max-h-[80vh]">
          <div className="flex flex-col gap-5 col-span-2 row-span-2 overflow-hidden">
            <Logo />
            <p>
              Somos una empresa dedicada a la creación de contenido innovador,
              aprovechando el poder de la inteligencia artificial.{" "}
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex justify-between items-center w-full h-[80px]">
          <div className="col-span-3">
            Copyright © 2025. VirtualRealTime Inc. Todos los derechos reservados
          </div>

          <div className="col-span-3">Política de privacidad</div>
        </div>
      </Layout>
    </section>
  );
};
