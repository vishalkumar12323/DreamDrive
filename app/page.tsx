import { Container } from "@/components/layout/Container";
import { Card } from "@/components/cards/Card";
import { CardHeader } from "@/components/cards/CardHeader";
import { Pagination } from "@/components/features/Pagination";
import { Suspense } from "react";
import { Loading } from "@/components/layout/Loading";
import { Filters } from "@/components/features/Filters";
import { getCarData } from "@/app/handlers";

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
    }, {} as Record<string, string>)).toString();
  const data = await getCarData(queryString);
  const view = Array.isArray(params.view) ? params.view[0] : params.view || "list";

  return (
    <>
      <main className="max-w-screen-xl w-full min-h-screen mx-auto mb-4 flex flex-col md:flex-row gap-2 md:gap-6  p-2 md:p-4 lg:p-1">
        <Suspense fallback={<Loading />}>
          <Filters />
        </Suspense>

        <Container>
          <CardHeader />
          <Suspense fallback={<Loading />}>
            <Card data={data} view={view} />
          </Suspense>
          {
            data && data.length > 0 && (
              <Pagination totalPage={3} />
            )
          }
        </Container>
      </main>
    </>
  );
};

export default Page;
