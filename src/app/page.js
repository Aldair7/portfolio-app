import Image from 'next/image'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import dynamic from 'next/dynamic';

const DynamicNav = dynamic(() => import('./components/nav'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
       <section className=' bg-red-400 min-h-screen'>
	  <DynamicNav />;     

       </section>
          
   
    </main>
  )
}
