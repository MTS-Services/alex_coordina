import React from "react";

export default function Custom404() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
    </div>
  );
}
