import axios from "axios";

const api = axios.create();

export function sendParamsToAPI(props) {
  api.post("http://engine.stemm.edu/api/", props);
}
