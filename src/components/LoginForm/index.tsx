import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

import Disc from '../../assets/VinilDisc.png'
import Graphic from '../../assets/IconGraphico.png'
import { useState } from "react";
import MobileDisc from '../../assets/VinilDiscMobile.png'

interface IObjectLogin {
    email: string;
    password: string;
  }

const schema = object<IObjectLogin>({
    email:string().required("O campo de email é obrigatorio").min(6,"Numero de caracteres invalido").email("Isso não é um email"),
    password:string().required("Campo Obrigatorio")
  })

  export interface IRegisterOrLogin{
    handleRegisterOrLogin: ()=>void
  }

export default function LoginForm({handleRegisterOrLogin}:IRegisterOrLogin) {
   
    const {register, handleSubmit:onSubmit, watch, formState:{errors}} = useForm({resolver:yupResolver(schema)})

  function handleSubmitLogin(data:any) {
    console.log(data)

  }

  
    return (

      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <h1 className="text-white  text-4xl text-left mb-1">Faça seu Login!</h1>
          <p className="text-white">Continue preenchendo seu perfil de informações e conteudos.</p>
        </div>
      <form action="" className="flex flex-col gap-3 z-20 max-[768px]:w-full" onSubmit={onSubmit(handleSubmitLogin)}>
      <div className="form-group">
       
       <input type="text" id="email" className="w-full bg-slate-100 h-10 px-2 rounded" placeholder="Seu e-mail" {...register("email")}/>
       <span className="text-red-500">{errors?.email?.message?.toString()}</span>
      </div>
      <div className="form-group">
      
       <input type="password" id="password" className="w-full bg-slate-100 h-10 px-2 rounded" placeholder="Sua Senha"{...register("password")}/>
       <span className="text-red-500">{errors?.password?.message?.toString()}</span>
      </div>
       
       <button type="submit" className="text-white bg-[#019be6] py-2 rounded text-xl font-regular">Enviar</button>

       <div className=""><span className="text-white">Ainda não tem uma conta?  <button className="text-[#019be6]" onClick={handleRegisterOrLogin}>Registre-se aqui</button></span></div>
       </form>
       </div>
      

      

       
       
       
    )
}