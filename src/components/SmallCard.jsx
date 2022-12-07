

function SmallCard(props) {
    return ( <>
     <div className="main sm:w-52 w-4/5 h-fit sm:mx-2 sm:my-2 mt-10 rounded-xl bg-white ml-auto mr-auto "  data-aos="zoom-out-left">
        <div className="top  p-2">
            <div>
                <img src={props.image} className="rounded-xl object-cover sm:w-52 sm:h-52"  alt="" />
            </div>
            
        </div>
        <div className="bottom w-full bg-white rounded-b-xl p-3">
         
            <div className="location-name text-sm font-bold mb-1">
           {props.location}
            </div>
        
            <div className="price text-pink-600 font-bold text-xl">
                ${props.price}
            </div>
        </div>
    </div>
    </> );
}

export default SmallCard;