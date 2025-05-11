import axios from "axios";

axios.defaults.baseURL = "http://localhost/";

export const getImageGalleryData = async (v) => {
  const { data } = await axios("test", { params: { query: v, page: 12 } });
  return data;
};
