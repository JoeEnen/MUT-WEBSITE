import { tracks } from "../../../data/tracksData";
import TrackCard from "./tracksCa";
import "./tracks.css";

const Tracks: React.FC = () => {
  return (
    <section className="tracksContainer">
      <h2 className="tracksHeader">Our Specialized Tracks</h2>
      <div className="tracksGrid">
        {tracks.map((track, index) => (
          <TrackCard
            key={index}
            title={track.title}
            description={track.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Tracks;
