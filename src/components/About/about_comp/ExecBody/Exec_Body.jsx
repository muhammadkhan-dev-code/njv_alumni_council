
import { execBodyData } from './execBodyData'
import StdCards from './StdCards'
const Exec_Body = () => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {execBodyData.map((card, index) => (
        <StdCards
          key={index}
          name={card.name}
          role={card.role}
          image={card.image}
          shortDescription={card.shortDescription}
        />
      ))}
    </div>
  );
};

export default Exec_Body;