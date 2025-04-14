import { Layout } from "../../app/Layout";
import { Button } from "../../elements/Button";
import { GridBackgroundDemo } from "../../ui/GridBackgroundDemo";
import { cn } from "@/lib/utils";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { ColourfulText } from "../../ui/colourful-text";

/*
export const Hero = () => {
  return (
    <div className="relative w-full h-[45rem] bg-bg">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <Layout className={"md:flex-row justify-center items-center gap-4"}>
        <div className="hidden w-full md:order-2">
          qweqw
          <img src="pay.png" alt="iamge-hero" srcset="" />
        </div>

        <div className="w-full md:order-1">
          <h1 className="text-5xl font-semibold text-tbody   font-manrope">
            VRT - Producción sin limites <br /> en{" "}
            <span className="text-primary"> tiempo real</span>
          </h1>
          <p className="text-lg">
            Creación al alcance de la mano, más rápido que nunca
          </p>

          <Button variant="primary" className="mt-6">
            Conocer más{" "}
          </Button>
        </div>
      </Layout>

      <div className="w-full border-y h-[100px] flex items-center px-6 bg-amber-400"></div>
    </div>
  );
};*/

export function Hero() {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];

  return (
    <div className="relative bg-black mx-auto flex h-[80vh] w-full max-w-7xl flex-col items-center justify-center overflow-hidden font-poppins ">
      <h2 className="relative text-2xl md:text-5xl lg:text-6xl font-bold z-20 mx-auto max-w-4xl text-center text-balance text-white">
        VRT - Producción sin limites en <br />
        <span className="hidden relative z-20 rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          tiempo real
        </span>{" "}
        <ColourfulText text="tiempo real" />
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 px-12 text-center text-sm text-neutral-200 md:text-base">
        Creación al alcance de la mano, más rápido que nunca
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <Button variant="primary">Contactanos</Button>
        <Button variant="secondary">Ver más</Button>
      </div>

      {/* overlay */}
      <div className="absolute backdrop-blur-[1px] inset-0 z-10 h-full w-full bg-black/50 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
