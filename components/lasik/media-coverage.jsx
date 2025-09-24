import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

const mediaLogos = [
  "/logo_media_netram/13.png",
  "/logo_media_netram/14.png",
  "/logo_media_netram/15.png",
  "/logo_media_netram/16.png",
  "/logo_media_netram/17.png",
  "/logo_media_netram/18.png",
  "/logo_media_netram/19.png",
  "/logo_media_netram/20.png",
  "/logo_media_netram/21.png",
];

const LogoImage = ({ src }) => (
  <div className="mx-6 flex items-center justify-center">
    <Image
      src={src}
      alt="Media Coverage Logo"
      width={100}
      height={38}
      className="w-auto object-contain transition-all md:scale-100 scale-85"
    />
  </div>
);

export default function MediaCoverage() {
  return (
    <section className="relative bg-theme-secondary/60 py-16 theme-transition">
      <div className="container mx-auto px-4">
        <h2 className="relative mb-8 text-center theme-heading text-3xl font-extrabold text-theme-on-light md:text-4xl">
          You may have seen us in
          <span className="ml-1 inline-block align-middle">:</span>
        </h2>
        <div className="relative w-full overflow-hidden">
          <Marquee
            className="[--duration:20s] md:[--duration:40s]"
            reverse={true}
            repeat={4}
            pauseOnHover
          >
            {mediaLogos.map((logo, index) => (
              <LogoImage key={index} src={logo} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
