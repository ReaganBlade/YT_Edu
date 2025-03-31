import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      This is Auth Layout
      <div className="h-screen flex flex-row">
        <div className="w-full flex justify-center items-center">
          Left Banner space
        </div>
        <div className="w-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
