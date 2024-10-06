"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const contact = () => {
    const router = useRouter();
    return (
        <>
        <h1>You are in Contact page</h1>
        <Link href="/">Go Back To Homepage!</Link>

        <button onClick={() => router.push("/")}></button>
        </>
    )
}

export default contact;