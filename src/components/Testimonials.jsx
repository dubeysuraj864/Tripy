import RatingCard from "../components/RatingCard";
import Left from "../images/Arrow-left.png";
import Right from "../images/Arrow-right.png";

function Testimonials() {
  const moveLeft = () => {
    document.getElementById("testimonials-content").scrollLeft -= 400;
  };
  const moveRight = () => {
    document.getElementById("testimonials-content").scrollLeft += 400;
  };

  return (
    <div className="relative">
      <div className="text-center mt-40" data-aos="zoom-in">
        <div className="title title text-sm text-pink-600 font-bold">
          TESTIMONIALS
        </div>
        <div className="quote sm:text-6xl text-2xl font-bold mt-5  ">
          Satisfied travellers around <br /> the world
        </div>
      </div>

      <div
        id="testimonials-content"
        className="relative main flex sm:flex my-0 overflow-auto ml-auto mr-auto sm:ml-28 sm:mr-28 scrollbar-hide scroll-smooth pl-3" data-aos="zoom-in-left"
      >
        <div>
          <RatingCard
            image={
              "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
            }
            name={"Theresa Webb"}
            prof={"UI/UX Designer"}
            para={
              "Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers."
            }
          />
        </div>
        <div>
          <RatingCard
            image={
              "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            }
            name={"Eleanor Pena"}
            prof={"Vlogger"}
            para={
              "In promotion and advertising, a testimonial or show consists of a person's written statement extolling the virtue of a product."
            }
          />
        </div>
        <div>
          <RatingCard
            image={
              "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            }
            name={"Annette Black"}
            prof={"Doctor"}
            para={
              "Testimonials work because they aren''t strong sales pitches, they come across in an unbiased voice and establish trust."
            }
          />
        </div>
        <div>
          <RatingCard
            image={
              "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            }
            name={"César Rincón"}
            prof={"UI/UX Designer"}
            para={
              "Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers."
            }
          />
        </div>
        <div>
          <RatingCard
            image={
              "https://images.unsplash.com/photo-1557053908-4793c484d06f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            }
            name={"Olena Sergienko"}
            prof={"Vlogger"}
            para={
              "In promotion and advertising, a testimonial or show consists of a person's written statement extolling the virtue of a product."
            }
          />
        </div>
        <div>
          <RatingCard
            image={
              "https://images.unsplash.com/photo-1591877813825-e276030f6ed8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            }
            name={"Dima DallAcqua "}
            prof={"Doctor"}
            para={
              "Testimonials work because they aren''t strong sales pitches, they come across in an unbiased voice and establish trust."
            }
          />
        </div>
      </div>
      <button>
        <img
          src={Left}
          onClick={moveLeft}
          className="transition-all hover:scale-125 hover:saturate-200 absolute left-20 top-1/2 mt-10"
          width={40}
          alt=""
        />
      </button>

      <button>
        <img
          src={Right}
          onClick={moveRight}
          className=" hover:scale-125 hover:saturate-200 absolute right-20 top-1/2 mt-10"
          width={40}
          alt=""
        />
      </button>
    </div>
  );
}

export default Testimonials;
