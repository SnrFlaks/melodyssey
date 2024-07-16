import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Icon, IconButton } from "@mui/material";
import Player from "./Player";
import "./App.css";

const defaultPlaylistUrl =
  "https://open.spotify.com/playlist/37i9dQZF1DX69uAEiqiuHZ?si=1ed25c7762ed4252";

function App() {
  const [spotifyUrl, setSpotifyUrl] = useState<string>(defaultPlaylistUrl);
  const [type, setType] = useState<string>("");
  const [id, setId] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    extractTypeAndId(defaultPlaylistUrl);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpotifyUrl(event.target.value);
    extractTypeAndId(event.target.value);
  };

  const extractTypeAndId = (url: string) => {
    const urlParts = new URL(url);
    const pathSegments = urlParts.pathname.split("/");
    const type = pathSegments[1];
    const id = pathSegments[2].split("?")[0];
    setType(type);
    setId(id);
  };

  const handleInfoButtonClick = () => {
    navigate("/aboutus");
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <div className="titleContainer">
          <img src="/logo.png" alt="logo" className="logo" />
          <h1 className="title">Melodyssey</h1>
          <IconButton
            className="info-btn"
            aria-label="Open about us"
            onClick={handleInfoButtonClick}
          >
            <Icon className="info-icon">info</Icon>
          </IconButton>
        </div>
      </div>
      <p className="instruction">
        Введіть посилання на плейлист, виконавця, трек або альбом Spotify:
      </p>
      <input
        type="text"
        placeholder="Enter Spotify URL"
        value={spotifyUrl}
        onChange={handleInputChange}
        className="input"
      />
      {type && id && <Player className="player" type={type} id={id} />}
    </div>
  );
}

export default App;
