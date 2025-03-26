import "./testimonialCard.css"

interface TestimonialProps {
  name: string;
  quote: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, quote, image }) => {
  return (
    <div className="testimonialCard">
      <img src={image} alt={name} className="testimonialImage" />
      <p className="testimonialQuote">"{quote}"</p>
      <h4 className="testimonialName">{name}</h4>
    </div>
  );
};

export default TestimonialCard;
