'use client'
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
type Props = {
    children: any
};

const Protected = (props: Props) => {
    const router = useRouter();
    useEffect(()=>{
        if(!localStorage.getItem('user')){
          router.push('/')
        }
      },[])
  return <>
  {props.children}
  </>;
};

export default Protected;
