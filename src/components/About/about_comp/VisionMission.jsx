import { useState } from 'react';
import Card from './Card.jsx';
import vision from '../svg/vision.svg'
import mission from '../svg/mission.svg'
const VisionMission = () => {
    const [cardsData] = useState([
    {
      image_src: vision,
      heading: "Vision",
      paragraph:
        "To unite generations of NJV alumni as a vibrant community that preserves our legacy, empowers future leaders, and contributes to education and society with pride and purpose.",
    },
    {
      image_src: mission,
      heading: "Mission",
      paragraph:
        "To foster lifelong connections among alumni, provide mentorship and opportunities for students, support NJV’s growth, and uphold its tradition of excellence through collaboration, service, and shared values.",
    },
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