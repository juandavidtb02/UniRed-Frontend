import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
export default function Forms(){
    const [formDisplay,setFormDisplay] = React.useState(0)

    return(
        <>
            <div className="fixed mt-5 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center justify-center">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-custom-blue opacity-75"></div>
                </div>
                <div className="sm:flex sm:max-w-6xl sm:w-full bg-slate-700 rounded-lg overflow-hidden shadow-xl transform transition-all">
                    <div className="sm:w-1/1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/ImgUnillanos.jpg" className="h-full w-full object-cover"/>
                    </div>
                    <div className="flex sm:w-1/2 px-4 py-6 sm:px-6 sm:py-4 items-center justify-center flex-col relative">
                        <p className="text-white text-xl font-bold absolute top-0 left-1/2 sm:pt-4 transform -translate-x-1/2">UniRed</p>
                        {formDisplay === 0 ? 
                            <>
                            <Login/>
                            <p className="text-white text-sm mt-1 cursor-pointer hover:underline" onClick={()=>{setFormDisplay(1)}}>¿No tienes cuenta? Registrate</p>
                            </>  
                            : 
                            <>
                            <SignUp/>
                            <p className="text-white text-sm mt-3 cursor-pointer hover:underline" onClick={()=>{setFormDisplay(0)}}>¿Ya tienes cuenta? Inicia sesión</p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}