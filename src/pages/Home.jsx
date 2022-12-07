import About from "./About";
import Hero from "../images/hero.png";
import SearchBar from "../components/SearchBar";
import Services from "./Services";
import Price from "./Price";
import AOS from 'aos';
import 'aos/dist/aos.css';



function Home() {
  AOS.init()
  return (
    <>
      <div className="Home p-10 sm:flex sm:items-center sm:justify-center sm:mr-10 sm:ml-10">
      <div className="right sm:hidden inline-block ml-auto mr-auto my-10"  data-aos="fade-right">
          <img
            src={Hero}
            className=" py-0 ml-auto mr-auto "
            width={400}
            alt=""
            data-aos="fade-left"
          />
        </div>
        <div className="left ml-auto mr-auto sm:w-2/3" data-aos="fade-right">
          <div className="text-4xl sm:text-6xl font-bold py-5 sm:w-3/4">
            Dare to live the life you've always <br /> wanted.
          </div>
          <div>
            Life is short and the world is wide. So, better <br /> get started.
          </div>

          <div>
            <SearchBar />
          </div>
        </div>
        <div className="right hidden sm:inline-block ml-auto mr-auto ">
          <img
            src={Hero}
            className=" py-0 ml-auto mr-auto "
            width={300}
            alt=""
            data-aos="fade-left"
          />
        </div>
      </div>
      <About />
      <Services />
      <Price/>
    </>
  );
}

export default Home;
