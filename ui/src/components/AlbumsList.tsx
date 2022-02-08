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
          <th>Album</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {albums.map((album: IAlbum) => (
          <tr key={album.id}>
            <td>
              <div className="p-2 d-flex flex-row align-items-center mb-2">
                <img
                  src={album.coverUrl}
                  width="60"
                  className="rounded-circle"
                />
                <div className="d-flex flex-column ml-2">
                  <span className="d-block font-weight-bold">{album.name}</span>
                  <small className="text-muted">{album.artistName}</small>
                </div>
              </div>
            </td>
            <td>
              <div className="p-2 d-flex flex-column">{album.description}</div>
            </td>
            <td>
              <div className="p-2">
                <Button color="primary" onClick={() => selectAlbum(album)}>
                  Edit
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
