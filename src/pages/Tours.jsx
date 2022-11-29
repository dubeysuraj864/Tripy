import SmallCard from "../components/SmallCard";

function Tours() {
    return ( <>
    <div className=" ml-auto m-0 p-0 mr-auto w-full sm:flex sm:justify-center">
        <div className="">
        <SmallCard/>
        </div>
        <div className="py-10">
        <SmallCard/>
        </div>
        <div className="py-10">
        <SmallCard />
        </div>
        <div>
        <SmallCard/>
        </div>
    </div>
    </> );
}

export default Tours;