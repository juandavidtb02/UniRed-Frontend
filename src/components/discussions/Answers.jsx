import React from "react";
import Swal from "sweetalert2";
import {AiOutlineZoomIn,AiOutlineLike,AiOutlineDislike} from 'react-icons/ai'
import {MdOutlineReportProblem} from 'react-icons/md'
export default function Answers(){
    const [liked,setLiked] = React.useState(false)
    const [disliked,setDisliked] = React.useState(false)
    const [reported,setReported] = React.useState(false)

    const [likes,setLikes] = React.useState(0)
    const [dislikes,setDislikes] = React.useState(0)

    const zoomImage = (image) =>{{
        Swal.fire({
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/ImgUnillanos.jpg',
            imageAlt: 'Imagen del comentario'
        })
    }}

    const reportAnswer = () => {
        if(reported) return
        Swal.fire({
            title: '¿Por qué reportas este comentario?',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Reportar',
            showLoaderOnConfirm: true,
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
                    title: 'Se ha reportado el mensaje correctamente'
                })
                setReported(true)
            }
          })
    }

    const dislikeAnswer = () => {
        setDisliked(!disliked)

        if(disliked){
            const dislike = dislikes - 1
            setDislikes(dislike)
            return
        }
        else if(liked){
            likeAnswer()
        }
        const dislike = dislikes + 1
        setDislikes(dislike)


    }

    const likeAnswer = () => {
        setLiked(!liked)
        
        if(liked){
            const like = likes - 1
            setLikes(like)
            return
        }
        else if(disliked){
            dislikeAnswer()
        }
        const like = likes + 1
        setLikes(like)
    }
    return(
        <>
            <div className="p-3 border-2 rounded-md mt-3">
                <div className="flex pb-3">
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 object-cover rounded-full mr-4 cursor-pointer" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
                    </div>
                    <div className="flex-grow">
                        <p className="text-white leading-none">Autor</p>
                        <p className="text-white">Fecha</p>
                    </div>
                </div>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur officia rerum minima accusamus? Vitae debitis corporis deleniti, quibusdam asperiores ducimus accusamus libero, voluptate incidunt blanditiis, quas optio sint aspernatur.</p>
                <div className="relative w-1/4 mx-auto group pt-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/ImgUnillanos.jpg" className="w-full h-auto transition-opacity duration-200 hover:opacity-10 cursor-pointer z-10 " />
                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={()=>{zoomImage('')}}>
                        <p className="bg-slate-900 text-white text-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-auto z-20 flex items-center p-2 rounded-xl"><AiOutlineZoomIn/>Ver imagen</p>
                    </div>
                </div>
                <div>
                </div>
                <div className="flex text-white select-none">
                    {likes}<AiOutlineLike className={`${liked ? 'text-green-500' : 'text-white'} h-6 w-6 cursor-pointer  mx-1 hover:text-green-500 focus:text-green-500`} onClick={()=>{likeAnswer()}}/>
                    {dislikes}<AiOutlineDislike className={`${disliked ? 'text-red-500' : 'text-white'} h-6 w-6 cursor-pointer mx-1 hover:text-red-500`} onClick={()=>{dislikeAnswer()}}/>
                    <MdOutlineReportProblem className={`${reported ? 'text-red-500' : 'text-white'} h-6 w-6 cursor-pointer hover:text-red-500`} onClick={()=>{reportAnswer()}}/>
                </div>



            </div>
        </>
    )
}