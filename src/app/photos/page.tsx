import Images from "@/app/photos/_images";

export default async function Photos() {
  return (
    <div className="mx-auto w-full px-2">
      <p className="text-center">Photos taken with my Nikon D3400 for fun.</p>
      <div className="py-4">
        <Images />
      </div>
    </div>
  );
}
