import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import { FaArrowRight, FaUser } from "react-icons/fa";
import Booking from "./components/Booking";
import Testimony from "./components/Testimony";
import Footer from "./components/Footer";

function App() {
  const navlinks=[{
    id: 1,
    value: "Home",
    url: "#",
    active: "active"
  },
  {
    id: 2,
    value: "About Us",
    url: "#",
    active: "inactive"
  },
  {
    id: 3,
    value: "Services",
    url: "#",
    active: "inactive"
  },
  {
    id: 4,
    value: "Properties",
    url: "#",
    active: "inactive"
  },
  {
    id: 5,
    value: "Pricing",
    url: "#",
    active: "inactive"
  },
  {
    id: 6,
    value: "FAQs",
    url: "#",
    active: "inactive"
  },
  {
    id: 7,
    value: "Contact",
    url: "#",
    active: "inactive"
  },
]
const hero=[
  {
    id: 1,
    image: "https://media.istockphoto.com/id/1423990264/photo/diversity-professional-engineer-training-and-discussing-in-robot-development-plant.jpg?b=1&s=170667a&w=0&k=20&c=7XvVgL9Rhywr-l0AA_9qZy23t7U3B5wXzsmdx4wtK2E=",
    btnText1: "Hire Now",
    btnText2: "Register as a Technician",
    heroText: <h1>Need Trusted <span>Technician</span> For Your<br /><span>Project?</span></h1>
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80",
    btnText1: "Buy Now",
    btnText2: "Sell Now",
    heroText: <h1>From <span>Douala</span> to <span>Lagos</span> to <span>Capetown</span> Buy or Sell your Properties</h1>
  },
]
const cardDetails=[
  {
    id: 1,
    icon: <FaUser style={{fontSize: 30, color: "white"}} />,
    text: "Buy a Property",
    paragraph: "Buy your dream properties at affordable prices in your dream location.",
    link: <button>Learn More <FaArrowRight style={{marginLeft: 20}}/></button>,
  },
  {
    id: 2,
    icon: <FaUser style={{fontSize: 30, color: "white"}}/>,
    text: "Sell a Property",
    paragraph: "Auction out your properties at good price rate to buyers around the world",
    link: <button>Learn More <FaArrowRight style={{marginLeft: 20}}  /></button>,
  },
  {
    id: 3,
    icon: <FaUser style={{fontSize: 30, color: "white"}} />,
    text: "Become an Agent",
    paragraph: "Land yourself a side hustle as an intermidiary between buyers and sellers of properties.",
    link: <button>Learn More <FaArrowRight style={{marginLeft: 20}} /></button>,
  },
  {
    id: 4,
    icon: <FaUser style={{fontSize: 30, color: "white"}} />,
    text: "Request a Technical Service",
    paragraph: "Get access to quality and affordable technical services",
    link: <button>Learn More <FaArrowRight style={{marginLeft: 20}} /></button>,
  },
]
const testCard=[
  {
    id: 1,
    imageSrc: "http://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg",
    name: "Ashley Smith",
    phone:"09054656579",
    years:"5years Experience",
  },
  {
    id: 2,
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU",
    name: "Kelvin Shaun",
    phone:"09054656579",
    years:"10years Experience",
  },
  {
    id: 3,
    imageSrc: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?b=1&s=170667a&w=0&k=20&c=TXCiY7rYEvIBd6ibj2bE-VbJu0rRGy3MlHwxt2LHt9w=",
    name: "Bryan Book",
    phone:"09054656579",
    years:"12years Experience",
  },{
    id: 4,
    imageSrc: "https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.490.medium.jpg/1594668408164.jpg",
    name: "John Doe",
    phone:"09054656579",
    years:"8years Experience",
  }
]
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Service cardDetails={cardDetails} />
      <Booking />
      <Testimony testCard={testCard}/>
      <Footer />
    </>
  );
}

export default App;
