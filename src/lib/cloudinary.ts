export interface DataStructure {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  uploaded_at: string;
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: string;
  access_mode: string;
  access_control: null;
  etag: string;
  created_by: object;
  uploaded_by: object;
}

export async function getImages() {
  try {
    const results = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/tags/nogiveup`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ":" + process.env.CLOUDINARY_API_SECRET).toString("base64")}`,
        },
      },
    ).then((response) => response.json());

    const data: DataStructure[] = results.resources;

    return data.map((image) => {
      const { width, height } = image;
      return {
        id: image.asset_id,
        title: image.public_id,
        url: image.secure_url,
        width,
        height,
      };
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}
