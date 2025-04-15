import KALogo from "../assets/K&A.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[url(./assets/banner.png)] bg-no-repeat bg-cover bg-center h-screen p-5">
        <img src={KALogo} alt="K&A Logo" className="h-10 w-auto" />
      </div>
      <div className="bg-[var(--primary-color)] p-5 flex flex-col items-center justify-center gap-3">
        <h1 className="text-3xl font-bold text-white">Login</h1>
        <p className="text-white">Hello again, we are glad to have you back!</p>
        <form action="" className="flex flex-col w-[65%]">
          <label htmlFor="email" className="text-white">
            Enter your email address
          </label>
          <input
            type="email"
            placeholder="John.smith@gmail.com"
            className="bg-white p-[0.5rem_1rem] rounded-sm mb-5"
          />
          <label htmlFor="email" className="text-white">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="bg-white p-[0.5rem_1rem] rounded-sm mb-2"
          />
          <Link
            to="/"
            className="text-[var(--accent-color)] font-sm text-right mb-4"
          >
            Forgot password
          </Link>
          <button className="bg-[var(--accent-color)] p-[0.5rem_1rem] rounded-sm font-bold uppercase text-[var(--primary-color)]">
            Login
          </button>
        </form>
        <p className="text-[#fefefe59]">or log in with</p>
        <button
          type="button"
          className="border-1 border-[var(--accent-color)] p-[0.5rem_1rem] rounded-sm font-bold uppercase text-[var(--accent-color)]"
        >
          <img src="" alt="" />
          Google
        </button>
      </div>
    </div>
  );
}

export default Login;
