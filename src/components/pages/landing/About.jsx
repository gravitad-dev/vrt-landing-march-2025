import { Layout } from "../../app/Layout";
import { Button } from "../../elements/Button";

export const About = () => {
  return (
    <section className="w-full h-[80vh] bg-bg text-tbody">
      <Layout>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl font-bold ">About</h1>
        </div>

<div className="flex flex-col lg:flex-row w-full h-full gap-8">
  <div className="w-full h-full flex justify-center z-10">
    
      <div id="main-img-about" className="relative h-[80vw] max-h-[480px] w-[360px] rounded-xl bg-gray-200 shadow-xl">
        <div className="absolute top-5 -right-[120px] z-1 h-[100%] w-[100%] max-h-[160px] max-w-[250px] rounded-lg bg-red-200"> 
          Texto
        </div> 
        <div className="absolute top-2 -left-[120px] -z-1 h-[125px] w-[131px] rounded-lg bg-gray-400"/>
        <div className="absolute -bottom-[80px] -left-[140px] -z-1 h-[236px] w-[312px] rounded-lg bg-gray-500"/>
        <div className="absolute -bottom-[125px] -right-[125px] z-1 h-[250px] w-[250px] rounded-lg bg-gray-300"/>
      </div>
       
  </div>
  
  
  <div className="flex-col gap-3 w-full h-full flex justify-center lg:justify-start">
    <p>Qué hacemos</p>
    <h3 className="text-4xl font-bold">Convertimos tus idedas en resultados increibles</h3>
    <p className="text-lg">
    Somos una empresa dedicada a la creación de contenido innovador, aprovechando el poder de la inteligencia artificial. Nuestro enfoque se centra en desarrollar soluciones personalizadas que destacan por su calidad, creatividad y precisión, adaptándose a las necesidades específicas de nuestros clientes.
    </p>
    <Button variant="primary" className="mt-6 w-min text-nowrap">
      Conocer más
    </Button>
  </div>
</div>

      </Layout>
    </section>
  );
};

