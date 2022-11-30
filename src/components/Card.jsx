import Star from "../images/magic-star.png";

function Card(props) {
  return (
    <>
      <div className="main w-64 mx-2 my-2 rounded-t-xl">
        <div className="top">
          <div>
            <img
              src={props.image}
              className="rounded-t-xl sm:w-full sm:h-64 object-cover  w-full h-64"
              alt=""
            />
          </div>
        </div>
        <div className="bottom w-full bg-white rounded-b-xl p-3 ">
          <div className="title font-bold text-sm mb-1 ">{props.title}</div>
          <div className="location-name text-sm mb-1">{props.location}</div>
          <div className="ratings flex mb-2">
            <img src={Star} width={20} height={20} alt="" /> {props.ratings}
          </div>
          <div className="price text-pink-600 font-bold text-xl">
            ${props.price}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
