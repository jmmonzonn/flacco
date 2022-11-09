import React, { useEffect, useState, useContext } from "react";
import "./ArtistPlayer.css";
import PlayList from "./PlayList";
import { Context } from "../../../store/appContext";

export default function ArtistPlayer() {
  const { store, actions } = useContext(Context);
  const [imageSrc, setImageSrc] = useState();
  const [playList, setPlayList] = useState();
  useEffect(() => {
    setImageSrc(store.artist.imageSrc);
    setPlayList(store.artist.songs);
    console.log(playList);
  }, [store.artist.imageSrc, store.artist.songs]);

  return (
    <div className="song-container">
      {/* <AudioSpectrum
        id="audio-canvas"
        height={200}
        width={300}
        audioEle={store.song}
      /> */}
      
      <img
        src={imageSrc}
        className={store.isPlaying ? "rotate-animation" : ""}
        alt=""
      />

      <PlayList />
    </div>
  );
}
