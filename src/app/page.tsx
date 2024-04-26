import AboutImage from "@/components/about-image";
import ContactButtons from "@/components/contact-menu";

export default function Home() {
  return (
    <div className="mx-auto w-[95%] px-2 min-[640px]:w-[640px]">
      <AboutImage />
      <p className="pt-4 text-xl">
        Juan <b>Andres</b> Bautista
      </p>
      <p className="pt-1 text-justify text-muted">
        I am a full-stack web developer. Born and based in Colombia. I believe
        in designing things with passion in order to solve problems correctly
        with usability and aesthetics in mind.
      </p>
      <ContactButtons />
    </div>
  );
}
