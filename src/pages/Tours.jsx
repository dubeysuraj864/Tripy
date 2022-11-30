import SmallCard from "../components/SmallCard";

function Tours() {
    return ( <>
    <div className=" ml-auto m-0 p-0 mr-auto w-full sm:flex sm:justify-center sm:pb-20">
        <div className="">
        <SmallCard 
        image={"https://images.unsplash.com/photo-1605617697069-959ec9dfc9de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1850&q=80"}
        location={"New York, US"}
        price={500}
        />
        </div>
        <div className="sm:pt-10 mx-5">
        <SmallCard  className=""
        image={" https://images.unsplash.com/photo-1489657780376-e0d8630c4bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"}
        location={"Switzerland, EU"}
        price={400}
        />
        </div>
        <div className="sm:pt-10 mx-5">
        <SmallCard 
        image={" https://images.unsplash.com/photo-1547637076-3e0fefae5d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}
        location={"Thailand, Singapore"}
        price={380}
        />
        </div>
        <div className="">
        <SmallCard 
        image={" https://images.unsplash.com/photo-1518983835933-984f33c641e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80"}
        location={"Babia Góra, EU"}
        price={700}
        />
        </div>
       
           
       
    </div>
    </> );
}

export default Tours;