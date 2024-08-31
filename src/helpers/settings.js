import axios from "axios";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const fetchCampers = async () => {
  const response = await axios.get("/campers", options);
  return response;
};
