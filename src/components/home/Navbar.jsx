import { useState,useEffect } from "react";
import {BiUserCircle,BiExit,BiLogIn} from 'react-icons/bi'
import useUserContext from "../../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate();
    const {userLog,setUserLog} = useUserContext();
    const [user,setUser] = useState(null)

    useEffect(()=>{
        if(userLog !== '' && localStorage.getItem('user') !== null){
            setUser(localStorage.getItem('user'))
        }
    },[userLog])

    const logout = () => {
        setUserLog('')
        localStorage.removeItem('user')
        window.location.reload()
    }

    const handleHome = () => {
        navigate('/')
    }

    const handleLogin = () => {
        navigate('/login')
    }

    const handleMyDiscussions = () => {
        navigate('/mydiscussions')
    }

    return (
        <nav className="w-full bg-custom-blue shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a onClick={()=>{handleHome()}}>
                            <h2 className="text-2xl font-bold text-white cursor-pointer">UniRed</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <a onClick={()=>{handleHome()}} className="cursor-pointer">
                                    Inicio
                                </a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a onClick={()=>{handleMyDiscussions()}} className="cursor-pointer">
                                    Mis discusiones
                                </a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="#">Chat</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="#">Ayuda</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            {user ? (
                                <>
                                    <Link to={`/profile/${userLog.id}`}>
                                        <a
                                            href="#"
                                            className="inline-flex w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                        >
                                            <p className="text-white m-auto inline-flex"><BiUserCircle className="h-7 w-7 mr-3"/> Perfil</p>

                                        </a>
                                    </Link>                                    
                                    <a
                                        href="#"
                                        className="inline-block w-full px-3 py-2 text-center bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                        onClick={()=>{logout()}}
                                    >
                                        <p className="text-white m-auto inline-flex"><BiExit className="h-7 w-7 mr-3"/> Salir</p>
                                    </a>
                                </>
                            ) : (<>
                                    <a
                                        href="#"
                                        className="inline-flex w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                        onClick={()=>{handleLogin()}}
                                    >
                                        <p className="text-white m-auto inline-flex"><BiLogIn className="h-7 w-7 mr-3"/>Iniciar sesión</p>

                                    </a>
                            </>)}
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-flex">
                    {user ? (<>
                        <Link to={`/profile/${userLog.id}`}>
                            <a
                            href="#"
                            className=" text-white rounded-md shadow hover:bg-gray-800"
                            >
                                <BiUserCircle className="h-7 w-7 text-white"/>
                            </a>
                        </Link>
                        <a
                            href="#"
                            className=" text-gray-800 rounded-md shadow hover:bg-gray-800"
                        >
                            <BiExit className="h-7 w-7 text-white" onClick={()=>{logout()}}/>
                        </a>
                    </>) : (
                        <>
                        <a
                            href="#"
                            className=" text-gray-800 rounded-md shadow hover:bg-gray-800"
                            onClick={()=>{handleLogin()}}
                        >
                            <BiLogIn className="h-7 w-7 mr-3 text-white"/>
                        </a>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}