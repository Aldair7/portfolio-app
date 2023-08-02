"use client";
import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

import Team from './team.jsx'
import Para from './parallaxHero.jsx'

export default function hero() {
  return (
    <div className="bg-sunglo">
      	
    	<Para />
	<Team />
    </div>
  );
}
