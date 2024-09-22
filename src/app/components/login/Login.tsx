"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "./Login.module.css"


export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // ONLY FOR DEMOSTRATIVE EXAMPLE! We'll always verify credentials in the server side with bcrypt and hash and not in the client side.
        if (username === 'admin' && password === '1234') {
            // We set the token if the credentials are correct then after 2 hours the token will be 
            Cookies.set('auth-token', 'valid-token', { expires: 1 / 12 });
            router.push('/dashboard');
        } else {
            alert('Credenciales incorrectas');
        }
    }

    return(
        <div className={styles.loginContainer}>
        <div className="flex-col mt-7">
            <p className="flex flex-row items-center justify-around">This is a demo app, to login type in the fields &apos;user&apos; in username and &apos;1234&apos; in password</p>
        </div>
        <div className='max-w-md mx-auto bg-gray-300 rounded-lg shadow-lg p-8 mt-10 flex-col h-full items-center'>
           <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1> 
           <form className='space-y-4' onSubmit={handleLogin}>
            <input
            className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            <input
            className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <button type="submit" className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'>Log in</button>
           </form>
        </div>
        </div>
    )
};
