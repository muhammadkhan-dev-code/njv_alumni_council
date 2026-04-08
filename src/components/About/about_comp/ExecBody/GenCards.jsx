import StdCards from './StdCards'
const GenCards = ({ data }) => {
  return (
    <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 sm:p-4'>
      {data.map((card, index) => (
        //  general card for displaying the student information
        <StdCards
          key={index}
          name={card.name}
          role={card.role}
          image={card.image}
          shortDescription={card.shortDescription}
        />
      ))}
    </div>
  )
}

export default GenCards
