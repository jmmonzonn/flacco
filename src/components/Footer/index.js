import "./index.css";
import { Context } from "../../store/appContext";
import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { playSong } from "./functions/functions";
import { changeCurrentTime } from "./functions/functions";
import { convertSecondsToHoursMinutesSeconds } from "./functions/functions";

const Footer = () => {
  const { store, actions} = useContext(Context)
  const song = useRef(null);
  const [url, setUrl] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [duration, setDuration] = useState()
  const [background, setBackground] = useState(0);
  
  useEffect(() => { setInterval(() => {
      if (song.current && song.current.currentTime && song.current.duration) {
        convertSecondsToHoursMinutesSeconds(song.current.currentTime, setCurrentTime)
        convertSecondsToHoursMinutesSeconds(song.current.duration, setDuration)
      setBackground(song.current.currentTime * (100 / song.current.duration));
      }
        
    }, 100);
  }, []);

  useEffect(() => {
    setUrl(store.currentTrack)
  }, [store.currentTrack])

  return (
    <>
      <div className="nav1 bg-gray-900">
        <audio
          ref={song}
          src={url}
        />
        <button className=" text-white size" onClick={() => playSong(song, actions)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-8  fill-white"
            viewBox="0 0 384 512"
          >
            <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
          </svg>
        </button>
        <p className="text-white absolute left-1/4 ">{currentTime}</p>
        <p className="text-white absolute right-1/4 ">{duration}</p>
        <div className="slidecontainer">
          {" "}
          <input
            type="range"
            oninput="rangevalue.value=value"
            min={0}
            max={song.current ? song.current.duration : 0}
            onChange={e => {
              changeCurrentTime(e.target.value, song);
            }}
            value={song.current ? song.current.currentTime : 0}
          ></input>
          <div className="bar" style={{ width: `${background > 0.6 ? background : background - 0.5}%` }}></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
