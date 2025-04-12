import { Container } from "./components/Container";
import { Filters } from "./components/Filters";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { CardHeader } from "./components/CardHeader";
import { getCarData } from "@/app/handlers/index";
import { Pagination } from "./components/Pagination";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const queryString = new URLSearchParams(
    Object.entries(params).reduce((acc, [key, val]) => {
      acc[key] = Array.isArray(val) ? val.join(",") : val || "";
      return acc;
    }, {} as Record<string, string>)
  ).toString();

  const data = await getCarData(queryString);
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl w-full min-h-screen mx-auto mb-4 flex gap-4 md:gap-6  p-4 lg:p-1">
        <Filters />
        <Container>
          <CardHeader />
          <Card data={data} />
          <Pagination totalPage={data?.length || 3} />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Page;
