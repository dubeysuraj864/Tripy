import Tours from "./Tours.jsx";

function Price() {
    return ( <>
   


    <div className="mt-10">
        <div className="sm:text-4xl text-2xl text-center ml-auto mr-auto sm:w-1/2 sm:text-center font-bold" data-aos="fade-up">
          We can do anything we want to if we stick to it long enough.
        </div>
        <div className="text-sm ml-auto mr-auto sm:w-1/2 sm:text-center font-light my-5 text-center"data-aos="fade-up">
          Do what you can, with what you have, where you are.
        </div>
        <div className=" bg-pink-600 w-fit text-white rounded-full px-4 py-3 ml-auto mr-auto  font-light animate-bounce" to="/" data-aos="fade-up">
          See all tours
        </div>
        <div>
          <Tours />
        </div>
      </div>
    </> );
}

export default Price;