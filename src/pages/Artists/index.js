import ArtistCard from "./components/ArtistCard";
import './index.css';
import {
  dataArtistCardProducers,
  dataArtistCardRappers
} from "./components/dataArtistCard";

const Artists = () => {
  return (
    <div className=" container1 float-right w-4/5">
      <p className="text-xl text-white ml-3 pt-6 pb-2 font-sans">Raperos</p>
      <div className="cardList">
      {dataArtistCardRappers.map(value => {
            return (
              <ArtistCard
                name={value.name}
                description={value.description}
                imageSrc={value.imageSrc}
                textColor={value.textColor}
                route={value.route}
              />
            );
          })}
          </div>
          <p className="text-xl text-white ml-3 pt-6 pb-2 font-sans">Productores</p>
      <div className="cardList">
      {dataArtistCardProducers.map(value => {
            return (
              <ArtistCard
                name={value.name}
                description={value.description}
                imageSrc={value.imageSrc}
                textColor={value.textColor}
                route={value.route}
              />
            );
          })}
          </div>
    </div>
    
  );
};

export default Artists;
