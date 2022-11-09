import { useRef, useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        playList: [],
        isPlaying: false,
        artist: {},
        songs: {}, 
        currentTrack: "",
        song: null
      },
      actions: {
        setItem: (item, set) => {
          setStore({[set]: item})
        }
      },
    };
  };
  
  export default getState;