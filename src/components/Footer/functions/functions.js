import { useContext } from "react";
import { Context } from "../../../store/appContext";


export const changeCurrentTime = (newValue, song) => {
    let time = song.current.currentTime;
    song.current.currentTime = newValue;
  };

export const playSong = (song, actions) => {
    if (song.current !== null) {
      if (song.current.paused) {
        song.current.play()
        actions.setItem(true, "isPlaying")
      } else {
        song.current.pause()
        actions.setItem(false, "isPlaying")
      }
    }
  };

export  const convertSecondsToHoursMinutesSeconds = (num, set) => {
    let totalSeconds = parseInt(num)
    if (totalSeconds === 0) {
      set()
    } else if (totalSeconds < 60) {
      set("0." + totalSeconds)
    } else if (totalSeconds >= 60 ) {
      let totalMinutes = Math.floor(totalSeconds / 60)
      if (totalMinutes < 60) {
        set(totalMinutes + "." + totalSeconds%60)
      } else {
        let totalHours = Math.floor(totalMinutes/60)
        set(totalHours + "." + totalMinutes%60 + "." + totalSeconds%60) 
      }
    }
  }