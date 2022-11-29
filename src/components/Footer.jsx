import Logo from "../images/Logo.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Youtube from "../images/youtube.png";
import SendButton from "../images/Send-button.png";
function Footer() {
    return ( <>
    <div className="footer sm:flex sm:justify-around py-10">
        <div>
            <div>
            <img className=" sm:mx-0" src={Logo} width={80} alt="" />
            </div>
            <div className="address my-2 text-sm font-light">
            4517 Washington Ave. <br /> Manchester, Kentucky 39495
            </div>
            <div className="social flex">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} width={20} alt="" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} width={20} alt="" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src={Youtube} width={20} alt="" />
                </a>
            </div>
        </div>
        <div>
            <div className="font-bold text-sm">
                About
            </div>
            <div className="font-light text-sm">
                About us 
            </div>
            <div className="font-light text-sm">
               Feature
            </div>
            <div className="font-light text-sm">
                News 
            </div>
            <div className="font-light text-sm">
                Plans
            </div>
        </div>
        <div>
        <div className="font-bold text-sm">
                Company
            </div>
            <div className="font-light text-sm">
               Why Tripy
            </div>
            <div className="font-light text-sm">
               Partners with us
            </div>
            <div className="font-light text-sm">
                FAQ 
            </div>
            <div className="font-light text-sm">
                Blog
            </div>
        </div>
        <div>
        <div className="font-bold text-sm">
                Support
            </div>
            <div className="font-light text-sm">
                Account
            </div>
            <div className="font-light text-sm">
               Support Center
            </div>
            <div className="font-light text-sm">
                Feedback 
            </div>
            <div className="font-light text-sm">
                Contact us
            </div>
        </div>
        <div>
        <div className="font-bold text-sm">
                Newsletter
            </div>
            <div className="font-light text-sm w-2/3 my-2">
            Subscribe our newsletter and get exciting offers
            </div>
            <div className="font-light text-sm flex items-center ">
               <input type="text" placeholder="Enter your email address" className="mr-2 rounded-xl px-4 py-1" /><button><img src={SendButton} width={30} alt="" /></button>
            </div>
          
        </div>
    </div>
    </> );
}

export default Footer;