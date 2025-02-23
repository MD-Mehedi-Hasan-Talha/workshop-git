import Image from "next/image";
import React from "react";

const SignupPage = () => {
  return (
    <main className="h-screen bg-[#fbfcff] md:p-12 p-4 flex items-center justify-center">
      <div className="bg-[white] text-black m-auto md:w-[900px] w-full md:min-h-[530px] md:rounded-none rounded-md overflow-hidden shadow-lg grid md:grid-cols-2">
        <div className="bg-primary text-white w-full p-9 h-full md:block hidden">
          <Image src="/vct2.svg" alt="vectors" width={400} height={400} />
          <h1 className="text-white text-5xl font-[100] text-center">
            Daily Shop
          </h1>
        </div>
        <form className="p-9">
          <h1 className="font-bold text-3xl">Sign Up</h1>
          <p className="text-[#5E5E5E] mt-2">
            Sign Up with your email and password
          </p>
          {/* <!-- name input --> */}
          <div className="mt-5">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="border w-full h-10 px-3 py-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            />
          </div>
          {/* <!-- email input --> */}
          <div className="mt-5">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border w-full h-10 px-3 py-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            />
          </div>
          {/* <!-- phone input --> */}
          <div className="mt-6">
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
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

          {/* <!-- password input --> */}
          <div className="mt-6">
            <input
              type="password"
              id="retype-password"
              placeholder="Retype Password"
              className="border w-full h-10 px-3 py-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            />
          </div>

          <button
            className="bg-primary hover:bg-dark_primary duration-300 border w-full h-10 px-3 py-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-6"
            type="submit"
          >
            Sign Up
          </button>
          <div className="text-center m-auto mt-2">
            Already have an account ?{" "}
            <a
              href="/login"
              className="text-primary hover:underline hover:text-dark_primary"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignupPage;
