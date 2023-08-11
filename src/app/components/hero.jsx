"use client";
import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

import Cards from './team.jsx'
import Para from './parallaxHero.jsx'
import Skills from './skills.jsx'
import Projects from './projects.jsx'

export default function hero() {
  return (
    <div className="bg-sunglo">
      	
    	<Para />
	<Cards />
	<Skills />
	<Projects />
    </div>
  );
}
