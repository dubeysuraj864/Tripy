import About from "./About";
import Hero from "../images/hero.png";
import Location from "../images/location.png";
import Divider from "../images/Divider.png";
import Calendar from "../images/calendar.png";
import Search from "../images/Searchbutton.png";
import Services from "./Services";

function Home() {
  return (
    <>
      <div className="Home ml-auto mr-auto sm:flex sm:items-center p-10 sm:justify-around">
      <div className="right">
          <img src={Hero} className="ml-auto mr-auto py-5" width={300} alt="" />
        </div>
        <div className="left sm:w-1/2">
          <div className="text-6xl font-bold py-5">
            Dare to live the life you've always <br /> wanted.
          </div>
          <div>
            Life is short and the world is wide. So, better <br /> get started.
          </div>

          <div className="sm:flex items-center bg-white w-fit px-4 py-2 sm:my-5 sm:rounded-full rounded-xl ml-auto mr-auto sm:m-0 shadow-md">
            <button className=" flex items-center px-6">
              {" "}
              <img src={Location} width={25} alt="" /> <div className="flex-col text-left ml-2">
              <select name="select">
              <option value="">Location</option>
                <option value="California">California</option>
                <option value="San-francisco">San Francisco</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Norway">Norway</option>
                
              </select>
              <div className="ml-1">California, US</div>
              </div>
            </button>
            <img src={Divider} className="ml-auto mr-auto" width={1} alt="" />
            <button className="flex items-center px-6">
              {" "}
              <img src={Calendar} width={25} alt="" /> <div className="flex-col text-left ml-2">
              <select className="p-0" name="select">
              <option value="">Date</option>
                <option >20 Jan 2023</option>
                <option >3 Fab 2023</option>
                <option >25 Apr 2023</option>
                <option >10 July 2023</option>
                </select>
                <div className="ml-1">25 Apr 2023</div>
              </div>
            </button>
            <button className=" flex items-center ">
              {" "}
              <img src={Search} className="ml-auto mr-auto p-2 m-5" width={65} alt="" />{" "}
            </button>
          </div>
        </div>
       
      </div>
      <About/>
      <Services/>
    </>
  );
}

export default Home;
