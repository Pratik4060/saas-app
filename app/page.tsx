import React from 'react'
import {Button} from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/CompanionsList'
import { recentSessions } from '@/constants'
const Page = () => {
  return (
    <main>  
     <h1 className='text-2xl underline'> Popular Companions</h1>
       <section className='home-section'>
        <CompanionCard 
         id="123"
         name="Neura the branly"
         subject="AI Companion"
         duration= {30}
         color="blue"
          topic="Learn AI with Neura"

        />
        <CompanionCard
          id = "456"
          name="Techie the Tutor"
          subject="Tech"
          duration={45}
          color="green"
          topic="Master Web Development"
        />
        <CompanionCard 
         id = "789"
          name="Math Wizard"
          subject="Math"
          duration={60}
          color="yellow"
          topic="Conquer Calculus"
          
         />
       </section>

       <section className='home-section'>
     <CompanionsList
        title="Recently Completed Sessions"
        companions={recentSessions}
     />
        <CTA/>         
       </section>

  </main>
 
  )
}

export default Page