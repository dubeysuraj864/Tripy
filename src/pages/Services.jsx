import Left from "../images/Arrow-left.png";
import Right from "../images/Arrow-right.png";
import Card from "../components/Card";
import Testimonials from "../components/Testimonials";
import Image1 from "../images/card-image1.png";
import Image2 from "../images/card-image2.png";
import Image3 from "../images/card-image3.png";



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
        <div className="sm:flex flex sm:justify-between sm:pr-20 pl-8 pr-5">
          <div>
            <div className="title text-sm text-pink-600 font-bold">
              TOUR PACKAGES
            </div>
            <div className="sm:text-4xl font-bold text-2xl w-fit pr-10">
              The amazing places around the world
            </div>
          </div>
          <div className="flex">
            <button id="scroll-left" onClick={scrollLeft} className="mr-4">
              <img
                src={Left}
                className=" transition-all hover:scale-125 hover:saturate-200 sm:w-12 w-20"
                alt=""
              />
            </button>
            <button id="scroll-right" onClick={scrollRight}>
              <img
                src={Right}
                className=" transition-all hover:scale-125 hover:saturate-200 sm:w-12 w-20"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div className="services w-full pt-10 pb-10">
        <div
          id="content"
          className=" flex overflow-x-auto sm:ml-20 ml-5 sm:mr-10 scrollbar-hide bar-none transition-all duration-150 scroll-smooth"
        >
          <div>
            <Card
              image={Image1}
              title={"Fall in love among the winding streets and snow-covered"}
              location={"Prague, Czechia"}
              ratings={4.9}
              price={200}
            />
          </div>
          <div>
            <Card
              image={"https://images.unsplash.com/photo-1531363291174-5980f7af8bae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
              title={"History is not about the past but a map of the past"}
              location={"Beijing, Czechia"}
              ratings={4.5}
              price={250}
            />
         
          </div>
          <div>
            <Card
              image={Image2}
              title={"The unique character as a symbol of taste and ostentation"}
              location={"İstanbul, Turkey"}
              ratings={4.8}
              price={180}
            />
         
          </div>
          <div>
            <Card
              image={Image3}
              title={"You don't want to pitch a tent and live inside the Louvre"}
              location={"Paris, France"}
              ratings={4.7}
              price={300}
            />
         
          </div>
          <div>
            <Card
              image={"https://images.unsplash.com/photo-1541300613939-71366b37c92e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1505&q=80"}
              title={"Fall in love among the winding streets and snow-covered"}
              location={"Prague, Czechia"}
              ratings={4.9}
              price={200}
            />
         
          </div>
       
        </div>
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
}

export default Services;
