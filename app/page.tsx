import { Container } from "./components/Container";
import { Filters } from "./components/Filters";
import { Card } from "./components/Card";
import { CardHeader } from "./components/CardHeader";
import { Pagination } from "./components/Pagination";
import { Suspense } from "react";
import { Loading } from "./components/Loading";

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

  return (
    <>
      <main className="max-w-screen-xl w-full min-h-screen mx-auto mb-4 flex flex-col md:flex-row gap-2 md:gap-6  p-4 lg:p-1">
        <Filters />
        <Container>
          <CardHeader />
          <Suspense fallback={<Loading />}>
            <Card queryString={queryString} />
          </Suspense>
          <Pagination totalPage={3} />
        </Container>
      </main>
    </>
  );
};

export default Page;
