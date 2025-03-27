import React from "react";
import SignInForm from "../components/SignInForm";

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Tech-themed background elements */}
          <div className="absolute top-[10%] left-[15%] w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-[40%] right-[10%] w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[20%] left-[25%] w-40 h-40 bg-indigo-500 rounded-full blur-3xl"></div>

          {/* Circuit-like patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="border-t border-l border-white/20 h-full"
                ></div>
              ))}
            </div>
            <div className="grid grid-rows-12 gap-4 w-full absolute inset-0">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="border-r border-b border-white/20 w-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">Tech Explorer</h1>
          <p className="text-blue-200">Discover the future of technology</p>
        </div>

        <SignInForm />

        <div className="mt-8 text-center text-sm text-blue-200">
          <p>
            © {new Date().getFullYear()} Tech Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
