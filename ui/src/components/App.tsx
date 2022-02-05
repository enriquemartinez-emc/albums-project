import AlbumDetails from "./AlbumDetails";
import AlbumsList from "./AlbumsList";
import Layout from "./Layout";

export default function App() {
  return (
    <Layout>
      <AlbumsList />
      <AlbumDetails />
    </Layout>
  );
}
