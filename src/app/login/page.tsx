"use client";
import React, {useState} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "axios";


export default function LoginPage(){
    const [user,setUser] =  useState({
        email: "",
        // username:"",
        password:""
    })

    const onLogin = async ()=>{

    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Login</h1>
        <hr/>



        <label htmlFor="email">email</label>
        <input
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        placeholder="email"
        type="text"
        value={user.email}
        onChange={(e)=> setUser({...user, email: e.target.value})} // keep user same and only username is getting updated
        />

        <label htmlFor="password">password</label>
        <input
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        placeholder="password"
        type="password"
        value={user.password}
        onChange={(e)=> setUser({...user, password: e.target.value})} // keep user same and only username is getting updated
        />

        <button
        onClick={onLogin}
         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login</button>
         <Link href="/signup">Signup page</Link>
        </div>
    )
}