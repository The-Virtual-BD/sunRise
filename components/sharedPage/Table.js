import React from "react";
import { useTable, usePagination, useSortBy, useGlobalFilter } from "react-table";
import { RiSearchLine } from "react-icons/ri";
import Pagination from "./Pagination";



export function GlobalFilter({ filter, setFilter }) {
    return (
        <>
            <div className="flex  items-center  py-2 px-2 rounded-lg bg-mainBg  shadow-md border-[1px] border-cardBg">
                <RiSearchLine className="text-2xl mr-2  text-white  " />
                <input
                    type="text"
                    placeholder="Search..."
                    value={filter || ""} onChange={(e) => setFilter(e.target.value)}
                    className=" rounded-md outline-none py-2 p-2 bg-mainBg  text-white " />
            </div>
        </>
    );
}


function Table({ columns, data, headline }) {
    const memoisedColumns = React.useMemo(() => {
        return columns;
    }, [columns]);

    const memoisedData = React.useMemo(() => {
        return data;
    }, [data]);

    const tableInstance = useTable({
        columns: memoisedColumns,
        data: memoisedData,
    });

    // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter },
        setGlobalFilter
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination,

    )

    return (
        <div className="rounded-md bg-cardBg  lg:p-3 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3  w-full px-10  pt-5">
                <h2 className="text-3xl text-white">{headline}</h2>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>


            <div className="p-3 rounded-md  overflow-hidden overflow-x-auto ">
                <table {...getTableProps()} className=" w-full pt-5  h-auto ">
                    <thead className="">
                        {headerGroups.map((headerGroup, ind) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={ind} >
                                {headerGroup.headers.map((column, i) => (
                                    <th key={i} {...column.getHeaderProps(column.getSortByToggleProps())} className="bg-cardBg text-primary  text-center   p-3 ">{column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>


                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row, i)
                            return (
                                (i % 2 == 1) ? <tr {...row.getRowProps()} key={i} className="m-2 p-2 text-center ">
                                    {row.cells.map((cell, i) => {
                                        return <td key={i} {...cell.getCellProps()} className="m-2 p-2 text-center capitalize  bg-cardBg text-white ">{cell.render('Cell')}</td>
                                    })}
                                </tr> :
                                    <tr {...row.getRowProps()} key={i} className="m-2 p-2 text-center">
                                        {row.cells.map((cell, i) => {
                                            return <td key={i} {...cell.getCellProps()} className="m-2 p-2 text-center capitalize bg-gray-800 text-white ">{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            {/* <div className="flex items-center justify-between ">
                <div className="">
                    <select className="rounded-md bg-cardBg p-3 px-5 text-white "
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20, 30, 40, 50, 100].map(pageSize => (
                            <option key={pageSize} value={pageSize} className="bg-cardBg text-white p-6  ">
                                Show {pageSize}
                            </option>
                        ))}
                    </select>&nbsp;
                </div>


                <div className="pagination p-2 py-3  float-right ">
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="p-2 bg-cardBg text-white rounded-md px-4  font-extrabold " >
                        {'<<'}
                    </button>{' '}
                    <button onClick={() => previousPage()} disabled={!canPreviousPage} className="p-2 bg-cardBg text-white rounded-md px-4   font-extrabold ">
                        {'<'}
                    </button>{' '}
                    <span className='bg-cardBg text-white rounded-md px-4 py-3'>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>&nbsp;
                    <button onClick={() => nextPage()} disabled={!canNextPage} className="p-2 bg-cardBg text-white rounded-md px-4  font-extrabold ">
                        {'>'}
                    </button>{' '}
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="p-2 bg-cardBg text-white rounded-md px-4   font-extrabold  ">
                        {'>>'}
                    </button>{' '}



                </div>

            </div> */}

            <div>
                <Pagination
                    gotoPage={gotoPage}
                    length={data.length}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                />
            </div>

        </div>
    );
}

export default Table;
