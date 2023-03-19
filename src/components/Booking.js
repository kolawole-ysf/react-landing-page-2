import  './Booking.css'
import {FaHome, FaBuilding} from 'react-icons/fa'

const Booking = () => {
  return (
    <div className='booking'>
        <div className='head'>
            <h2>Book A <br />consultation</h2>
            <p>We provide expert advice on real estate at the convenience of <br />your mobile phone</p>
        </div>
        <div className='body'>
        <div className='b'>
            <div className='topics'>
                <ul className='l-col'>
                    <li><FaHome style={{marginRight: 10, color: "green"}}/>Land / House Acquisition</li>
                    <li><FaBuilding style={{marginRight: 10, color: "green"}} />Listing / Selling / Partnership</li>
                    <li><FaHome style={{marginRight: 10, color: "green"}} />Brokerage Services</li>
                    <li><FaHome style={{marginRight: 10, color: "green"}} />Event Hosting</li>
                    <li><FaHome style={{marginRight: 10, color: "green"}} />Execution of private & public contracts</li>
                </ul>
                <ul className='r-col'>
                    <li><FaHome style={{marginRight: 10, color: "green"}} />Land Title</li>
                    <li><FaHome style={{marginRight: 10, color: "green"}} />Construction / Interior Design</li>
                    <li><FaHome style={{marginRight: 10, color: "green"}} />Taxes</li>
                    <li><FaHome style={{marginRight: 10, color: "green"}} />Business Plan</li>
                    <li><FaHome style={{marginRight: 10, color: "green"}} />Workshop / Training</li> 
                </ul>
            </div>
            <span className='btn'>Consult</span>
        </div>
        <div className='agent'>
            <img src='https://www.salesforce.com/content/dam/blogs/uk/2017/customer-service-tech-agents-600.jpg' className="agent-img" alt='' />
            <div className='underlay'></div>
        </div>
        </div>
        
    </div>
  )
}

export default Booking
