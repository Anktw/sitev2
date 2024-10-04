import PortBtn from "./buttons/portbtn";
import HorizontalScroll from "./hrscroll";

export default function TopBtnsHome(){
    return(
        <div>
            <HorizontalScroll>
                <div className="flex gap-5 mx-4 md:mx-3 animate-fadeInLeft">
                <PortBtn/>

                </div> 
            </HorizontalScroll>
        </div>
    )
}