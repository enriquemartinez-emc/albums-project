import { useEffect } from "react";
import { Button } from "reactstrap";
import useAlbums from "../hooks/useAlbums";
import { IAlbum } from "../types";

export default function AlbumsList() {
  const { albums, loading, error, fetchAlbums, selectAlbum } = useAlbums();

  useEffect(() => {
    fetchAlbums();
  }, []);

  if (loading) return <p>Loading albums...</p>;
  if (error) return <p>Unable to display albums.</p>;

  return (
    <table className="table table-striped" aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Cover</th>
          <th>Album Name</th>
          <th>Artist Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {albums.map((album: IAlbum) => (
          <tr key={album.id}>
            <td>{album.coverUrl}</td>
            <td>{album.name}</td>
            <td>{album.artistName}</td>
            <td>{album.description}</td>
            <td>
              <Button color="primary" onClick={() => selectAlbum(album)}>
                Edit Album
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
