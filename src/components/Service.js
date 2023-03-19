import './Service.css'
const Service = ( {cardDetails} ) => {
  return (
    <div className='service'>
        <div className='image'>
    <img src='https://img.freepik.com/free-photo/hand-holding-house-real-estate-property-model_53876-129010.jpg?w=2000' alt='hand holding a house' />
        </div>
        <div className='services'>
            <div className='grid'>
              {
                cardDetails.map(card=>{
                  return <div className='card' key={card.id}>
                  {card.icon}
                  <div>
                  <h3>{card.text}</h3>
                  <p>{card.paragraph}</p>
                  </div>
                  {card.link}
                </div>
                })
              }
            </div>
        </div>
        
      
    </div>
  )
}

export default Service
