import axios from "axios";
// import raw_data from "../../data.json";

const API_KEY = "j7XouRG_TnCoMEY5MMEDmfSofFbbeQ_-GYuhvpmHnRU";
const PER_PAGE = 20;
axios.defaults.baseURL = "https://api.unsplash.com/";

const api = axios.create({
  headers: {
    "Accept-Version": "v1",
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export const getImageGalleryData = async (searchQuery, page = 1) => {
  const data = await api.get("/search/photos", {
    params: {
      query: searchQuery,
      page,
      per_page: PER_PAGE,
    },
  });

  // const data = raw_data;
  return data;
};
