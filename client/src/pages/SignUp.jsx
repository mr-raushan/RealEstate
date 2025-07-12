import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";

export default function SignUp() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    setLoading(true);
    try {
      const res = await axios.post(`${USER_API_END_POINT}/signup`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        alert(res.data.message);
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center justify-center gap-4 min-h-screen"
      >
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={input.username}
            onChange={changeHandler}
            className="p-1 pr-8 border border-gray-500 pl-2 rounded-md focus:outline-none bg-slate-100 w-32 sm:w-96"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={changeHandler}
            value={input.email}
            className="p-1 pr-8 border border-gray-500 pl-2 rounded-md focus:outline-none bg-slate-100 w-32 sm:w-96"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={changeHandler}
            value={input.password}
            className="p-1 pr-8 border border-gray-500 pl-2 rounded-md focus:outline-none bg-slate-100 w-32 sm:w-96"
          />
        </div>
        <div>
          {loading ? (
            <button className="w-32 sm:w-96 border bg-gray-700 text-white font-medium mt-2 cursor-pointer p-1 rounded-md">
              loading...
            </button>
          ) : (
            <button className="w-32 sm:w-96 border bg-gray-700 text-white font-medium mt-2 cursor-pointer p-1 rounded-md">
              Sign Up
            </button>
          )}
        </div>
        <div className="bg-red-500 text-white font-medium mt-2 cursor-pointer p-1 text-center rounded-md w-32 sm:w-96">
          Continue with Google
        </div>
        <div>
          Have an account{" "}
          <Link className="text-blue-500 text-sm" to={"/sign-in"}>
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
