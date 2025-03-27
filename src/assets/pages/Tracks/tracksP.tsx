import React, { useState } from "react";
import "./tracksP.css";
import { tracks } from "../../../data/tracksData"; 

const TracksPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: "",
    year: "",
    track: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for registering for ${formData.track}!`);
    setFormData({ fullName: "", email: "", course: "", year: "", track: "" });
  };

  return (
    <div className="tracksPage">
      <section className="registerSection">
        <h2>Register for a Track</h2>
        <form className="registerForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="course"
            placeholder="Course of Study"
            value={formData.course}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="year"
            placeholder="Year of Study"
            value={formData.year}
            onChange={handleChange}
            required
          />

          <label htmlFor="track">Select a Track:</label>
          <select
            id="track"
            name="track"
            value={formData.track}
            onChange={handleChange}
            required
          >
            <option value="">Select Track</option>
            {tracks.map((track, index) => (
              <option key={index} value={track.title}>
                {track.title}
              </option>
            ))}
          </select>

          <button type="submit">Register</button>
        </form>
      </section>
    </div>
  );
};

export default TracksPage;
