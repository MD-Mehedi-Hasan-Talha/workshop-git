import Image from "next/image";
import Link from "next/link";
import React from "react";

const SinginPage = () => {
  return (
    <main className="h-screen bg-[#fbfcff] md:p-12 p-4 flex items-center justify-center">
      <div className="bg-[white] text-black m-auto md:w-[800px] w-full md:min-h-auto md:rounded-none rounded-md overflow-hidden shadow-lg grid md:grid-cols-2">
        <div className="order-2 bg-primary text-white w-full p-9 h-full md:block hidden">
          <Image
            width={400}
            height={400}
            src="/vct2.svg"
            className="w-[260px] m-auto"
            alt="vectors "
          />
          <h1 className="text-white text-4xl font-[100] text-center">
            Daily Shop
          </h1>
        </div>
        <form className="order-1 p-9">
          <h1 className="font-bold text-3xl">Login</h1>
          <p className="text-[#5E5E5E] mt-2">
            Login with your email and password
          </p>
          {/* <!-- email input --> */}
          <div className="mt-5">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border w-full h-10 px-3 py-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            />
          </div>
          {/* <!-- password input --> */}
          <div className="mt-6">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border w-full h-10 px-3 py-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="w-4 h-4"
              />
              <label htmlFor="remember" className="text-[#5E5E5E]">
                Remember me
              </label>
            </div>

            <Link
              href="#"
              className="text-primary hover:underline hover:text-dark_primary"
            >
              Forgot Password ?
            </Link>
          </div>

          <button
            className="bg-primary hover:bg-dark_primary duration-300 border w-full h-10 px-3 py-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-6"
            type="submit"
          >
            Sign In
          </button>
          <div className="text-center m-auto mt-3">
            Don&apos;t have an account ?{" "}
            <Link
              href="/sign-up"
              className="text-primary hover:underline hover:text-dark_primary"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SinginPage;
