import IntroCards from './IntroCards';
import { useState } from 'react';
import president from './../../../assets/images/president.jpg';
import vicepresident from './../../../assets/images/vicepresident.jpg';
import operationManager from './../../../assets/images/operationManager.jpg';
import mediaDaniyal from './../../../assets/images/mediaDaniyal.jpg';
import mediaFarwa from './../../../assets/images/mediaFarwa.jpg';
import digiKhan from './../../../assets/images/digiKhan.jpg';
import digiMaqsood from './../../../assets/images/digiMaqsood.jpg';

import generalsecretary from './../../../assets/images/generalsecratary.jpg';
import dep_Ateeq from './../../../assets/images/depAteeq.jpg'
import financeShahid from './../../../assets/images/finaceshahid.jpg';
import infoXalam from './../../../assets/images/infoXalam.jpg';
import repDhanraj from './../../../assets/images/repDhanraj.jpg';
import repMuskan from './../../../assets/images/repMuskan.jpg';
import jawadAli from './../../../assets/images/jawadAli.jpg';
import reptahmina from './../../../assets/images/reptahmina.jpg';
import junaidAhmed from './../../../assets/images/junaidAhmed.jpg';
import replareb from './../../../assets/images/replareb.jpg';
import repMadan from './../../../assets/images/repMadan.jpg';
import reppreh from './../../../assets/images/reppreh.jpg';
const Exec_Body = () => {
  const [cards] = useState([
    { name: "Ateeq Baloch", image: dep_Ateeq, shortDescription: "Deputy" },
    { name: "Muhammad Khan", image: digiKhan, shortDescription: "Digital Khan" },
    { name: "Maqsood", image: digiMaqsood, shortDescription: "Digital Maqsood" },
    { name: "Shahid", image: financeShahid, shortDescription: "Finance" },
    { name: "General Secretary", image: generalsecretary, shortDescription: "General Secretary" },
    { name: "Xalam", image: infoXalam, shortDescription: "Info Xalam" },
    { name: "Jawad Ali", image: jawadAli, shortDescription: "Jawad Ali" },
    { name: "Junaid Ahmed", image: junaidAhmed, shortDescription: "Junail Ahmed" },
    { name: "Daniyal", image: mediaDaniyal, shortDescription: "Media Daniyal" },
    { name: "Farwa", image:mediaFarwa, shortDescription: "Media Farwah" },
    { name: "Operation Manager", image: operationManager, shortDescription: "Operation Manager" },
    { name: "Zubair Ahmed", image: president, shortDescription: "President" },
    { name: "Dhanraj", image: repDhanraj, shortDescription: "Representative Dhanraj" },
    { name: "Lareb", image: replareb, shortDescription: "Representative" },
    { name: "Madan", image: repMadan, shortDescription: "Representative Madan" },
    { name: "Muskan", image: repMuskan, shortDescription: "Representative Muskan" },
    { name: "Preh", image: reppreh, shortDescription: "Representative Preh" },
    { name: "Tahmina", image: reptahmina, shortDescription: "Representative Tahmina" },
    { name: "Vice President", image: vicepresident, shortDescription: "Vice President" },
  ]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card, index) => (
        <IntroCards
          key={index}
          name={card.name}
          image={card.image}
          shortDescription={card.shortDescription}
        />
      ))}
    </div>
  );
};

export default Exec_Body;