import People from "../images/people1.png";
import Star from "../images/magic-star.png";
import Quote from "../images/quote.png";

function RatingCard() {
  return <>
  <div className="main relative text-center w-96 bg-white p-5 rounded-xl my-10 mx-2">
    <img src={Quote} className="absolute -top-5 right-10" width={40} alt="" />
    <div className="top-image flex justify-center mb-2 mt-5">
<img src={People} width={100} alt="" />
    </div>
    <div className="bottom">
<div className="name font-bold">Eleanor Pena</div>
<div className="prof font-light text-sm">UI/UX Designer</div>
<div className="ratings flex justify-center mb-5">
    <img src={Star} width={20} alt="" />
    <img src={Star} width={20} alt="" />
    <img src={Star} width={20} alt="" />
    <img src={Star} width={20} alt="" />
    <img src={Star} width={20} alt="" />
</div>
<div className="para text-sm font-light text-gray-500 mb-5">Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers.</div>
    </div>
  </div>
  </>;
}

export default RatingCard;
