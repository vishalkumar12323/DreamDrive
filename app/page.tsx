import { Filters } from "./components/Filters";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl w-full mx-auto mb-4">
        <Filters />
      </main>
      <Footer />
    </>
  );
};

export default Page;
