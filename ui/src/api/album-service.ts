import { IAlbum } from "../types";
import http from "./http-common";

const getAll = () => {
  return http.get("/albums");
};

const get = (id: string) => {
  return http.get(`/albums/${id}`);
};

const create = (album: IAlbum) => {
  return http.post("/albums", album);
};

const update = (id: string, album: IAlbum) => {
  return http.put(`/albums/${id}`, { album });
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
