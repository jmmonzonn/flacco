import { useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import ArtistPlayer from "./components/ArtistPlayer";
import { dataArtistCardRappers } from "../Artists/components/dataArtistCard";
import { Context } from "../../store/appContext";


const Artist = () => {
  const location = useLocation()
  const { store, actions } = useContext(Context)

  useEffect(() => {
    for(let i = 0; i < dataArtistCardRappers.length; i++) {
      if (location[0] === "/artist/" + dataArtistCardRappers[i].route) {
        actions.setItem(dataArtistCardRappers[i], "artist")
      }
    }
  }, [])

  
  
  return (
    <div className="">
      <ArtistPlayer />
      
    </div>
  );
};

export default Artist;
