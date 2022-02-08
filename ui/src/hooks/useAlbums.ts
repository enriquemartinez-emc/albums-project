import { useState } from "react";
import AlbumService from "../api/album-service";
import { IAlbum } from "../types";

const initialAlbum: IAlbum = {
  id: null,
  name: "",
  description: "",
  artistName: "",
  coverUrl: "",
};

export default function useAlbums() {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(initialAlbum);

  async function fetchAlbums() {
    try {
      const { data } = await AlbumService.getAll();
      setAlbums(data.albums);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function selectAlbum(album: IAlbum) {
    setSelectedAlbum(album);
  }

  async function addAlbum(album: IAlbum) {
    try {
      const { data } = await AlbumService.create(album);
      setAlbums([...albums, data.album]);
    } catch (error: any) {
      setError(error);
      console.log(error);
    }
  }

  async function editAlbum(album: IAlbum) {
    try {
      const { data } = await AlbumService.update(album.id!, album);
      const index = albums.findIndex((a) => a.id === data.album.id);
      albums[index] = data.album;
      setAlbums([...albums]);
      setSelectedAlbum(initialAlbum);
    } catch (error: any) {
      setError(error);
      console.log(error);
    }
  }

  return {
    albums,
    selectedAlbum,
    loading,
    error,
    fetchAlbums,
    addAlbum,
    editAlbum,
    selectAlbum,
  };
}
