import { useState } from 'react'
import Frame from '../assets/contframe.svg'
import Wiki from '../assets/ones.png'
import Projects from '../assets/two.png'
import Processes from '../assets/three.png'
import Onboarding from '../assets/four.png'
import Meeting from '../assets/five.png'
import Team from '../assets/six.png'
import Ones from '../assets/seven.png'
import User from '../assets/eight.png'
import More from '../assets/nine.png'








const Content = () => {
    const [selectedItem, setSelectedItem] = useState('Onboarding');

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
    <div className="w-screen justify-center items-center inline-flex">
    <div className="w-96 h-96 relative flex-col justify-start items-start flex">
      <div className="w-96 h-px relative" />
      <div className="w-96 justify-center items-start gap-4 inline-flex">
        <div className="w-40 h-96 relative flex-col justify-start items-start flex">
          <div className="w-40 h-96 relative">
            {itemList.map((item) => (
              <div
                key={item}
                className={`w-36 h-14 pl-5 pr-24 py-4 left-[4px] top-[2px] absolute bg-white rounded shadow justify-start items-center inline-flex 
                ${ selectedItem === item ? 'bg-blue-200' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                <b className="w-8 h-5 text-zinc-800 text-sm font-medium leading-snug">{item}</b>
              </div>
            ))}
          </div>
        </div>
        <div className="w-96 h-96 relative flex-col justify-start items-start flex">
          <img
            className="w-96 h-96"
            src={itemToImage[selectedItem]}
            alt={`Image for ${selectedItem}`}
          />
          <div className="w-96 h-96 bg-white" />
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Content
