import "./tracks.css";

interface TrackProps {
  title: string;
  description: string;
}

const TrackCard: React.FC<TrackProps> = ({ title, description }) => {
  return (
    <div className="trackCard">
      <h3 className="trackTitle">{title}</h3>
      <p className="trackDescription">{description}</p>
    </div>
  );
};

export default TrackCard;