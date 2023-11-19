import axios from "axios";

export const imgUpload = async (image) => {
  const VITE_IMG_KEY = import.meta.env.VITE_IMG_KEY;
  const IMG_API = `https://api.imgbb.com/1/upload?key=${VITE_IMG_KEY}`;
  const formData = new FormData();
  formData.append("image", image);

  const{data}=await axios.post(IMG_API,formData)
  return data;
};
