import { StrictMode, useState } from "react"
import { toast } from "react-toastify"
import { createBrowserRouter } from "react-router-dom"


export default function App(){
  const [email, setEmail] = useState("")
  const [Password,setPassword] = useState("")

  function login(event) {
    event.preventDefault()

    if(email === "" || Password === "") {
      toast.error("Email e senha são obrigatórios!")
      return
    }

    if(Password.length < 8) {
      toast.error ("a senha deve ter no mínimo 8 caracteres!")
        return
    }

   toast.success("Login realizado com sucesso!")
  }

  return(
    <div className="w-full h-screen bg-[url('../public/imagem-netflix.jpg')]">
      <div className="w-full h-full bg-black/50 flex items-center justify-center">
       <img src="/public/netflix-logo.svg" alt="" width="200px" className="absolute top-5 left-[300px]"/>
        <div className="w-[500px] h-auto min-h-[400px] bg-black/70 py-[50px] px-[60px]">
        <h1 className="text font-bold text-[29px]">Sign In</h1>

        <form 
        onSubmit={login} 
        className="flex flex-col gap-[20px] mt-[20px]">
          
          <input 
            onChange={
              (event) => setEmail(event.target.value)
            }
            type= "email" 
            placeholder="Email or mobile number"
            className="w-full h-[40px] px-3 bg-[#2727276a] border border-gray-400"
          />
          <input 
            onChange={
              (event) => setPassword(event.target.value)
            }
            type="Password" 
            placeholder="Password"
            className="w-full h-[40px] px-3 bg-[#2727276a] border border-gray-400"
          />
          <button 
            type="submit" 
            className="w-full h-[40px] bg-[#E50816]
            rounded-sm border-none font-bold cursor-pointer">
              Sign In
          </button>

          <h1 className="w-full h-ful flex items-center justify-center">OR</h1>

          <button 
            type="submit" 
            className="w-full h-[40px] bg-[#7771716a]
            rounded-sm border-none font-bold cursor-pointer">
              Use a Sign-In Code
          </button>

            <div className="w-full flex justify-center">

            
          <a
            href="https://netflix.com"
            className="underline">
              Forgot Password?
          </a>
          </div>

        </form>
        </div>
      </div>
    </div>
  )
}