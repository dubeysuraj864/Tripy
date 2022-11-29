import Left from "../images/Arrow-left.png";
import Right from "../images/Arrow-right.png";
import Card from "../components/Card";
import Testimonials from "../components/Testimonials";
import Tours from "./Tours";

function Services() {
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };

  return (
    <div className="my-20 pb-20">
      <div className="sm:ml-24 ml-auto mr-auto">
        <div className="sm:flex sm:justify-between sm:pr-20 ">
          <div>
            <div className="title text-sm text-pink-600 font-bold">
              TOUR PACKAGES
            </div>
            <div className="text-4xl font-bold">
              The amazing places around the world
            </div>
          </div>
          <div>
            <button id="scroll-left" onClick={scrollLeft} className="mr-4">
              <img
                src={Left}
                className=" transition-all hover:scale-125 hover:saturate-200"
                width={50}
                alt=""
              />
            </button>
            <button id="scroll-right" onClick={scrollRight}>
              <img
                src={Right}
                className=" transition-all hover:scale-125 hover:saturate-200"
                width={50}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div className="services w-full pt-10 pb-10">
        <div
          id="content"
          className=" sm:flex overflow-x-auto ml-20 mr-10 scrollbar-hide bar-none transition-all duration-150 scroll-smooth"
        >
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>
        </div>
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <div className="text-4xl ml-auto mr-auto sm:w-1/2 sm:text-center font-bold">
          We can do anything we want to if we stick to it long enough.
        </div>
        <div className="text-sm ml-auto mr-auto sm:w-1/2 sm:text-center font-light my-5">
          Do what you can, with what you have, where you are.
        </div>
        <div className=" bg-pink-600 w-fit text-white rounded-full px-4 py-3 ml-auto mr-auto  font-light" to="/">
          See all tours
        </div>
        <div>
          <Tours />
        </div>
      </div>
    </div>
  );
}

export default Services;
