import React from 'react'
import './Testimony.css'

const Testimony = ({testCard}) => {
  return (
    <div className='testimony'>
        <div className='t-head'>
            <h2>Explore Featured Agents</h2>
            <p>An agent is anyone who brings us buyers or property to sell. Register with us an agent<br /> and we will help build your career at your convenience.</p>
        </div>
        <div className='testimony-cards'>
            {testCard.map(tCard=>{
                return <div className='t-card' key={tCard.id}>
                <div className='profile-img'>
                <img className='image' src={tCard.imageSrc} alt=''  />
                </div>
                <div className="t-body">
                    <h4>{tCard.name}</h4>
                    <p>{tCard.phone}</p>
                    <span>{tCard.years}</span>
                </div>
            </div>
            })}
            
        </div> 
        <span className='btn'>Register As an Agent</span>     
    </div>
  )
}

export default Testimony
