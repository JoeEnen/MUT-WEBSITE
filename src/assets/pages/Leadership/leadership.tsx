import React from "react";
import { leaders } from "../../../data/leadershipData";
import "../Leadership/leadership.css";

const Leadership: React.FC = () => {
  return (
    <div className="leadershipContainer">
      <h1 className="leadershipTitle">Meet Our Leadership Team</h1>
      <div className="leadersGrid">
        {leaders.map((leader, index) => (
          <div key={index} className="leaderCard">
            <img src={leader.image} alt={leader.name} className="leaderImage" />
            <h3 className="leaderName">{leader.name}</h3>
            <p className="leaderRole">{leader.role}</p>
            <p className="leaderBio">{leader.bio}</p>
            <div className="socialLinks">
              {leader.socials.twitter && (
                <a href={leader.socials.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              )}
              {leader.socials.linkedin && (
                <a href={leader.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
              {leader.socials.facebook && (
                <a href={leader.socials.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              )}
              {leader.socials.instagram && (
                <a href={leader.socials.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
