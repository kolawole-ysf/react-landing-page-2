import './Hero.css'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import { useState } from 'react'

const Hero = ({hero}) => {
  const [selected, setSelected]=useState(0)
  const hLength=hero.length;
  return (
    <div className='hero'>
        <img className="hero-img" src={hero[selected].image} alt='' />
        <div className='hero-content'>
            <span className='arrow'><FaChevronLeft onClick={()=>{
              selected===0 ? setSelected(hLength-1): setSelected((prev)=>prev-1)}}/></span>
            <div>
            {hero[selected].heroText}
            <div className='button'>
                <button className='btn btn-1'>{hero[selected].btnText1}</button><button className='btn btn-1'>{hero[selected].btnText2}</button>
            </div>
            </div>
            <span className='arrow'><FaChevronRight onClick={()=>{
              selected===hLength-1 ? setSelected(0): setSelected((next)=>next+1)}}/></span>
        </div>
      
    </div>
  )
}

export default Hero
