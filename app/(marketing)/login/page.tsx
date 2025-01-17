"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import InputGroup from "@/components/Landing/loginPage/InputGroup";
import Login from "@/components/Landing/Login";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleFormData(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function fetchData(data: { username: string; password: string }) {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "There was an error during login.");
    }

    return response.json();
  }

  const { mutate, isError, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: fetchData,
    onSuccess: (data) => {
      router.push(`/${data.accountID}`);
    },
    onError: (error: Error) => {
      setErrorMessage(error.message);

      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    },
  });

  function handleSubmission(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage(null);
    mutate(formData);
  }

  return (
    <main className="flex bg-custom-gradient bg-[length:200%_200%] animate-gradient h-screen">
      <Login />
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/btfeel.png"
          className="w-[600px] h-[600px]"
          alt="beautyfeel-logo"
        />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <form
          onSubmit={handleSubmission}
          className="shadow-2xl w-[50%] flex flex-col justify-evenly h-[40%] rounded-xl bg-customBrown relative"
        >
          <div className="h-[50%] flex items-center flex-col justify-around">
            <InputGroup
              label={"username"}
              name="username"
              value={formData.username}
              onChange={handleFormData}
            />
            <InputGroup
              label={"password"}
              name="password"
              type="password"
              value={formData.password}
              onChange={handleFormData}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-customOffWhite border-2 tracking-widest text-customBlack px-2 py-2 rounded min-w-[120px] ${
                isPending ? "bg-gray-400 cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isPending}
            >
              {isPending ? "logging..." : "login"}
            </button>
          </div>
          {errorMessage && (
            <div className="text-red-500 mt-2 text-center absolute top-3 font-bold left-0 right-0">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
