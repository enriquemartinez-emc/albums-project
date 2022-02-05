import { IAlbum } from "../types";
import http from "./http-common";

const getAll = () => {
  return http.get("/albums");
};

const get = (id: string) => {
  return http.get(`/albums/${id}`);
};

const create = (data: IAlbum) => {
  return http.post("/albums", { data });
};

const update = (id: string, data: IAlbum) => {
  return http.put(`/albums/${id}`, { data });
};

const remove = (id: string) => {
  return http.delete(`/albums/${id}`);
};

const removeAll = () => {
  return http.delete(`/albums`);
};

const findByName = (name: string) => {
  return http.get(`/albums?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
};
