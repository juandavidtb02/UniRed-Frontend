import { useEffect,useState } from "react";
import {useParams} from 'react-router-dom'
import data from "../../../datosquemadosxd/data";
import Navbar from "../home/Navbar";
import Answers from "../discussions/Answers";
import { useNavigate } from "react-router-dom";
import {MdOutlineReportProblem} from 'react-icons/md'
import Swal from "sweetalert2";

export default function Discussion(){
    const { id } = useParams();
    const [content,setContent] = useState({})
    const navigate = useNavigate();
    const [reported,setReported] = useState(false)


    useEffect(()=>{
        //window.scrollTo(0, 0);
        const object = data.find((item) => item.id === parseInt(id));
        if(object === undefined) navigate("/error")
        else if(object.image === ""){
            object.image = "https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg"
        }
        setContent(object)
    },[])

    const reportDiscussion = () => {
        if(reported) return
        Swal.fire({
            title: '¿Por qué reportas esta discusión?',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Reportar',
            showLoaderOnConfirm: true,
            background: '#151F2E',
            color:'#FFFFFF',
            preConfirm: (login) => {
            //   return fetch(`//api.github.com/users/${login}`)
            //     .then(response => {
            //       if (!response.ok) {
            //         throw new Error(response.statusText)
            //       }
            //       return response.json()
            //     })
            //     .catch(error => {
            //       Swal.showValidationMessage(
            //         `Request failed: ${error}`
            //       )
            //     })
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Se ha reportado la discusión correctamente',
                    background: '#151F2E',
                color:'#FFFFFF'
                })
                setReported(true)
            }
          })
    }
    return(
        <>
            <Navbar/>
            <div className="mt-9">
                <div className="mx-auto my-auto w-11/12 bg-custom-blue rounded-md">
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
                        <div className="pb-3">
                            <button className={`${reported ? 'text-red-400' : 'text-white hover:bg-slate-600 hover:text-red-300'} p-3 mt-2 bg-slate-700 rounded-lg flex`}
                                onClick={()=>{reportDiscussion()}}
                            >
                                <MdOutlineReportProblem className="h-6 w-7"/>{reported ? ('Reportado') : ('Reportar')}
                            </button>
                        </div>
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
                                    className='block px-2.5 pb-2.5 pt-4 w-full h-24 text-sm text-gray-200  rounded-lg focus:outline-none bg-slate-700 align-top resize-none'
                                    
                                    />

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

                                <span className="flex w-full rounded-md shadow-sm pt-3 sm:w-auto">
                                    <button
                                        type="submit"
                                        className="justify-center w-32 rounded-md px-4 py-1 bg-sky-700 text-base leading-6 font-medium text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:border-green-700 focus:shadow-outline-red active:bg-green-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
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