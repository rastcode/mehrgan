import Category from "./Category";
import "./Intro.css"
import Banner from "./Banner";

const Intro =()=>{

    return(
       <div className="intro-container">
           <div >
               <Category/>
           </div>
           <div className="banner-container">
              <Banner/>
              <Banner/>
           </div>
       </div>
    );


}
export default Intro
