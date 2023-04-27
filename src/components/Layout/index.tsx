import Image from "next/image";

import Logo from '../../assets/Logo.png'
import Player from '../../assets/player.png'
import { useState } from "react";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

export default function Layout() {

    const [registerPage, setRegisterPage] = useState(false);
    const [loginPage, setLoginPage] = useState(true)
  
    function handleRegisterOrLogin() {
      setLoginPage(!loginPage)
      setRegisterPage(!registerPage)
    }


    return (
        <div className="flex h-full max-[768px]:flex-col">
            <article className="bg-sky-300 h-full w-[60%] py-7 px-[30px] max-[768px]:w-full flex justify-center items-center">
                
                <div className="flex justify-between items-center h-full gap-4 max-[1024px]:flex-col max-[1024px]:justify-center min-[1680px]:max-w-[980px]">
                    <Image src={Player} alt="Jogador do brasil de costas" className="w-96 max-[1280px]:w-72 max-[1024px]:w-96 min-[1680px]:w-[600px]"/>
                    <div className="">
                        <h1 className="text-5xl text-black mb-5 font-bold max-[1024px]:text-center">CYBERFUT</h1>
                        <p className="text-black text-lg max-[1024px]:text-center">Descubra o talento que estava escondido em<br className="max-[1440px]:hidden"/> você e brilhe nos gramados da vida com<br className="max-[1440px]:hidden"/> nossa plataforma de talentos do futebol!</p>
                       
                    </div>
                </div>

            </article>
            <div className="h-full bg-[#020b2a] w-[40%] py-7 px-[30px] max-[768px]:w-full">
               {loginPage === true ? ( <LoginForm  handleRegisterOrLogin={handleRegisterOrLogin}/>): ( <RegisterForm  handleRegisterOrLogin={handleRegisterOrLogin}/>)}
            </div>
        </div>
    )
}