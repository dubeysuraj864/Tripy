import Hero2 from "../images/hero2.png";

function About() {
  return (
    <>
      <div className="Contact  sm:flex sm:items-center p-10 sm:justify-center">
        <div className="left  sm:ml-auto sm:mr-auto">
          <img
            src={Hero2}
            className="my-10"
            width={400}
            alt=""
          />
        
        </div>
        <div className="right sm:ml-auto sm:mr-auto">
          <div className="text-pink-600 pb-2">ABOUT US</div>
          <div className="sm:text-5xl text-2xl font-bold pb-5">
            Our tour plan is to <br /> fulfil your dream wish
          </div>
          <div className="text-sm sm:text-md">
            Understand to achieve anything requires faith and <br /> belief in
            yourself, vision, hard work, determination, <br /> and dedication.
          </div>
          <div className="sm:flex text-center sm:text-left">
            <div className="pr-5 pt-5">
              <div className="sm:text-4xl text-6xl text-pink-600 font-bold">15</div>
              <div className="text-sm text-gray-500">
                Year of <br /> Experience
              </div>
            </div>
            <div className="pr-5 pt-5">
              <div className="sm:text-4xl text-6xl text-pink-600 font-bold">1k</div>
              <div className="text-sm text-gray-500">
                Successful
                <br /> Trips
              </div>
            </div>
            <div className="pr-5 pt-5">
              <div className="sm:text-4xl text-6xl text-pink-600 font-bold">20k</div>
              <div className="text-sm text-gray-500">
                Happy
                <br /> Customer
              </div>
            </div>
            <div className="pr-5 pt-5">
              <div className="sm:text-4xl text-6xl text-pink-600 font-bold">4.9</div>
              <div className="text-sm text-gray-500">
                Overall
                <br /> Ratings
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
