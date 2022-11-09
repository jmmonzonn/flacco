import { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";
import "./Playlist.css";
const PlayList = () => {
  const { store, actions } = useContext(Context);
  const [playList, setPlayList] = useState();

  const activeTrack = e => {
    document
      .querySelectorAll(".active")
      .forEach(element => element.classList.remove("active"));

    e.target.classList.add("active");
  };

  useEffect(() => {
    store.artist.songs && setPlayList(store.artist.songs);
  }, [store.artist.songs]);

  return (
    <div
      style={{ width: "27%" }}
      class=" sm:visible sm2:invisible sm3:invisible absolute right-0 bottom-60 bg-gray-800 h-3/5 items-center justify-center"
    >
      {playList &&
        playList.map((song, index) => {
          return (
            <div className=" block py-2.5">
              <button
                className="deactive"
                onClick={e => {
                  actions.setItem(song.src, "currentTrack");
                  actions.setItem(song, "song")
                  activeTrack(e);
                  console.log(e.target.className);
                }}
              >
                {song.id}. {song.name}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default PlayList;
