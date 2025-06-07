import React from "react";
import { Spinner } from "@/components/icons";

export const Loading = () => {
  return (
    <div
      role="status"
      className="w-full min-h-[75vh] h-full flex justify-center items-center"
    >
      <Spinner />
      <span className="sr-only">Loading</span>
    </div>
  );
};
