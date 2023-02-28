import { useEffect,useState } from "react";
import {useParams} from 'react-router-dom'
import data from "../../../data";
import Navbar from "../home/Navbar";
import Answers from "../discussions/Answers";
export default function Discussion(){
    const { id } = useParams();
    const [content,setContent] = useState({})

    useEffect(()=>{
        const object = data.find((item) => item.id === parseInt(id));
        if(object.image === ""){
            object.image = "https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg"
        }
        setContent(object)
    },[])
    return(
        <>
            <Navbar/>
            <div className="mt-9">
                <div className="mx-auto my-auto w-11/12 bg-slate-700 rounded-md">
                    <div className="border-b-2 mx-4">
                        <h3 className="text-white text-5xl py-3">{content.title}</h3>
                        <div className="flex pb-3">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 object-cover rounded-full mr-4 cursor-pointer" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
                            </div>
                            <div className="flex-grow">
                                <p className="text-white leading-none">{content.author}</p>
                                <p className="text-white">{content.date}</p>
                            </div>
                        </div>
                        <p className="text-white">{content.description}</p>
                        <h3 className="text-white text-3xl py-3">Imagen adjunta:</h3>
                        <img src={content.image} className="h-full w-1/2 object-cover mx-auto pb-3"/>
                        <h1 className="text-white text-2xl pb-3">Categoria: {content.category}</h1>
                    </div>
                    <div className="m-4 pb-3">
                        <h3 className="text-white text-4xl py-3">Respuestas</h3>
                        <div className=" relative m-2 ">
                            <form>
                                <label
                                    htmlFor="answer"
                                    
                                    className='text-base text-white'
                                    >
                                        Escribe tu respuesta!
                                </label>
                                <textarea
                                    // onChange={handleChangeFormAdd}
                                    name="answer"    
                                    type="text"
                                    required
                                    autoComplete="off"
                                    className='block px-2.5 pb-2.5 pt-4 w-full h-24 text-sm text-gray-200  rounded-lg focus:outline-none bg-gray-500 align-top resize-none'
                                    
                                    />

                                <div className="mb-3 w-96 mt-2">
                                    <label
                                    htmlFor="formFile"
                                    className="mb-2 inline-block text-neutral-700 dark:text-neutral-200 text-sm"
                                    >Subir imagen (Opcional)</label>
                                    <input
                                    className="relative m-0 block min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-gray-500 file:px-3 file:py-1.5 file:text-white file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-gray-600 focus:border-primary focus:bg-white focus:text-white focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent text-sm"
                                    type="file"
                                    accept="image/*"
                                    id="formFile" />
                                </div>

                                <span className="flex w-full rounded-md shadow-sm pt-3 sm:w-auto">
                                    <button
                                        type="submit"
                                        className="justify-center w-32 rounded-md border border-transparent px-4 py-1 bg-sky-700 text-base leading-6 font-medium text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:border-green-700 focus:shadow-outline-red active:bg-green-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                    >
                                        Comentar
                                    </button>
                                </span>

                            </form>
                        </div>
                        <div>
                            <Answers/>
                            <Answers/>

                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}