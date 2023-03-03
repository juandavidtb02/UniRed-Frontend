import React from "react";
import validator from "validator";
import Swal from "sweetalert2";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {CgDanger} from 'react-icons/cg'

export default function SignUp(){
    const [error,setError] = React.useState({
        state:false,
        type:"",
        message:""
    })
    const [passwordView,setPasswordView] = React.useState(false)



    const register = async (e) => {
        e.preventDefault()
        const jsonData = {
            "name":e.target.elements.name.value,
            "email":e.target.elements.email.value,
            "username":e.target.elements.username.value,
            "password":e.target.elements.password.value,
            "confirm_password":e.target.elements.confirm_password.value
        }
        if(jsonData.password !== jsonData.confirm_password){
            console.log('xd')
            setError({
                state:true,
                type:"passwords",
                message:"Las contraseñas no coinciden"
            })
            return
        }
        if (!validator.isStrongPassword(jsonData.password, {
            minLength: 8, minLowercase: 1
          })) {
            setError({
                state:true,
                type:'passwords',
                message:'La contraseña debe ser más segura'
            })
            return
          }
        
        setError({
            state:false,
            type:'',
            message:''
        })

        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso!'
        }).then((result)=>{
            window.location.replace('/')
        })

          

    }

    return(
        <form onSubmit={register}>
        <h3 className="flex text-lg leading-6 font-medium text-white items-center justify-center mb-1">
            Registro
        </h3>
        {error.state ? (<div className="flex inline-block items-center my-2 bg-red-500 text-white p-2 w-full rounded-xl col-span-2 max-w-sm"><CgDanger className="w-5 h-5 mr-1"/>{error.message}</div>) : null}
        <div className="mt-1">
            <div className="text-sm leading-5 text-gray-500">
                <div className=" relative mt-2 ">
                    <input
                        // onChange={handleChangeFormAdd}
                        name="name"    
                        type="text"
                        required
                        id="floatingInput1_login"
                        placeholder=" "
                        autoComplete="off"
                        className='block px-2.5 pb-2.5 pt-4 w-80 text-sm text-gray-200 rounded-lg  appearance-none focus:outline-none focus:ring-0 peer bg-gray-900'/>
                    <label
                        htmlFor="name"
                        
                        className='absolute text-sm text-white duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] spx-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1'
                        >
                            Nombre
                    </label>
                </div>

                <div className=" relative mt-5 ">
                    <input
                        // onChange={handleChangeFormAdd}
                        name="username"    
                        type="text"
                        required
                        id="floatingInput1_login"
                        placeholder=" "
                        autoComplete="off"
                        className='block px-2.5 pb-2.5 pt-4 w-80 text-sm text-gray-200 rounded-lg  appearance-none focus:outline-none focus:ring-0 peer bg-gray-900'/>
                    <label
                        htmlFor="username"
                        
                        className='absolute text-sm text-white duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] spx-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1'
                        >
                            Nombre de usuario
                    </label>
                </div>

                <div className="relative mt-5">
                    <input
                        // onChange={handleChangeFormAdd}
                        name="email"    
                        type="email"
                        required
                        id="floatingInput2_login"
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
                        type={!passwordView ? 'password' : 'text'}
                        required
                        id="floatingInput3_login"
                        placeholder=" "
                        autoComplete="off"
                        className='block px-2.5 pb-2.5 pt-4 w-80 text-sm text-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-0 peer bg-gray-900'/>
                    <label
                        htmlFor="password"
                        
                        className={`${error.type === "passwords" ? 'text-red-400' : 'text-white'} absolute text-sm duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] spx-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1`}
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

                <div className="relative mt-5">
                    <input
                        // onChange={handleChangeFormAdd}
                        name="confirm_password"    
                        type={!passwordView ? 'password' : 'text' }
                        required
                        id="floatingInput4_login"
                        placeholder=" "
                        autoComplete="off"
                        className='block px-2.5 pb-2.5 pt-4 w-80 text-sm text-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-0 peer bg-gray-900'/>
                    <label
                        htmlFor="confirm_password"
                        
                        className={`${error.type === "passwords" ? 'text-red-400' : 'text-white'} absolute text-sm duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] spx-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1`}
                        
                        >
                            Confirmar contraseña
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

                <div className="relative mt-5">
                    <input type="checkbox" value='true' name ="confirm_check" required/>
                    <label htmlFor="confirm_check" className="text-white absolute text-sm pl-2">Acepto los <a className="cursor-pointer hover:underline">terminos y condiciones</a></label>

                </div>
                
                    
            </div>
        </div>
        <div className=" px-4 py-3 sm:px-6 text-center">  
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                type="submit"
                className="justify-center w-full rounded-md border border-transparent px-4 py-2 bg-sky-700 text-base leading-6 font-medium text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:border-green-700 focus:shadow-outline-red active:bg-green-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                    Registrarme
                </button>
            </span>
            
        </div>
        </form>
    )
}