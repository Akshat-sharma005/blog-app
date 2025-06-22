import React from "react";
import { Link, useNavigate } from "react-router";
import { data } from "./Context";
import { hashPassword, verifyPassword } from "./Encrypt";
import LoggedInAuth from "./LoggedInAuth";
import GoogleLoginBtn from "./GoogleLoginBtn";

function Login() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, loginDetails, setIsLogin, isLogin } =
    data();

  const onInput = (e, field) => {
    setCurrentUser({ ...currentUser, [field]: e.target.value });
  };
  const onSubmit = async () => {
     const user1 = loginDetails.find((v) => {
        return currentUser.email == v.email;
      });
    if(user1?.loggedInBy=="google"){
        alert("please login using google")
    }
    if (currentUser.password && currentUser.email) {
      const user = loginDetails.filter((v) => {
        return currentUser.email == v.email;
      });
      
      if (user.length) {
        const verified = await verifyPassword(
        currentUser.password,
        user[0].password
      );
        
      
      
      console.log(verified);

      if (user[0]?.email && verified) {
        setIsLogin(true);
        setCurrentUser({ ...user[0] });
        sessionStorage.setItem("currUser",JSON.stringify({...user[0]}))
        sessionStorage.setItem("isLoggedIn" ,JSON.stringify(true))
        navigate("/", { replace: true });
      }
      else {
        alert("Wrong Email or password");
      }
      }else{
        alert("wrong email")
      }
        
    } else {
      alert("all fields required");
    }
  };

  return (
    <div className="flex items-start justify-center text-emerald-50 h-screen w-screen translate-y-2/12">
      <div className="sm:xxl  md:w-xl  md:max-w-3/5 ml-2 mr-2 bg-neutral-900 rounded-2xl p-8 py-5 flex flex-col gap-4  ">
        <div>
          <h3>Login to your Account</h3>
          <p className="text-neutral-500">
            Enter your email below to login to your account{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              onChange={(e) => onInput(e, "email")}
              placeholder="Enter your email"
              type="email"
              id="email"
              className=" bg-neutral-800 border-1 border-neutral-600 rounded-lg px-2 w-full h-9"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="email">Password</label>
              <Link to={"/forgotPass"} className="text-neutral-500 text-sm">
                Forgot your password?
              </Link>
            </div>

            <input
              onChange={(e) => onInput(e, "password")}
              placeholder="Enter your password"
              type="email"
              id="email"
              className=" bg-neutral-800 border-1 border-neutral-600 rounded-lg px-2 w-full h-9"
            />
          </div>
        </div>
        <div className="mt-2 flex flex-col items-center gap-2">
          <button
            onClick={onSubmit}
            className="bg-emerald-50 text-neutral-900 rounded-lg w-full h-8 hover:"
          >
            Login
          </button >
          <div className="" ><GoogleLoginBtn/></div>
          
          <p>
            Don't have account?{" "}
            <Link className="border-b-1 " to={"/signup"}>
              {" "}
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoggedInAuth( Login)
