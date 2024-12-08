'use client'
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function SignInButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  return (
    <Link href={"/login"}>
        <Button onClick={() => setIsLoading(true)}>{isLoading ? <Spinner/> : "Login"}</Button>
    </Link>
  );
}
