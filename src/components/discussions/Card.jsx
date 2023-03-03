import React from "react";
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Swal from "sweetalert2";
export default function Card({data,mycard}){
    const [modalEdit,setModalEdit] = React.useState(false)

    const deleteDiscussion = () => {
        Swal.fire({
            title: '¿Estas seguro de eliminar esta discusión?',
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
            if (!result.isConfirmed){return}
            console.log(data.id)
          })
    }

    return(
        <>
        <div className="max-w-sm w-full lg:max-w-xl lg:flex sm:ml-auto mx-auto my-3">
            <div className="rounded-lg lg:border-gray-400 bg-custom-blue p-4 flex flex-col justify-between leading-normal">
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
                            <button className="px-5 py-2 bg-slate-700 hover:bg-gray-300 rounded-md text-white hover:text-black"> 
                                Ver más
                            </button>
                        </Link>
                        {mycard && (
                            <>
                                <button className="px-5 py-2 border-green-500 border hover:bg-green-500 rounded-md text-green-500 hover:text-black ml-3"
                                    onClick={()=>{setModalEdit(true)}}
                                    > 
                                    Editar
                                </button>
                                <button className="px-5 py-2 border-red-500 border hover:bg-red-500 rounded-md text-red-500 hover:text-black ml-3 sm:mt-0 mt-3"
                                    onClick={()=>{deleteDiscussion()}}
                                > 
                                    Eliminar
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
    </div>
    
    {modalEdit && mycard ? (<div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center z-20 my-5">
    <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
    <div className="bg-custom-blue rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full max-h-full overflow-y-auto">
        <form>
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div>
                    <h3 className="text-lg leading-6 font-medium text-white">
                        Modificar 
                                </h3>
                                <div className="my-8">
                                    <div className="text-sm leading-5 text-white">
                                    <div className=" relative mt-2 ">
                    <label
                        htmlFor="title"
                        
                        className='text-sm text-white'
                        >
                            Título de la discusión
                    </label>
                    <input
                        // onChange={handleChangeFormAdd}
                        name="title"    
                        type="text"
                        required
                        autoComplete="off"
                        defaultValue={data.title}
                        className='block px-2.5 pb-2.5 pt-4 sm:w-96 w-full text-sm text-gray-200  rounded-lg  appearance-none focus:outline-none focus:ring-0 bg-slate-700'/>
                </div>

                <div className=" relative mt-2 ">
                    <label
                        htmlFor="descrip"
                        
                        className='text-sm text-white'
                        >
                            Descripción
                    </label>
                    <textarea
                        // onChange={handleChangeFormAdd}
                        name="descrip"    
                        type="text"
                        required
                        autoComplete="off"
                        defaultValue={data.description}
                        className='block px-2.5 pb-2.5 pt-4 sm:w-96 w-full h-48 text-sm text-gray-200  rounded-lg focus:outline-none bg-slate-700 align-top resize-none'
                        
                        />
                </div>

                <div className="mb-3 w-96 mt-2">
                    <label
                    htmlFor="formFile"
                    className="mb-2 inline-block text-neutral-700 dark:text-neutral-200 text-sm"
                    >Subir imagen (Opcional)</label>
                    <input
                    className="relative m-0 block min-w-0 flex-auto cursor-pointer rounded border border-solid border-custom-blue bg-white bg-clip-padding px-3 py-1.5 font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-slate-700 file:px-3 file:py-1.5 file:text-white file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-gray-600 focus:border-primary focus:bg-white focus:text-white focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent text-sm"
                    type="file"
                    accept="image/*"
                    id="formFile" />
                </div>

                <div className="relative mt-3">
                    <div className="mb-3 xl:w-96">
                        <label 
                            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200 text-sm"
                        >Categoria</label>
                        <select className="w-48 block rounded-lg py-1 pl-2 bg-slate-700 text-white" defaultValue="1" >
                            <option value="1">Biologia</option>
                            <option value="2">Matematicas</option>
                            <option value="3">Programación</option>
                            <option value="4">Fisica</option>
                        </select>
                    </div>
                </div>

                <div className=" px-4 py-3 sm:px-6 text-center mb-5">  
                    <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                        <button
                        type="submit"
                        className="justify-center w-full rounded-md border border-transparent px-4 py-2 bg-sky-700 text-base leading-6 font-medium text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:border-green-700 focus:shadow-outline-red active:bg-green-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                        >
                            Editar discusión
                        </button>
                    </span>
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
                    </div>) : null}
        </>
    )
}