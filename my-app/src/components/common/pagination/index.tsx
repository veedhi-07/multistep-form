"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

function PaginationComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-y-auto sm:justify-center">
      <Pagination
        layout="table"
        currentPage={currentPage}
        itemsPerPage={10}
        totalItems={2}
        // totalPages={2}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}
export default PaginationComponent;
