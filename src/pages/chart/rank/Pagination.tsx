import React, { SetStateAction } from 'react';
import ReactPaginate from 'react-paginate';

type PageProps = {
  rankLeng: number;
  setPage: React.Dispatch<SetStateAction<number>>;
};

/** 24/06/09 - ranking pagination */
export default function Pagination({ rankLeng, setPage }: PageProps) {
  const pagePerTotal = Math.ceil(rankLeng / 20);
  const pageList = Array.from(Array(pagePerTotal), (_, idx) => idx + 1);

  return (
    <ReactPaginate
      containerClassName='flex gap-3'
      pageClassName='bg-gray-100'
      pageLinkClassName='py-1 px-2 rounded'
      activeLinkClassName='text-white font-bold bg-yellow-400 rounded'
      pageRangeDisplayed={5}
      previousLabel={null}
      nextLabel={null}
      onPageChange={(e) => {
        setPage(e.selected + 1);
      }}
      breakLabel='...'
      pageCount={pageList.length}
    />
  );
}
