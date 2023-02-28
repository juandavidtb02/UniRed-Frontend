import React from "react";
import Navbar from "../home/Navbar";
import Card from "../home/Card";
import NewDiscussion from "../discussions/NewDiscussion";
import data from "../../../data";
export default function Index(){
    const [dataCards,setDataCards] = React.useState(data)

    return(
        <>
            <Navbar/>
            <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 border-r sm:border-slate-700 mt-5 flex-col sm:flex-row">
                    <h2 className="text-5xl text-white font-thin ml-3">Discusiones</h2>
                    {dataCards.length > 1 ? (
                            dataCards.map((item,index)=>(
                                    <Card data={item} />   
                            ))
                    ) : (<p className="text-white ml-3 mt-3">No hay discusiones por el momento</p>)}
                    
                </div>
                <div className="w-full sm:w-1/2 mt-5 flex-col sm:flex-row">
                    <h2 className="text-5xl text-white font-thin ml-3">Iniciar una discusión</h2>
                    <NewDiscussion/>
                </div>
            </div>





        </>
    )
}