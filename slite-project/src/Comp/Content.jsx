import { useState } from 'react'
import Frame from '../assets/contframe.svg'
import Projects from '../assets/ones.png'
import Wiki from '../assets/projects.png'
import Processes from '../assets/three.png'
import Onboarding from '../assets/four.png'
import Meeting from '../assets/five.png'
import Team from '../assets/six.png'
import Ones from '../assets/seven.png'
import User from '../assets/eight.png'
import More from '../assets/nine.png'








const Content = () => {
    const [selectedItem, setSelectedItem] = useState('Wiki');

    const handleItemClick = (item) => {
        setSelectedItem(item)
    };

    const itemToImage = {
        Wiki: Wiki,
        Projects: Projects,
        Processes: Processes,
        Onboarding: Onboarding,
        Meetings: Meeting,
        Team: Team,
        Ones: Ones,
        User: User,
        More: More
    };

    const itemList = Object.keys(itemToImage);


  return (

    <div className="w-full   flex-col justify-between py-5 px-[10%]">
    <div className="w-full h-px " />
    <div className="w-full gap-4  inline-flex">
      <div className="w-40   flex-col  items-start flex">
        <div className="gap-4">
          {itemList.map((item) => (
            <div
              key={item}
              className={`cursor-pointer mb-1 p-4 bg-blue-200 hover:bg-white rounded shadow transition-colors duration-300 ${
                selectedItem === item ? 'bg-blue-200' : ''
              }`}
              onClick={() => handleItemClick(item)} // Change on click
              onMouseEnter={() => handleItemClick(item)} // Highlight on hover
            >
              <b className=" text-zinc-800 text-sm font-medium leading-snug">{item}</b>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full  relative">
        <img
          className="w-[100%] h-auto max-h-[100%] absolute  "
          src={Frame}
          alt="Laptop Frame"
        />
        <img
          className="w-[100%] h-auto max-h-[100%] rounded-xl  top-[10%]   left-[10%]"
          src={itemToImage[selectedItem]}
          alt={`Image for ${selectedItem}`}
        />
      </div>
    </div>
  </div>

  )
}

export default Content
