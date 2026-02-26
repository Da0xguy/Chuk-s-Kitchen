import { FC, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../assets/Chuks.png";

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex">

      {/* ================= LEFT IMAGE SIDE ================= */}
      <div className="hidden md:flex md:w-1/2 relative">

        {/* Background Image */}
        <img
          src="src/assets/image 11.png"
          alt="Nigerian Food"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Orange Overlay */}
        <div className="absolute inset-0 bg-orange-600/80" />

        {/* Overlay Text */}
        <div className="relative z-10 flex flex-col justify-center px-16 text-white max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Chuks Kitchen
          </h1>

          <p className="text-lg leading-relaxed">
            Your journey to delicious, authentic Nigerian meals starts here.
            Log in to continue ordering your favorites.
          </p>
        </div>
      </div>

      {/* ================= RIGHT LOGIN SIDE ================= */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center px-6">

        <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="px-15">
            <img src={Logo} alt="Chuks Kitchen Logo" className="w-38 h-8" />
            </div>
            <h3 className="text-xl font-semibold mt-1">
              Login to your Account
            </h3>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">
              Email or Phone Number
            </label>
            <input
              type="text"
              placeholder="name@gmail.com"
              className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-200 outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="text-sm text-gray-600">
              Password
            </label>

            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="******"
                className="w-full border border-gray-300 p-3 rounded-lg pr-10 focus:ring-2 focus:ring-orange-200 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <button className="text-xs text-blue-600 hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition">
            Continue
          </button>

          {/* Divider */}
          <div className="my-5 text-center text-sm text-gray-500">
            Or continue with
          </div>

          {/* Google */}
          <button className="w-full border border-gray-300 py-2 rounded-lg mb-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <span className="text-red-500 font-bold">G</span>
            Continue with Google
          </button>

          {/* Apple */}
          <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <span className="font-bold"></span>
            Continue with Apple
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?
            <a href="/signup" className="text-blue-600 cursor-pointer hover:underline ml-1">
              Create an account
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;