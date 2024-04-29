import Images from "@/app/[locale]/photos/_images";

export default async function Photos() {
  return (
    <div>
      <p className="mx-auto w-[95%] px-4 text-justify min-[640px]:w-[640px]">
        I enjoy taking photos (specially car pics) as a hobbie, these are taken with my Nikon D3400 for fun.
      </p>
      <div className="py-4">
        <Images />
      </div>
    </div>
  );
}
