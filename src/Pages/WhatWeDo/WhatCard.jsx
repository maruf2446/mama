import { AiOutlineUser } from "react-icons/ai";

const WhatCard = () => {
    return (
        <div className="flex gap-4 px-20">
            <div>
                <a href="#" className="card card-compact w-96 shadow-xl py-16 px-8 hover:bg-sky-700">
                    <p className="text-2xl"><AiOutlineUser></AiOutlineUser></p>
                    <p className="py-5 font-semibold text-2xl">Consult</p>
                    <p className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maxime porro quos, deleniti repudiandae fugiat cum eius vitae. Cupiditate, minus.</p>
                </a>
            </div>
            <div>
                <a href="#" className="card card-compact w-96  shadow-xl py-16 px-8 hover:bg-sky-700 ">
                    <p className="text-2xl"><AiOutlineUser></AiOutlineUser></p>
                    <p className="py-5 font-semibold text-2xl">Implement</p>
                    <p className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maxime porro quos, deleniti repudiandae fugiat cum eius vitae. Cupiditate, minus.</p>
                </a>
            </div>
            <div>
                <a href="#" className="card card-compact w-96  shadow-xl py-16 px-8 hover:bg-sky-700 ">
                    <p className="text-2xl"><AiOutlineUser></AiOutlineUser></p>
                    <p className="py-5 font-semibold text-2xl">Operate</p>
                    <p className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maxime porro quos, deleniti repudiandae fugiat cum eius vitae. Cupiditate, minus.</p>
                </a>
            </div>
        </div>
    );
};

export default WhatCard;