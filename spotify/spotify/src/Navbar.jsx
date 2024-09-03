import { MdOutlineHome } from "react-icons/md";
import { SlSocialSpotify } from "react-icons/sl";
import Searchbar from "./searchbar";

const Navbar = () => {
    return (
        <>
            <div className="text-white flex gap-10 flex-g">  {/* Added gap-4 for spacing */}
                <ul className="text-white flex items-center gap-6 mt-4">  {/* Increased gap and aligned items center */}
                    <li className="text-[50px]"> <SlSocialSpotify /></li>
                    <li> 
                        <div className="w-[50px] h-[50px] rounded-full bg-[#1f1f1f] ml-60 border-white flex items-center justify-center">
                            <MdOutlineHome className="text-[50px] border-white" />  {/* Adjusted icon size to fit better within the circle */}
                        </div>
                    </li>
                    <li><Searchbar /></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
