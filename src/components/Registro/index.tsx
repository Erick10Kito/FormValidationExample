import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image"
import { boolean, object, ref, string } from "yup";
import { IRegisterOrLogin } from "../Login";
import { useForm } from "react-hook-form";
import Disc from '../../assets/VinilDisc.png'
import { cpf } from "cpf-cnpj-validator";
import MobileDisc from '../../assets/VinilDiscMobile.png'

interface IObjectRegister {
    name: string;
    surname: string;
    email:string;
    cpf:string;
    password:string;
    passwordConfirmation: string
    terms: boolean
  }

const schema = object<IObjectRegister>({
    name:string().required("Campo obrigatorio").min(3,"Numero de caracteres invalido"),
    surname:string().required("Campo obrigatorio").min(3,"Numero de caracteres invalido"),
    email:string().required("Campo obrigatorio").min(6,"Numero de caracteres invalido").email("Isso não é um email"),
    cpf:string().test('test-invalid-cpf','CPF Invalido',(value) => value ? cpf.isValid(value) : true ),
    password:string().required("Campo obrigatorio").min(6,"Numero de caracteres invalido").matches(/^(?=.*[0-9])/, 'Deve conter pelo menos um numero').matches(/^(?=.*[a-z])/, 'Deve conter pelo menos uma letra'),
    passwordConfirmation:string().oneOf([ref('password')], 'Senhas são diferentes'),
    terms: boolean().oneOf([true], "Os termos não foram aceitos")
  })

export default function Registro({handleRegisterOrLogin}:IRegisterOrLogin) {

    const {register, handleSubmit:onSubmit, watch, formState:{errors}} = useForm({resolver:yupResolver(schema)})

    function handleSubmitLogin(data:any) {
        console.log(data)
    
      }
    return(
        <div className="bg-white flex flex-col justify-center items-center w-[80%] h-[80%] rounded-tl rounded-bl max-[1024px]:w-[95%] max-[1024px]:h-[95%] max-[1024px]:px-3">
        <div className="bg-[#019be6] mb-6 flex items-center justify-center w-[400px] h-12 rounded-full max-[479px]:w-full">
        <h1 className="text-white ">REGISTRE-SE</h1>
        </div>
      <form action="" className=" w-[550px] z-20 max-[768px]:w-full" onSubmit={onSubmit(handleSubmitLogin)}>
       <div className="grid grid-cols-2 gap-3 max-[768px]:grid-cols-1">
        <div className="form-group">
        <input type="text" id="name" className="w-full bg-slate-100 h-10 px-2 rounded" placeholder='Seu Nome' {...register("name")}/>
        <span className="text-red-500">{errors?.name?.message?.toString()}</span>
       </div>
       <div className="form-group">
        <input type="text" id="surname" className="w-full bg-slate-100 h-10 px-2 rounded" placeholder="Seu Sobrenome" {...register("surname")}/>
        <span className="text-red-500">{errors?.surname?.message?.toString()}</span>
       </div>
       <div className="form-group">
        <input type="text" id="email" className="w-full bg-slate-100 h-10 px-2 rounded" placeholder='Seu e-mail' {...register("email")}/>
        <span className="text-red-500">{errors?.email?.message?.toString()}</span>
       </div>
       <div className="form-group">
        <input type="text" id="cpf" className="w-full bg-slate-100 h-10 px-2 rounded" placeholder='Seu CPF' {...register("cpf")}/>
        <span className="text-red-500">{errors?.cpf?.message?.toString()}</span>
        
       </div>
       <div className="form-group">
        <input type="password" id="password" className="w-full bg-slate-100 h-10 px-2 rounded" placeholder='Sua Senha' {...register("password")}/>
        <span className="text-red-500">{errors?.password?.message?.toString()}</span>
       </div>
       <div className="form-group">
        <input type="password" id="passwordConfirmation" className="w-full bg-slate-100 h-10 px-2 rounded" placeholder='Confirme sua senha' {...register("passwordConfirmation")}/>
        <span className="text-red-500">{errors?.passwordConfirmation?.message?.toString()}</span>
       </div>
       <div className="">
        <div className="form-group"><input type="checkbox" id="terms" {...register("terms")}/>
        <label htmlFor="" className="ml-1">Concordo com os termos</label></div>
        <span className="text-red-500">{errors?.terms?.message?.toString()}</span>
       </div>
       </div>
        
        <button type="submit" className="text-white bg-[#019be6] py-2 rounded text-xl font-regular w-full mt-4">Registrar</button>
        <div className=""><span className="text-left">Ja tem conta? <button className="text-[#019be6]" onClick={handleRegisterOrLogin}>Logue aqui</button></span></div>
        </form>

        
        <Image src={Disc} alt="" className="absolute right-0 w-[130px] z-10 max-[1024px]:hidden"/>
        <Image src={MobileDisc} alt="" className="absolute bottom-0 w-[250px] z-10 min-[1025px]:hidden"/>
        </div>
    )
}