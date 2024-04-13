import { DataTypes } from "./data-types";

export async function getImages() {
  try {
    const results = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/tags/realshit?max_results=12`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ":" + process.env.CLOUDINARY_API_SECRET).toString("base64")}`,
        },
      },
    ).then((response) => response.json());

    const data: DataTypes[] = results.resources;

    return data.map((image) => {
      const height = 1000;
      const width = 1000;
      const aspectRatio = "1:1";

      const baseUrl = image.secure_url.split("/upload/")[0];
      const publicId = image.secure_url.split("/upload/")[1];

      const transformation = `c_fill,w_${width},h_${height},ar_${aspectRatio}`;

      const newUrl = `${baseUrl}/upload/${transformation}/${publicId}`;

      return {
        url: newUrl,
        id: image.asset_id,
        title: image.public_id,
        width,
        height,
      };
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}
