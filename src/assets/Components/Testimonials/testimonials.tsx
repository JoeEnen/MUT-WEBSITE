import TestimonialCard from "./testimonialCard";
import "../Testimonials/testimonials.css";

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Jane Litu",
      quote:
        "MUTC has transformed my tech skills and given me real-world exposure.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Andrew Manes",
      quote: "The networking opportunities at MUTC are amazing!",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Lucy Wambui",
      quote: "I've learned so much about UI/UX and Web Development!",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  return (
    <section className="testimonialsSection">
      <h2>What Our Members Say</h2>
      <div className="testimonialsContainer">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
