import { arrowRight } from '../../assets/icons'

const Hero = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collections</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>
          <span>Shoes</span>
        </h1>
        <p>Discover stylish Nike arrival, quality</p>
        <p>comfort, and innovation for your active life</p>
        <button className="btn-primary">
          Shop Now
          <img src={arrowRight} className="ml-2 h-5 w-5 rounded-full" />
        </button>
        <div className="flex justify-start items-start flex-wrap mt-20 gap-16" />
      </div>
    </div>
  )
}

export default Hero
