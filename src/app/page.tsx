import AboutImage from "@/components/about-image";
import { getI18n } from "@/locales/server";

export default async function Home() {
  const t = await getI18n();

  return (
    <div className="mx-auto w-[95%] px-2 min-[640px]:w-[640px]">
      <AboutImage />
      <p className="pt-4 text-xl">
        Juan <b>Andres</b> Bautista
      </p>
      <p className="pt-1 text-justify text-muted">{t("description")}</p>
      <p className="pt-1 text-center text-muted">
        <i>{t("languages")}</i>
      </p>
    </div>
  );
}
