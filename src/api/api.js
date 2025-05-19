import axios from "axios";
import raw_data from "../../data.json";

const API_KEY = "j7XouRG_TnCoMEY5MMEDmfSofFbbeQ_-GYuhvpmHnRU";
const PER_PAGE = 9;
axios.defaults.baseURL = "https://api.unsplash.com/";

// const api = axios.create({
//   headers: {
//     "Accept-Version": "v1",
//     Authorization: `Client-ID ${API_KEY}`,
//     // Authorization: "Client-ID j7XouRG_TnCoMEY5MMEDmfSofFbbeQ_-GYuhvpmHnRU",
//   },
// });

export const getImageGalleryData = async ({ searchQuery, page }) => {
  // const { data } = await api.get("/search/photos", {
  //   params: {
  //     query: "car",
  //     page: 1,
  //     per_page: PER_PAGE,
  //   },
  // });

  const data = raw_data;
  return data;
};
