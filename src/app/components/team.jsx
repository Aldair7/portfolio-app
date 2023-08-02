import React, {useState} from 'react'
import {motion} from 'framer-motion'

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'




const Cards = () => {
 const [expandedIndex, setExpandedIndex] = useState(null);
   const handleCardClick = (index) => {
      setExpandedIndex(index === expandedIndex ? -1 : index)
   };

    const cardVariants = {
      expanded:  {
	width: "600px"
      },
      collapsed: {
	width: "400px"
      },
      
    }
  const cardImages = ["img1.jpg", "img2.jpg", "img3.jpg"]

   const cardTitle = [
    'Developer',
    'UI Designer',
    'Artist?',
  ]

  const cardDescription = [
    'Aldair Ramos',
    'Aldair Ramos',
    'Aldair Ramos',
  ]


  return (
    <section className="py-16 pb-[300px] bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
	<h1 className="text-3xl font-extrabold text-white">
	  Meet the Team!
	</h1>
	<p className="mt-4 text-xl text-gray-300">
	  Check out what they say!
	</p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
	{[0, 1, 2].map((index) => (
	    <motion.div
	      key={index}
	      className={`card cursor-pointer h-[600px] bg-cover bg-center rounded-[10px] ${index === expandedIndex ? 'expanded': ''}`}
	      variants={cardVariants}
	      initial="collapsed"
	      animate={index === expandedIndex ? 'expanded': 'collapsed'}
	      transition= {{duration: 0.5}}
	      onClick={() => handleCardClick(index)}
	      style={{
		backgroundImage: `url(${cardImages[index]})`,
	      }}
	    >
	      <div className="card-content h-full flex flex-col justify-end">
		<div className="card-footer rounded-b-[10px] bg-gray-800 bg-opacity-75 min-h-[200px] flex flex-col items-center justify-center">
		  <h2 className="text-xl font-semibold text-white text-center">{cardTitle[index]}</h2>
		  {index === expandedIndex && (
		    <div>
		  <p className="mt-2 text-gray-300 text-center">{cardDescription[index]}</p>
		     <p className=" text-gray-300 text-center">{cardDescription[index]}</p>
		    </div>
		  )
		  }
		</div>
	      </div>
	    </motion.div>
	))
	}
      </div>
      
    </section>

  )
}

export default Cards;
