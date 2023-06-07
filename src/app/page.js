import Image from 'next/image'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import('./components/hero'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
       <section className=' bg-red-400 min-h-screen'>
	  <DynamicHero />;     

       </section>
          
   
    </main>
  )
}
