import React from "react";
import Navbar from "../../home/Navbar";
import data from "../../../../datosquemadosxd/data";
import Card from "../../discussions/Card";
import {AiOutlineUserAdd} from 'react-icons/ai'
import {MdOutlineReportProblem} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'
import Swal from "sweetalert2";
import dataUser from "../../../../datosquemadosxd/dataUser";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useUserContext from "../../../../hooks/useUser";

export default function Profile(){
    const { id } = useParams();

    const [dataCards,setDataCards] = React.useState(data)
    const [reported,setReported] = React.useState(false)
    const [user,setUser] = React.useState({})
    const navigate = useNavigate();
    const {userLog,setUserLog} = useUserContext();


    const reportUser = () => {
        if(reported) return
        Swal.fire({
            title: '¿Por qué reportas este perfil?',
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
                    title: 'Se ha reportado el perfil correctamente',
                    background: '#151F2E',
                    color:'#FFFFFF'
                })
                setReported(true)
            }
          })
    }


    React.useEffect(()=>{
        const foundUser = dataUser.find(user => user.id === parseInt(id));
        if(!foundUser) navigate("/error")
        setUser(foundUser)
        
    },[id])
    return(
        <>
            <Navbar/>
            <div className="mt-9">
                <div className="mx-auto my-auto w-11/12 bg-custom-blue rounded-md">
                    <div className="mx-4">
                        <h3 className="text-white text-5xl py-4 text-center">{user.username}</h3>
                        <p className="text-white text-2xl pb-3 text-center">{user.institution}</p>
                        <img className="h-52 w-52 object-cover rounded-full mx-auto border-4 pointer-events-none" src={user.image} alt="Userpic"/>
                        <p className="text-white text-2xl py-3 text-center">{user.name}</p>
                        <p className="text-white text-lg py-3 text-center">{user.descripcion}</p>
                    </div>                   
                </div>
                <div className="mt-4 mx-auto flex flex-col justify-center w-1/6">
                    {userLog.id !== parseInt(id) ? (<>
                        <button className="p-3 text-white bg-slate-700 rounded-lg hover:bg-slate-600 flex hover:text-green-300"><AiOutlineUserAdd className="h-6 w-7"/>Añadir a mis amigos</button>
                        <button className={`${reported ? 'text-red-400' : 'text-white hover:bg-slate-600 hover:text-red-300'} p-3 mt-2 bg-slate-700 rounded-lg flex`}
                            onClick={()=>{reportUser()}}
                        >
                            <MdOutlineReportProblem className="h-6 w-7"/>{reported ? ('Reportado') : ('Reportar')}
                        </button>
                    </>) : (<>
                        <button className="p-3 text-white bg-slate-700 rounded-lg hover:bg-slate-600 flex"
                            onClick={()=>{navigate('/settings')}}
                        >
                            <FiSettings className="h-6 w-7"/>
                            Ajustes
                        </button>
                    </>)}
                </div>
                <div className="my-3">
                        <h2 className="text-4xl text-white font-thin text-center">Discusiones</h2>
                        {dataCards.length > 1 ? (
                            dataCards.map((item,index)=>(
                                <div key={index} className="pb-3">
                                    <Card data={item} />  
                                </div>
                            ))
                    ) : (<p className="text-white ml-3 mt-3">Este usuario no tiene discusiones</p>)}
                </div> 

            </div>
        </>
    )
}