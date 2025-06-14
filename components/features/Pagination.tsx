"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/elements/button"

export const Pagination = ({ totalPage }: { totalPage: number }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <nav aria-label="Page navigation example" className="text-white">
      <div className="inline-flex -space-x-px text-base h-10 gap-2">
        <Button
          variant={"outline"}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${currentPage === 1
            ? "cursor-not-allowed bg-gray-600"
            : "cursor-pointer"
            } flex items-center justify-center px-4 h-10 ms-0 leading-tight text-black dark:text-white`}
        >
          Previous
        </Button>
        {[...Array(totalPage).fill(0)].map((_, idx) => {
          return (
            <Button
              variant={"outline"}
              key={idx}
              disabled={Number(searchParams.get("page")) === idx + 1}
              onClick={() => handlePageChange(idx + 1)}
              className={`${Number(searchParams.get("page")) === idx + 1
                ? "cursor-not-allowed"
                : "cursor-pointer"
                } flex items-center justify-center px-4 h-10 ms-0 leading-tight text-black dark:text-white`}
            >
              {idx + 1}
            </Button>
          );
        })}
        <Button
          variant={"outline"}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === 1}
          className={`${currentPage === totalPage ? "cursor-not-allowed" : "cursor-pointer"
            } flex items-center justify-center px-4 h-10 ms-0 leading-tight text-black dark:text-white`}
        >
          Next
        </Button>
      </div>
    </nav>
  );
};
