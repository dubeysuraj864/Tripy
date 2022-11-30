import RatingCard from "../components/RatingCard";
import Left from "../images/Arrow-left.png";
import Right from "../images/Arrow-right.png";

function Testimonials() {

    const moveLeft = () => {
        document.getElementById("testimonials-content").scrollLeft-= 400;
    }
    const moveRight = () => {
        document.getElementById("testimonials-content").scrollLeft += 400;
    }

  return (
    < div className="relative">

<div className="text-center mt-40">
    <div className="title title text-sm text-pink-600 font-bold">
    TESTIMONIALS
    </div>
    <div className="quote sm:text-6xl text-2xl font-bold mt-5  ">
    Satisfied travellers around <br /> the world
    </div>
</div>

         
      <div
        id="testimonials-content"
        className="relative main flex sm:flex my-0 overflow-auto ml-auto mr-auto sm:ml-28 sm:mr-28 scrollbar-hide scroll-smooth pl-3"
      >
   
        <div>
          <RatingCard />
        </div>
        <div>
          <RatingCard />
        </div>
        <div>
          <RatingCard />
        </div>
        <div>
          <RatingCard />
        </div>
        <div>
          <RatingCard />
        </div>
        <div>
          <RatingCard />
        </div>
      </div>
      <button>
            <img src={Left} onClick={moveLeft} className="transition-all hover:scale-125 hover:saturate-200 absolute left-20 top-1/2 mt-10" width={40} alt="" />
          </button>
 
     
          <button>
            <img src={Right} onClick={moveRight} className="transition-all hover:scale-125 hover:saturate-200 absolute right-20 top-1/2 mt-10" width={40} alt="" />
          </button>
    </div>
  );
}

export default Testimonials;
