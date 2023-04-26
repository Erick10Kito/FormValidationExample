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
    password:string().required("O campo de senha é um campo obrigatorio").min(6,"A senha tem menos de 6 caracteres")
  })

  export interface IRegisterOrLogin{
    handleRegisterOrLogin: ()=>void
  }

export default function Login({handleRegisterOrLogin}:IRegisterOrLogin) {
   
    const {register, handleSubmit:onSubmit, watch, formState:{errors}} = useForm({resolver:yupResolver(schema)})

  function handleSubmitLogin(data:any) {
    console.log(data)

  }

  
    return (
        <div className="bg-white flex flex-col justify-center items-center w-[80%] h-[80%] rounded-tl rounded-bl max-[1024px]:w-[95%] max-[1024px]:h-[95%] max-[1024px]:px-3">
       <div className="bg-[#019be6] mb-6 flex items-center justify-center w-[400px] h-12 rounded-full max-[479px]:w-full">
        <h1 className="text-white ">SEJA BEM VINDO</h1>
        </div>
      <div className="flex items-center gap-5 max-[768px]:flex-col max-[768px]:w-full">
        <div>
            <Image src={Graphic} alt="" className="w-[250px] max-[768px]:w-[300px]"/>

            
            </div>
        <form action="" className="flex flex-col gap-3 w-[400px] z-20 max-[768px]:w-full" onSubmit={onSubmit(handleSubmitLogin)}>
       <div className="form-group">
        
        <input type="text" id="email" className="w-full bg-slate-100 h-10 px-2 rounded" placeholder="Seu e-mail" {...register("email")}/>
        <span className="text-black">{errors?.email?.message?.toString()}</span>
       </div>
       <div className="form-group">
       
        <input type="password" id="password" className="w-full bg-slate-100 h-10 px-2 rounded" placeholder="Sua Senha"{...register("password")}/>
        <span className="text-black">{errors?.password?.message?.toString()}</span>
       </div>
        
        <button type="submit" className="text-white bg-[#019be6] py-2 rounded text-xl font-regular">Enviar</button>
        </form>
        </div>

        <div className="mt-6"><span>ainda não tem uma conta? <button className="text-[#019be6]" onClick={handleRegisterOrLogin}>Registre-se aqui</button></span></div>
        <Image src={Disc} alt="" className="absolute right-0 w-[130px] z-10 max-[1024px]:hidden"/>
        <Image src={MobileDisc} alt="" className="absolute bottom-0 w-[250px] z-10 min-[1025px]:hidden"/>
        </div>
    )
}