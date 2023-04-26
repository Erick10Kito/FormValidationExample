import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import { object, string } from "yup";
import Image from "next/image";

import Disc from '../assets/VinilDisc.png'
import Login from "@/components/Login";
import Registro from "@/components/Registro";



export default function Home() {
  const [registerPage, setRegisterPage] = useState(false);
  const [loginPage, setLoginPage] = useState(true)

  function handleRegisterOrLogin() {
    setLoginPage(!loginPage)
    setRegisterPage(!registerPage)
  }
  

  return (
    <div className="bg-[#191617] h-screen flex justify-end items-center relative max-[1024px]:justify-center max-[1024px]:items-end">

      {loginPage === true ? (<Login handleRegisterOrLogin={handleRegisterOrLogin}/>):(<Registro handleRegisterOrLogin={handleRegisterOrLogin}/>)}
      

    </div>
  )
}
