"use client"
import { useContext, useEffect, useState } from 'react';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

export default function Navbar() {
    useEffect(() => {
      }, []);
    
    return <nav className="nav bg-background shadow-md">
        <a href="/" className="text-4xl text-accent p-5">Logo</a>
        <ul>
            <li className='hover:bg-gray-700'>
                <a className='text-accent' href="/">Home</a>
                </li>
            <li className='hover:bg-gray-700'>
                <a className='text-accent' href="/dashboard">Dashboard</a>
            </li>
            <li className='hover:bg-gray-700'>
                <a className='text-accent' href="/about">About</a>
            </li>
            <li>
            <ThemeSwitcher></ThemeSwitcher>
            </li>
        </ul>
    </nav>
}