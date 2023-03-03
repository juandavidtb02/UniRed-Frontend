import React from "react";
import Navbar from "../../home/Navbar";
import useUserContext from "../../../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import {AiOutlineEdit} from 'react-icons/ai'
import dataUser from "../../../../datosquemadosxd/dataUser";
import Swal from "sweetalert2";
export default function SettingsUser(){
    const navigate = useNavigate();
    const {userLog,setUserLog} = useUserContext();
    const [modalEdit,setModalEdit] = React.useState(false);
    const [user,setUser] = React.useState({})
    const [modalData,setModalData] = React.useState({})

    React.useEffect(()=>{
        if(userLog === '' && localStorage.getItem('user') === null){
            navigate("/login");
        }
        setUser(userLog)
    },[userLog])

    const handleModalData = (name,value) => {
        setModalEdit(true)
        setModalData({
            name,
            value
        })
    }

    const notAvalaible = (name) => {
        Swal.fire({
            icon: 'error',
            title: 'Esta opción aun no está disponible...',
            text: 'Pronto podrás modificar tu ' + name,
            background: '#151F2E',
            color:'#FFFFFF'
          })
    }

    const submitEdit = (e) => {
        e.preventDefault()
        const name = modalData.name
        const value = e.target.elements.valueEdit.value;
        Swal.fire({
            title: '¿Estas seguro de editar "'+name+'"?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Confirmar',
            background: '#151F2E',
            color:'#FFFFFF'
          }).then((result) => {
            if (!result.isConfirmed)return

          })

    }
    
    const changePhoto = (e) => {
        e.preventDefault()
        const file = e.target.elements.profilepic.files[0]
        Swal.fire({
            title: '¿Estas seguro de cambiar tu foto de perfil?',
            text: "¡Podrás volver a cambiarla si asi lo deseas!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Confirmar',
            background: '#151F2E',
            color:'#FFFFFF'
          }).then((result) => {
            if (!result.isConfirmed)return
          })
        
    }

    return(
        <>
            <Navbar/>
            <div className="mt-9 mb-9">
                    <div className="mx-auto my-auto w-11/12 bg-custom-blue rounded-md">
                        <h3 className="text-white text-5xl py-4 text-center">Ajustes de usuario</h3>

                        <h3 className="text-white text-2xl py-4 text-center">Foto de perfil</h3>
                        <img className="h-52 w-52 object-cover rounded-full mx-auto border-4 pointer-events-none" src={user.image} alt="Avatar"/>
                        <div className="flex flex-col items-center justify-center text-center mt-2 cursor-pointer">
                            <form onSubmit={changePhoto} className="w-96">
                                <div className="mb-3 w-full">
                                <input
                                    name="profilepic"
                                    className="relative m-0 block w-full max-w-xs cursor-pointer rounded border border-solid border-custom-blue bg-white bg-clip-padding px-3 py-1.5 font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-slate-700 file:px-3 file:py-1.5 file:text-white file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-gray-600 focus:border-primary focus:bg-white focus:text-white focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent text-sm"
                                    type="file"
                                    accept="image/*"
                                    id="formFile"
                                    required
                                />
                                </div>

                                <span className=" w-full rounded-md shadow-sm pt-3 sm:w-auto">
                                    <button
                                        type="submit"
                                        className="justify-center w-32 rounded-md px-4 py-1 bg-sky-700 text-base leading-6 font-medium text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:border-green-700 focus:shadow-outline-red active:bg-green-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5 mb-5"
                                    >
                                        Cambiar foto
                                    </button>
                                </span>
                            </form>
                        </div>


                        <div className="mt-3 flex flex-wrap items-center justify-center pb-3">
                            <div className="items-center bg-custum-blue-bg rounded-xl text-center text-white p-8 h-44 w-52  overflow-hidden ml-3 sm:mt-0 mt-5">
                                <div className="flex flex-col justify-center">
                                    <p className="text-lg font-medium">Username:</p>
                                    <p className="">{user.username}</p>
                                    <AiOutlineEdit className="h-8 w-8 mx-auto mt-2 cursor-pointer" onClick={()=>{handleModalData('username',user.username)}}/>
                                </div>
                            </div>
                            <div className="items-center bg-custum-blue-bg rounded-xl text-center text-white p-8 h-44 w-52  overflow-hidden ml-3 sm:mt-0 mt-5">
                                <div className="flex flex-col justify-center">
                                    <p className="text-lg font-medium">Nombre:</p>
                                    <p className="">{user.name}</p>
                                    <AiOutlineEdit className="h-8 w-8 mx-auto mt-2 cursor-pointer" onClick={()=>{handleModalData('name',user.name)}}/>
                                </div>
                            </div>
                            <div className="items-center bg-custum-blue-bg rounded-xl text-center text-white p-8 h-44 w-52  overflow-hidden ml-3 sm:mt-0 mt-5">
                                <div className="flex flex-col justify-center">
                                    <p className="text-lg font-medium">Email:</p>
                                    <p className="">{user.email}</p>
                                    <AiOutlineEdit className="h-8 w-8 mx-auto mt-2 cursor-pointer" onClick={()=>{notAvalaible('email')}}/>
                                </div>
                            </div>
                            <div className="items-center bg-custum-blue-bg rounded-xl text-center text-white p-8 h-44 w-52  overflow-hidden ml-3 sm:mt-0 mt-5">
                                <div className="flex flex-col justify-center">
                                    <p className="text-lg font-medium">Institucion:</p>
                                    <p className="">{user.institution}</p>
                                    <AiOutlineEdit className="h-8 w-8 mx-auto mt-2 cursor-pointer" onClick={()=>{handleModalData('institucion',user.institution)}}/>
                                </div>
                            </div>
                            <div className="items-center bg-custum-blue-bg rounded-xl text-center text-white p-8 h-44 w-52  overflow-hidden ml-3 sm:mt-0 mt-5">
                                <div className="flex flex-col justify-center">
                                    <p className="text-lg font-medium">Contraseña</p>
                                    <AiOutlineEdit className="h-8 w-8 mx-auto mt-2 cursor-pointer" onClick={()=>{notAvalaible('contraseña')}}/>
                                </div>
                            </div>
                            <div className="items-center bg-custum-blue-bg rounded-xl text-center text-white p-8 h-min w-full overflow-hidden mx-3 sm:mt-3 mt-5">
                                <div className="flex flex-col justify-center">
                                    <p className="text-lg font-medium">Descripcion</p>
                                    <p className="">{user.descripcion}</p>
                                    <AiOutlineEdit className="h-8 w-8 mx-auto mt-2 cursor-pointer" onClick={()=>{handleModalData('descripcion',user.descripcion)}}/>
                                    
                                </div>
                            </div>
                        </div>
                            


                    </div>
            </div>



            {modalEdit && ( <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                    </div>
                    <div className="bg-custom-blue rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    
                        <form onSubmit={submitEdit}>
                        <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-white">
                                    Modificar {modalData.name}
                                </h3>
                                <div className="my-8">
                                    <div className="text-sm leading-5 text-white">
                                            <div className=" relative mt-1 ">
                                                {modalData.name !== 'descripcion' ? (<>
                                                    <input
                                                    // onChange={handleChangeFormAdd}
                                                        name="valueEdit" 
                                                        type="text"
                                                        required
                                                        id="floatingInput1_login"
                                                        placeholder=" "
                                                        autoComplete="off"
                                                        defaultValue={modalData.value}
                                                        className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-200 bg-custum-blue-bg rounded-lg border-1 border-white appearance-none focus:outline-none focus:ring-0 peer'/>
                                                    <label
                                                        htmlFor="valueEdit"
                                                        className='absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] spx-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
                                                        >
                                                            Valor a modificar
                                                    </label>
                                                </>) : (<>
                                                    <textarea
                                                        name="valueEdit"
                                                        required
                                                        className='block px-2.5 pb-2.5 pt-4 w-full h-48 text-sm text-gray-200  rounded-lg focus:outline-none bg-custum-blue-bg align-top resize-none'
                                                        defaultValue={modalData.value}
                                                    />
                                                </>)}
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-custom-blue px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            
                            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                <button
                                type="button"
                                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 border-red-500 text-base leading-6 font-medium text-red-500 hover:text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                onClick={()=>{setModalEdit(false)}}
                                >
                                Cerrar
                                </button>
                            </span>

                            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                <button
                                type="submit"
                                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 border-green-500 text-base leading-6 font-medium text-green-500 hover:text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red active:bg-green-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                >
                                    Añadir
                                </button>
                            </span>
                        </div>
                        </form>
                    </div>
                    </div>)

            }
        </>
    )
}