import { ImageType } from "./image-types";

export default function isImage(image: ImageType): image is ImageType {
  if (typeof image === "undefined") {
    return false;
  } else {
    return "url" in image;
  }
}
