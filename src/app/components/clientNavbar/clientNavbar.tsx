"use client";
import { usePathname } from "next/navigation";
import Navbar from "../navbar/Navbar";

export default function ClientNavbar() {
  const pathname = usePathname();
  return pathname !== "/" ? <Navbar /> : null;
}
