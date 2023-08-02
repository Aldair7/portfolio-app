import React, {useState} from 'react'
import {motion} from 'framer-motion'




export default Cards Team() {

   const [expandedIndex, setExpandedIndex] = useState(null);
   const handleCardClick = (index) => {
      setExpandedIndex(index === expandedIndex ? -1 : index)
   }

    const cardVariants = {
      expanded: {
	width: "400px"
      },
      collapsed: {
	width: "200px"
      },
      
    }
  const cardImages = [img1, img2, img3]

  const cardDescription = [
    'Description 1',
    'Description 2',
    'Description 3',
  ]


  return (
    <section className="py-16 pb-[300px] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<h1 className=" text-3xl font-extrabold text-white">
	  Meet the Team!
	</h1>
	<p className="mt-4 text-xl text-gray-300">
	  Check out what they say!
	</p>
      </div>
      <div clasName="mt-(12 flex flex-col md:flex-row justify-center items-center gap-5">
	{[0, 1, 2].map((index) => (
	    <motion.div
	      key={index}
	      className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandableIndex ? 'expanded': ''}`}
	      variants={cardVariants}
	      initials="collapsed"
	      animate={index === expandedIndex ? 'expanded': 'collapded'}
	      transition=
	    >
	    </motion.div>
	))
	}
      </div>
      
    </section>

  )
}
