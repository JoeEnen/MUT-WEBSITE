import React from "react";
import { events } from "../../../data/eventsdata";
import "./Events.css";

const EventsPage: React.FC = () => {
  return (
    <div className="eventsPage">
      <h1>MUTC Weekly Events</h1>
      <p className="p" >Explore our scheduled learning sessions and workshops.</p>

      <section className="eventsList">
        {events.map((event, index) => (
          <div key={index} className="eventItem">
            <h2>{event.track}</h2>
            <p><strong>📅 {event.day}</strong></p>
            <p><strong>⏰ {event.time}</strong></p>
            <p><strong>📍 {event.location}</strong></p>
            <p><strong>👨‍🏫 Instructor:</strong> {event.instructor}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EventsPage;
