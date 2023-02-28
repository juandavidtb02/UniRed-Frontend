import React from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {CgDanger} from 'react-icons/cg'
import Swal from "sweetalert2";
import useUserContext from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const [error,setError] = React.useState({
        state:false,
        message:""
    })
    const [passwordView,setPasswordView] = React.useState(false)
    const {userLog,setUserLog} = useUserContext();

    const navigate = useNavigate();

    React.useEffect(()=>{
        if(userLog !== ''){
            navigate("/");
        }
    },[userLog])


    const login = async (e) => {
        e.preventDefault()
        const jsonData = {
            "email":e.target.elements.email.value,
            "password":e.target.elements.password.value
        }
        const user = {
            name:'juan',
            email:'admin@admin'
        }
        
        try{
            if(jsonData.email !== user.email || jsonData.password !== '123') throw new Error(jsonData)
            setError({
                state:false,
                message:''
            })


            setUserLog(user)
            localStorage.setItem('user',JSON.stringify(user))
    
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso!'
            }).then((result)=>{
                
            })
            navigate("/");
        }catch(error){
            
            setError({
                state:true,
                message:"Las credenciales no coinciden"
            })
        }
    }

    const forgetPassword = () => {
        Swal.fire({
            title: 'Muy demalas',
            html: '<iframe width="430" height="315" src="https://www.youtube.com/embed/hRBUu_CufjM?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            
          })
    }

    return(
        <form onSubmit={login}>
        <h3 className="flex text-lg leading-6 font-medium text-white items-center justify-center mb-3">
            Iniciar sesión
        </h3>
        {error.state ? (<div className="flex inline-block items-center my-2 bg-red-500 text-white p-2 w-full rounded-xl col-span-2 max-w-sm"><CgDanger className="w-5 h-5 mr-1"/>{error.message}</div>) : null}
        <div className="mt-7">
            <div className="text-sm leading-5 text-gray-500">
                <div className=" relative mt-2 ">
                    <input
                        // onChange={handleChangeFormAdd}
                        name="email"    
                        type="email"
                        required
                        id="floatingInput1_login"
                        placeholder=" "
                        autoComplete="off"
                        className='block px-2.5 pb-2.5 pt-4 w-80 text-sm text-gray-200 rounded-lg  appearance-none focus:outline-none focus:ring-0 peer bg-gray-900'/>
                    <label
                        htmlFor="email"
                        
                        className='absolute text-sm text-white duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] spx-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1'
                        >
                            Correo electronico
                    </label>
                </div>
                <div className="relative mt-5">
                    <input
                        // onChange={handleChangeFormAdd}
                        name="password"    
                        type={!passwordView ? 'password' : 'text' }
                        required
                        id="floatingInput2_login"
                        placeholder=" "
                        autoComplete="off"
                        className='block px-2.5 pb-2.5 pt-4 w-80 text-sm text-gray-200 rounded-lg  appearance-none focus:outline-none focus:ring-0 peer bg-gray-900'/>
                    <label
                        htmlFor="email"
                        
                        className='absolute text-sm text-white duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] spx-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1'
                        >
                            Contraseña
                    </label>

                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                            type="button"
                            className="text-gray-400 hover:text-gray-200 "
                            onClick={()=>{setPasswordView(!passwordView)}}
                            >
                            {!passwordView ? <AiOutlineEye className="w-5 h-5"/> : <AiOutlineEyeInvisible className="w-5 h-5"/>}
                        </button>
                    </div>
                </div>
                
                    
            </div>
        </div>
        <div className=" px-4 py-3 sm:px-6 text-center">  
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                type="submit"
                className="justify-center w-full rounded-md border border-transparent px-4 py-2 bg-sky-700 text-base leading-6 font-medium text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:border-green-700 focus:shadow-outline-red active:bg-green-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                    Ingresar
                </button>
            </span>
            <p className="text-white text-sm mt-3 cursor-pointer hover:underline" onClick={()=>{forgetPassword()}}>¿Olvidaste tu contraseña?</p>
        </div>
        </form>
    )
}