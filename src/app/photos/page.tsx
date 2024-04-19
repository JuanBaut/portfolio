import Images from "@/components/photos-extra";

export default async function Photos() {
  return (
    <div className="mx-auto w-full px-2">
      <p className="text-center">Photos taken with my Nikon D3400 for fun.</p>
      <div className="m-4 mx-auto flex flex-wrap items-baseline justify-center gap-4">
        <Images />
      </div>
    </div>
  );
}
