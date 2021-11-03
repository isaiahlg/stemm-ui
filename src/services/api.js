import axios from "axios";

const api = axios.create();

export function submitValues(values, advValues) {
  api.post("http://engine.stemm.edu/api/", values);
}
