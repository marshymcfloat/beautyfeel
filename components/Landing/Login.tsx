"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <p
      className={
        pathName === "/login"
          ? "absolute top-0 left-0 m-4 cursor-pointer tracking-widest underline"
          : "absolute top-0 right-0 m-4 cursor-pointer tracking-widest underline"
      }
      onClick={() => {
        if (pathName === "/login") {
          router.back();
        }
        router.push("/login");
      }}
    >
      {pathName === "/login" ? "back" : "login"}
    </p>
  );
}
