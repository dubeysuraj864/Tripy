import Star from "../images/magic-star.png";
import Image1 from "../images/card-image1.png";

function Card() {
  return (
    <>
      <div className="main w-64 mx-2 my-2 rounded-t-xl">
        <div className="top">
          <div>
            <img src={Image1} className="rounded-t-xl" width={800} alt="" />
          </div>
        </div>
        <div className="bottom w-full bg-white rounded-b-xl p-3">
          <div className="title font-bold text-sm mb-1 ">
            Fall in love among the winding streets and snow-covered
          </div>
          <div className="location-name text-sm mb-1">Prague, Czechia</div>
          <div className="ratings flex mb-2">
            <img src={Star} width={20} height={20} alt="" /> 4.9
          </div>
          <div className="price text-pink-600 font-bold text-xl">$200</div>
        </div>
      </div>
    </>
  );
}

export default Card;
