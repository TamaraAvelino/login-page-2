import { Link } from "react-router-dom";

export default function Cadastro(){
    return (
        <div className="w-full h-screen">
            <header className="w-full h-[100px] flex items-center px-[40px] justify-between border-b border-gray-300">
                <img src="/netflix-logo.svg" width={"200px"} alt="" />
                <Link to="/" style={
                    {
                        color:"black",
                        fontWeight: "bold"
                    }
                }>Entrar</Link>
            </header>
        </div>
    )
}