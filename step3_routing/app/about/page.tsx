"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const about = () => {
    const router = useRouter();
    return (
        <>
        <h1>You are in About page</h1>
        <Link href="/">Go Back To Homepage!</Link>

        <button onClick={() => router.push("/")}></button>
        </>
    )
}

export default about;