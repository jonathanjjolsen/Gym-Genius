import { Link } from 'react-router-dom';
import homeHero from '../images/home-hero.jpg';
import './homepage.css'

const Home = () => {
  return (
    <section className='bg-dark '>
      <div>
        <h2 className='text-light text-center fs-1 hero'>Insanely Smart Workouts</h2>
        <img src={homeHero} alt="man working out" className='w-100 h-75' />
      </div>
      <div className='container mt-4 pb-4'>
        <div className='row'>
          <div className='col-10  mx-auto text-light bg-black rounded'>
            <h1 className='py-4 fs-1 text-center'>What is Gym Genius?</h1>
            <div className='px-5'>
              <p className='text-light fs-3'>Introducing Gym Genius, the revolutionary exercise app that combines the convenience of saving workouts with the fun of creating playlists!</p>
              <p className='text-light fs-3'>Designed for fitness enthusiasts and gym-goers alike, Gym Genius allows you to curate your fitness routines just like you would your favorite songs.</p>
              <p className='text-light fs-3'>With an intuitive interface, simply browse through a wide selection of exercises from various categories including cardio, upper body, and more. Say goodbye to dull routines and embrace the genius of tailored workouts with Gym Genius!</p>
            </div>
            <div className='text-center'>
              <Link to={'/'} className='btn btn-light rounded-pill py-3 px-5 fs-3 fw-bold mt-3 mb-5'>Join Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
