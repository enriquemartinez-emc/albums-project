import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { IAlbum } from "../types";

interface AlbumDetailsProps {
  selectedAlbum: IAlbum;
  addAlbum: (album: IAlbum) => void;
  editAlbum: (album: IAlbum) => void;
}

export default function AlbumDetails({
  selectedAlbum,
  addAlbum,
  editAlbum,
}: AlbumDetailsProps) {
  const [album, setAlbum] = useState<IAlbum>({ ...selectedAlbum });

  const initialAlbum: IAlbum = {
    id: null,
    name: "",
    description: "",
    artistName: "",
    coverUrl: "",
  };

  useEffect(() => {
    setAlbum({ ...selectedAlbum });
  }, [selectedAlbum]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setAlbum({ ...album, [name]: value });
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (album.name === "") return;

    if (album.id) {
      editAlbum(album);
      setAlbum(initialAlbum);
    } else {
      addAlbum(album);
      setAlbum(initialAlbum);
    }
  }

  return (
    <Card className="shadow">
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Album Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={album?.name}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="artistName">Artist Name</Label>
            <Input
              id="artistName"
              name="artistName"
              type="text"
              value={album?.artistName}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              id="description"
              name="description"
              type="textarea"
              value={album?.description}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="coverUrl">Cover Url</Label>
            <Input
              id="coverUrl"
              name="coverUrl"
              type="text"
              value={album?.coverUrl}
              onChange={handleChange}
            />
          </FormGroup>

          <Button color="primary">
            {album.id ? "Edit Album" : "Add Album"}
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}
