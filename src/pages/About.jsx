import Back from "../images/Back.png";
import Front from "../images/Front.png";

function About() {
  return (
    <>
      <div className="Contact ml-auto mr-auto sm:h-full sm:flex sm:items-center p-10 sm:justify-around">
        <div className="left relative sm:w-1/2">
          <img src={Back} className="sm:ml-44 sm:mb-14 ml-auto mr-auto"  width={300} alt="" />
          <img src={Front} className=" absolute bottom-0 sm:right-24 z-20" width={200} alt="" />
        </div>
        <div className="right sm:w-1/2">
            <div className="text-pink-600 pb-2">ABOUT US</div>
          <div className="text-5xl font-bold pb-5">
          Our tour plan is to <br /> fulfil your dream wish
          </div>
          <div>
          Understand to achieve anything requires faith and <br /> belief in yourself, vision, hard work, determination, <br /> and dedication.
          </div>
          <div className="sm:flex text-center sm:text-left">
            <div className="pr-5 pt-5">
                <div className="text-4xl text-pink-600 font-bold">15</div>
                <div className="text-sm text-gray-500">Year of <br /> Experience</div>
            </div>
            <div className="pr-5 pt-5">
                <div  className="text-4xl text-pink-600 font-bold">1k</div>
                <div className="text-sm text-gray-500">Successful<br /> Trips</div>
            </div>
            <div className="pr-5 pt-5">
                <div  className="text-4xl text-pink-600 font-bold">20k</div>
                <div className="text-sm text-gray-500">Happy<br /> Customer</div>
            </div>
            <div className="pr-5 pt-5">
                <div  className="text-4xl text-pink-600 font-bold">4.9</div>
                <div className="text-sm text-gray-500">Overall<br /> Ratings</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
