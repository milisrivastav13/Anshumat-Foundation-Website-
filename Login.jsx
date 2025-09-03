import React from "react";

function Login() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-6">
        {/* Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg card-neon animate-fadeUp">
          <h2 className="text-4xl font-heading text-blue-600 mb-6 text-center glow-text">
            Login 
          </h2>
          <p className="text-gray-700 mb-8 text-center animate-fadeUp delay-200">
            Enter your credentials to access your account
          </p>

          <form className="grid gap-5 text-left">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Signup
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;

















