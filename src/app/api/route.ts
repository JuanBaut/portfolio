import { ImagesObjectType } from "@/lib/image-types";

export async function GET() {
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/tags/realshit?max_results=12`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ":" + process.env.CLOUDINARY_API_SECRET).toString("base64")}`,
        },
      },
    ).then((r) => r.json());

    const data: ImagesObjectType[] = await response.resources;

    const images = data.map((item) => {
      const height = 1000;
      const width = 1000;
      const aspectRatio = "1:1";

      const baseUrl = item.secure_url.split("/upload/")[0];
      const publicId = item.secure_url.split("/upload/")[1];

      const transformation = `c_fill,w_${width},h_${height},ar_${aspectRatio}`;
      const newUrl = `${baseUrl}/upload/${transformation}/${publicId}`;

      return {
        url: newUrl,
        id: item.asset_id,
        title: item.public_id,
        width,
        height,
      };
    });

    return Response.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    return Response.json("Error fetching the images");
  }
}
