import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export function fetchUsers(filter = {}, paginationData = {}) {
  return axios.get(`${API}/users`, {
    params: {
      filter,
      pagination: paginationData,
    },
  });
}
export function fetchFilters() {
  return axios.get(`${API}/filters`);
}
