import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const loading = false;

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // 1:50:36

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center justify-center gap-4 min-h-screen"
      >
        <h1 className="text-3xl font-bold text-center">Sign In</h1>
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
          Don't have an account{" "}
          <Link className="text-blue-500 text-sm" to={"/sign-up"}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
