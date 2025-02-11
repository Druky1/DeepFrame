import axios from "axios";

export const ConvertImage = async (imageUrl : any) => {
  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const base64Image = Buffer.from(response.data).toString("base64");
    return base64Image;
  } catch (error : any) {
    console.error("Error in converting image:", error.message);
  } 
}