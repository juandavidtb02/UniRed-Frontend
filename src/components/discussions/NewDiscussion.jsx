import React from "react";

export default function NewDiscussion(){
    return(
        <div className="bg-custom-blue rounded-lg p-3 mt-3  w-10/12 m-auto sm:ml-3">
            <form>
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
                            Crear discusión
                        </button>
                    </span>
                </div>



            </form>
        </div>
    )
}