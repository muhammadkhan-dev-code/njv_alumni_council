import { useState } from 'react';
import vision from '../svg/vision.svg';
import mission from '../svg/mission.svg';
import Card from './Card.jsx';

const VisionMission = () => {
  const [cardsData] = useState([
    {
      image_src: vision,
      heading: 'Vision',
      paragraph: 'To inculcate in our fellows a knowledge base that cultivates: Free Thinkers, Creative Problem Solvers and Compassionate Leaders who challenge the conventional wisdom of the world.'
    },
    {
      image_src: mission,
      heading: 'Mission',
      paragraph: 'To empower our community through innovative education, fostering creativity, compassion, and leadership to drive transformative change worldwide.'
    }
  ]);

  return (
    <div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            src_image={card.image_src}
            heading={card.heading}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default VisionMission;