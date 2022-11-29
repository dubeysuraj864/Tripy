import SmallCard from "../components/SmallCard";

function Tours() {
    return ( <>
    <div className="sm:flex sm:justify-center">
        <div>
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