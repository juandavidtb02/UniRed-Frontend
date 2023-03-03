import Navbar from "../home/Navbar"
import { useNavigate } from "react-router-dom";

export default function Error404(){
    const navigate = useNavigate();

    return(
        <>
            <Navbar/>
            <div className="mt-9 sm:mb-9">
                <div className="mx-auto my-auto w-11/12 bg-custom-blue rounded-md">
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/2  sm:border-slate-700 mt-5 flex-col sm:flex-row">
                            <img src="../../images/error-404.png" className="p-28 pointer-events-none"/>
                        </div>
                        <div className="w-full sm:w-1/2 mt-9 flex-col sm:flex-row">
                            <h2 className="text-5xl text-white font-thin ml-3">¡Oops! Error 404</h2>
                            <p className="text-white ml-3 mt-9 text-xl">No se ha encontrado la URL solicitada</p>
                            <button className="text-white ml-3 mt-9 text-sm p-3 bg-sky-800 rounded-lg hover:bg-sky-600"
                                onClick={()=>{navigate("/")}}
                            >
                                Regresar al inicio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}