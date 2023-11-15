import { AiOutlineTeam,AiOutlineClockCircle,AiTwotonePhone,AiTwotoneTool } from "react-icons/ai";
import { BsFillPatchCheckFill,BsFillHouseXFill } from "react-icons/bs";

const Chooseus = () => {
    
    return (
        <div>
           <div className="flex justify-center mb-10">
             <div >
                <p className="text-orange-500 mb-2 ml-[300px]">Core Features</p>
                <h2 className="text-3xl font-bold mb-2 ml-[250px]">Why Choose Us</h2>
                <p className="w-[717px] h-[60px] ">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
              </div>
           </div>

            <div className="flex justify-center">
            <div className="flex gap-6"> 
                <div className="flex">
                <AiOutlineTeam className="mt-1 "></AiOutlineTeam>
                    <p className="font-bold">Expert Team</p>
                </div>
                <div className="flex">
                    <AiOutlineClockCircle className="mt-1"></AiOutlineClockCircle>
                    <p className="font-bold">Timely Delivery</p>
                </div>
                <div className="flex">
                    <AiTwotonePhone className="mt-1"></AiTwotonePhone>
                    <p className="font-bold">24/7 Support</p>
                </div>
                <div className="flex">
                <AiTwotoneTool  className="mt-1"></AiTwotoneTool>
                    <p className="font-bold">Best Equipment</p>
                </div>
                <div className="flex">
                    <BsFillPatchCheckFill className="mt-1"></BsFillPatchCheckFill>
                    <p className="font-bold">100% Guranty</p>
                </div>
                <div className="flex">
                    <BsFillHouseXFill className="mt-1"></BsFillHouseXFill>
                    <p className="font-bold">Timely Delivery</p>
                </div>

            </div>
            </div>
            
        </div>
    );
};

export default Chooseus;