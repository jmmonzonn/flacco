import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../../store/appContext";
import "./ArtistCard.css"

const ArtistCard = props => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const { store, actions } = useContext(Context)

  return (
    <>
      <button onClick={() => {
        history.push("/artist/" + props.route)}}>
        <div className="artistCard bg-gray-600 hover:bg-gray-700 transition duration-200 rounded-md group">
          <section className="pt-6 pr-6 pl-6">
            <div class="overflow-hidden rounded-md relative ">
              <div class=" z-50 opacity-0 group-hover:opacity-100 transition duration-200   absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2  flex ">
                <div class="pl-5 pb-9 group-hover:opacity-200 group-hover:translate-y-0 translate-y-4 transition duration-300 ease-in-out">
                  <button>
                    <FontAwesomeIcon
                      icon={faPlay}
                      className=" text-slate-200 text-3xl "
                    />
                  </button>
                </div>
              </div>

              <img
                id="hola"
                alt=""
                class=" group-hover:scale-110 transition duration-200 ease-in-out"
                src={props.imageSrc}
              />
            </div>
          </section>
          <p className="text-white font-sans text-sm text-start pl-6 pb-2 pt-2">{props.name}</p>
        </div>
      </button>
    </>
  );
};

export default ArtistCard;
