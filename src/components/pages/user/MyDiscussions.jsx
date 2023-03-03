import React from "react";
import Navbar from "../../home/Navbar";
import useUserContext from "../../../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import data from "../../../../datosquemadosxd/data";
import Card from "../../discussions/Card";
import NewDiscussion from "../../discussions/NewDiscussion";
export default function MyDiscussions(){
    const {userLog,setUserLog} = useUserContext();
    const navigate = useNavigate();
    const [dataCards,setDataCards] = React.useState(data)

    React.useEffect(()=>{
        if(userLog === '' && localStorage.getItem('user') === null){
            navigate("/login");
        }
    },[userLog])


    return(
        <>
            <Navbar/>

            <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2  sm:border-slate-700 mt-5 flex-col sm:flex-row">
                    <h2 className="text-5xl text-white font-thin text-center">Mis discusiones</h2>
                    {dataCards.length > 1 ? (
                            dataCards.map((item,index)=>(
                                <div key={index}>
                                    <Card data={item} mycard={true}/>   
                                </div>
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