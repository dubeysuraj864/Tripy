import Location from "../images/location.png";
import Divider from "../images/Divider.png";
import Calendar from "../images/calendar.png";
import Search from "../images/Search-button.png";

function SearchBar() {
  return (
    <>
      <div className="flex items-center bg-white w-fit px-4  sm:my-5 sm:rounded-full rounded-xl  sm:m-0 shadow-md my-10">
        <button className=" flex items-center sm:px-6">
          {" "}
          <img src={Location} width={25} alt="" />{" "}
          <div className="flex-col text-left ml-2">
            <select className="p-1 m-1 rounded bg-white " name="select">
              <option value="">Location</option>
              <option value="California">California</option>
              <option value="San-francisco">San Francisco</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Norway">Norway</option>
            </select>
            <div className="ml-1">California, US</div>
          </div>
        </button>
        <img
          src={Divider}
          className="ml-auto mr-auto hidden  "
          width={1}
          alt=""
        />
        <button className="flex items-center px-6 py-4">
          {" "}
          <img src={Calendar} width={25} alt="" />{" "}
          <div className="flex-col text-left ml-2">
            <select className="p-1 m-1 rounded bg-white "  name="select">
              <option value="">Date</option>
              <option>20 Jan 2023</option>
              <option>3 Fab 2023</option>
              <option>25 Apr 2023</option>
              <option>10 July 2023</option>
            </select>
            <div className="ml-1 ">25 Apr 2023</div>
          </div>
        </button>
        <button className=" justify-center w-full items-center hidden sm:inline-flex">
          {" "}
          <img
            src={Search}
            className="sm:ml-auto sm:mr-auto sm:p-2 sm:m-5"
            width={65}
            alt=""
          />{" "}
        </button>
      </div>
      <button className="flex justify-center w-full mt-4 items-center  sm:hidden ">
        {" "}
        <img
          src={Search}
          className="sm:ml-auto sm:mr-auto sm:p-2 sm:m-5"
          width={65}
          alt=""
        />{" "}
      </button>
    </>
  );
}

export default SearchBar;
