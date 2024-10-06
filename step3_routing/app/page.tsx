"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <>
    <h1>Homepage!</h1> <br />

    <Link href="/about">Go to About Page</Link> <br />
    <Link href="/contact">Go to Contact Page</Link>

    <button onClick={() => router.push("/about")}></button>
    <button onClick={() => router.push("/contact")}></button>
    </>
  );
}
