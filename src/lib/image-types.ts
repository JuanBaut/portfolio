export interface ImagesObjectType {
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

export type ResponseType =
  | {
      url: string;
      id: string;
      title: string;
      width: number;
      height: number;
    }[]
  | "Error fetching the images";

export type ImageType = {
  url: string;
  id: string;
  title: string;
  width: number;
  height: number;
};
