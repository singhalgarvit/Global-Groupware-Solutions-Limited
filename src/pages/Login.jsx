import React, { useContext } from "react";
import Input from "../components/input";
import SubmitButton from "../components/SubmitButton";
import login from "../api/login.api";
import { AuthContext } from "../context/authContext";
import { LoadingContext } from "../context/loadingContext";

function Login() {
   const {loading,setLoading} = useContext(LoadingContext);
   const {token,setToken} = useContext(AuthContext);
  const handleLogin = async(e) => {
      e.preventDefault();
      setLoading(true)
      const email = e.target.email.value;
      const password = e.target.password.value;
      try{
        const res = await login(email,password);
        setToken(res.token)
        localStorage.setItem("token",res.token)
        setLoading(false)
      }catch(err){
        alert("User Not Found")
        console.log("User Not Found")
        setLoading(false)
      }
      e.target.reset()
    };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <Input id="email" text="Email" />
            <Input id="password" text="Password" />
            <SubmitButton text={loading?"Letting Get You in":"Log In"} disabled={loading}/>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
