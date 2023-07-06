import { Hero } from '../cmps/home-cmps/hero'
import { HomeDesc } from "../cmps/home-cmps/HomeDesc";
import { CallToAction } from "../cmps/home-cmps/CallToAction";

export function HomePage() {
  return (
    <section className='home'>
      <Hero />
      <HomeDesc/>
      <CallToAction/>
    </section>
  )
}
