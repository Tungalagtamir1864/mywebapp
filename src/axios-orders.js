import axios from "axios";

const instance = axios.create({
  baseURL: "https://university-8e4ed-default-rtdb.firebaseio.com/"
});

export default instance;
