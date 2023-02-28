import React from "react";
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'
export default function Card({data}){
    return(
        <>
        <div className="max-w-sm w-full lg:max-w-md lg:flex sm:ml-3 mx-auto mt-3">
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t rounded-lg lg:border-gray-400 bg-slate-700 p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-white flex items-center">
                        <AiOutlineQuestionCircle className="mr-1 w-4 h-4"/>
                        Sin resolver
                    </p>
                    <div className="text-white font-bold text-xl mb-2">{data.title}</div>
                    <p className="text-white text-base">{data.description}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 object-cover rounded-full mr-4 cursor-pointer" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
                    </div>
                    <div className="flex-grow">
                        <p className="text-white leading-none">{data.author}</p>
                        <p className="text-white">{data.date}</p>
                    </div>
                    <div className="ml-4">
                        <Link to={`/discussion/${data.id}`}>
                            <button className="px-5 py-2 bg-gray-400 hover:bg-gray-300 rounded-md"> 
                                Ver más
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
</div>

        </>
    )
}