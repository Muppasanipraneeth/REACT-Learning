import { CiSearch } from "react-icons/ci";

const Searchbar=()=>{
  return (<>
  <div className="border border-gray-400 bg-[#1f1f1f ] w-[500px] h-[50px] text-white rounded-3xl flex justify-between">
    <CiSearch  className="text-[40px] p-2"/> <div className="p-2" > What do you want to play?</div> </div>
  </>)
}
export default Searchbar;