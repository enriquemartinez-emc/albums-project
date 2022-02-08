import { useEffect } from "react";
import { Col, Row } from "reactstrap";
import useAlbums from "../hooks/useAlbums";
import AlbumDetails from "./AlbumDetails";
import AlbumsList from "./AlbumsList";
import Layout from "./Layout";

export default function App() {
  const {
    albums,
    loading,
    error,
    fetchAlbums,
    selectAlbum,
    selectedAlbum,
    addAlbum,
    editAlbum,
  } = useAlbums();

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <Layout>
      <Row>
        <Col sm={8}>
          <AlbumsList
            albums={albums}
            loading={loading}
            error={error}
            selectAlbum={selectAlbum}
          />
        </Col>
        <Col>
          <AlbumDetails
            selectedAlbum={selectedAlbum}
            addAlbum={addAlbum}
            editAlbum={editAlbum}
          />
        </Col>
      </Row>
    </Layout>
  );
}
