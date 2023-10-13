"use client";
import React, {useState} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "axios";


export default function SignUpPage(){
    const [user,setUser] =  useState({
        email: "",
        username:"",
        password:""
    })

    const onSignup = async ()=>{

    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>SignUp</h1>
        <hr/>

        <label htmlFor="username">username</label>
        <input
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="username"
        placeholder="username"
        type="text"
        value={user.username}
        onChange={(e)=> setUser({...user, username: e.target.value})} // keep user same and only username is getting updated
        />

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
        onClick={onSignup}
         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"> Signup</button>
         <Link href="/login">Login page</Link>
        </div>
    )
}