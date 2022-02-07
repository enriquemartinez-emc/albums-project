import { Button } from "reactstrap";
import { IAlbum } from "../types";

interface AlbumsListProps {
  loading: boolean;
  error: unknown;
  albums: IAlbum[];
  selectAlbum: (album: IAlbum) => void;
}

export default function AlbumsList({
  loading,
  error,
  selectAlbum,
  albums,
}: AlbumsListProps) {
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
          <th></th>
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
                <i className="bi-pencil-square"></i>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
