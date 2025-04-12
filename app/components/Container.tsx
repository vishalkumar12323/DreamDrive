import React from "react";

export const Container = async ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <section className="py-3 md:py-6 w-full h-full">
      <div className="w-full min-h-screen h-auto flex flex-col gap-3">
        {children}
      </div>
    </section>
  );
};
