import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import useAlbums from "../hooks/useAlbums";
import { IAlbum } from "../types";

export default function AlbumDetails() {
  const { selectedAlbum, addAlbum, editAlbum } = useAlbums(); 
  const [album, setAlbum] = useState<IAlbum>({ ...selectedAlbum });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setAlbum({ ...album, [name]: value });
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log(album);
    if (album && album.id) {
      editAlbum(album);
    } else {
      addAlbum(album);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Album Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Album name"
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
          placeholder="Artist name"
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
          placeholder="Cover Url"
          type="text"
          value={album?.coverUrl}
          onChange={handleChange}
        />
      </FormGroup>

      <Button>{selectedAlbum.id ? "Edit Album" : "Add Album"}</Button>
    </Form>
  );
}
