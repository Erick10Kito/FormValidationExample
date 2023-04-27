import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import { object, string } from "yup";
import Image from "next/image";

import Disc from '../assets/VinilDisc.png'
import Login from "@/components/LoginForm";
import Registro from "@/components/RegisterForm";
import Layout from "@/components/Layout";



export default function Home() {
  
  

  return (
    <div className="h-screen w-full">

     <Layout/>
      

    </div>
  )
}
