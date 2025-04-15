import { Layout } from "../../app/Layout";
import { Button } from "../../elements/Button";

export const About = () => {
  const textStyle =
    "text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500";

  return (
    <section className="w-full h-[80vh] bg-bg text-tbody">
      <Layout>
        <div className="flex justify-center items-center h-full">
          <h1 className="hidden text-4xl font-bold ">Sobre Nosotros</h1>
        </div>

        <article className="flex flex-col lg:flex-row w-full h-full gap-10">
          {/* Images Container */}
          <div
            id="about-img"
            className="flex justify-center items-start w-full lg:w-[60%] h-full mb-10 md:mb-18"
          >
            <div id="about-img-container" className="relative">
              <div className="overflow-hidden bg-[#313131] relative h-[70vw] w-[50vw] z-10 max-h-[480px] max-w-[350px] rounded-xl  shadow-xl">
                <img
                  src="about-1.png"
                  className=" object-cover w-full h-full"
                  alt=""
                />
              </div>

              <div className="backdrop-blur-sm bg-gradient-to-r from-sky-500/50 via-violet-500/90 to-pink-500/70 overflow-hidden flex flex-col justify-center items-center absolute top-8 -right-[10vw] md:-right-[125px] z-20 h-[25vw] w-[30vw] max-h-[160px] max-w-[250px] shadow-xl rounded-xl p-6">
                <p className="text-[6vw] md:text-[3.4em] font-bold p-0 text-white">
                  +100K
                </p>
                <p className="text-[3vw] md:text-[1.25em]  p-0 text-nowrap text-white">
                  Imagenes creadas
                </p>
              </div>

              <div className="bg-gray-400/80 overflow-hidden flex flex-col justify-center items-center absolute top-2 -left-[18vw] md:-left-[150px] h-[20vw] w-[20vw] max-h-[150px] max-w-[150px] shadow-xl rounded-xl">
                <img
                  src="about-2.png"
                  className=" object-cover w-full h-full"
                  alt=""
                />
              </div>

              <div className="bg-gray-400/80 overflow-hidden flex flex-col justify-center items-center absolute -bottom-[7vw] lg:-bottom-[80px] z-1 -left-[18vw] md:-left-[150px] h-[25vw] w-[35vw] max-h-[230px] max-w-[310px] shadow-xl rounded-xl">
                <img
                  src="about-3.png"
                  className=" object-cover w-full h-full"
                  alt=""
                />
              </div>

              <div className=" bg-[#002434] overflow-hidden flex flex-col justify-center items-center absolute -bottom-[10vw] lg:-bottom-[155px] -right-[8vw] lg:-right-[85px] z-20 h-[35vw] w-[35vw] max-h-[250px] max-w-[250px] shadow-xl rounded-xl">
                <img
                  src="about-4.png"
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Text Container */}
          <div className="flex-col gap-2 w-full h-full lg:w-[40%]  flex justify-center lg:justify-start">
            <p className="text-primary">Qué hacemos</p>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">
              Convertimos tus <br /> <span className={textStyle}>ideas</span> en
              resultados <br /> <span className={textStyle}> increibles.</span>
            </h3>
            <p className="text-lg">
              Somos una empresa dedicada a la creación de contenido innovador,
              aprovechando el poder de la inteligencia artificial. Nuestro
              enfoque se centra en desarrollar soluciones personalizadas que
              destacan por su calidad, creatividad y precisión, adaptándose a
              las necesidades específicas de nuestros clientes.
            </p>
            <Button variant="primary" className="mt-6 w-min text-nowrap">
              Conocer más
            </Button>
          </div>
        </article>
      </Layout>
    </section>
  );
};
