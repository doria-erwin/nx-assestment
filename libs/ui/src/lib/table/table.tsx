/* eslint-disable no-prototype-builtins */
import { Loader, NoAvailable, Paginate, Sort, Typography } from "@ui-components";
import cn from 'classnames';
import { ChangeEvent, useEffect, useState } from "react";

export interface IPagination {
    currentPage: number;
    totalPerPage: number;
    sortBy: string;
    isAsc: boolean;
}
export interface TableProps<T> {
    searchKeys?: Array<string>,
    withPagination?: boolean,
    // header key value should match field names
    headers: { key: string, label: string, align?: 'left' | 'right' }[],
    list: T[],
    isLoadingData?: boolean,
    searchValue?: string,
    onPaginate?: (pagination: IPagination) => void,
}

type ObjectValue = { [key: string]: string };

// eslint-disable-next-line @typescript-eslint/ban-types
export const Table = <T extends {}>({
    headers, list = [], withPagination, searchKeys = [], isLoadingData, searchValue, onPaginate,
}: TableProps<T>) => {

    const [sortBy, setSortBy] = useState<typeof searchKeys[number]>(searchKeys[0]);
    const [isAsc, setIsAsc] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPerPage, setTotalPerPage] = useState<number>(10);

    const getSearchData = (arr: Array<ObjectValue>) => {
        if (searchValue) {
            const pattern = new RegExp(searchValue, 'i');

            return arr.filter(item =>
                searchKeys.some(key => pattern.test(item[key]))
            );
        }

        return arr;
    };

    useEffect(() => {
        if (onPaginate) {
            onPaginate({ currentPage, totalPerPage, sortBy, isAsc });
        }
    }, [sortBy, isAsc, currentPage, totalPerPage, onPaginate])

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const sortData = getSearchData(list).sort((a: ObjectValue, b: ObjectValue) => {
        if (isAsc) {
            if (a[sortBy] < b[sortBy]) return -1;
            else if (a[sortBy] > b[sortBy]) return 1;
        } else {
            if (a[sortBy] > b[sortBy]) return -1;
            else if (a[sortBy] < b[sortBy]) return 1;
        }

        return 0;
    });

    const getPagedData = () => {
        return sortData.slice((currentPage - 1) * totalPerPage, currentPage * totalPerPage);
    };

    const handleSort = (key: string) => {
        if (key === sortBy) {
            setIsAsc(!isAsc);
        } else {
            setSortBy(key);
            setIsAsc(true);
        }

        setCurrentPage(1);
    };

    const handlePageChange = (toPage: number) => {
        setCurrentPage(toPage);
    };

    // const handleSearch = useCallback((value: string) => {
    //     setSearchValue(value);
    // }, [setSearchValue]);

    const shouldIndent = (i: number) => {
        return i === 0 || i === headers.length - 1
    }

    const handleTotalPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setTotalPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    return (
        <table className='table-auto border-collapse relative w-full bg-ui-07'>
            <thead className="bg-white border-b border-N100">
                <tr className='border-t border-b border-t-N100 border-b-N100'>
                    {headers.map(({ key, label, align }, i) =>
                        <th className={cn('px-4 py-3 text-left top-0 bg-N75', { 'px-8': shouldIndent(i) })} key={key}>
                            {label
                                ? <div className='flex flex-row items-center justify-start'>
                                    <Typography size='text-sm' color='text-N700' fontWeight='font-black' className={cn({ 'text-right': align === 'right' })}>
                                        {label}
                                    </Typography>
                                    <div onClick={() => handleSort(key)} className='px-1'>
                                        <Sort size={15} isAsc={isAsc} isActive={key === sortBy} />
                                    </div>
                                </div>
                                : null
                            }
                        </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {isLoadingData
                    ? [...Array(5)].map((_, i) =>
                        <tr key={i} className='border-b border-N300 transition'>
                            {headers.map(({ key, align }, i) =>
                                <td className={cn('p-4', { 'px-8': shouldIndent(i) })} key={key}>
                                    <Loader className={cn('h-3 w-1/2 max-w-[11rem] rounded-full', { 'float-right': align === 'right' })} />
                                </td>
                            )}
                        </tr>
                    )
                    : getPagedData().length
                        ? getPagedData().map((item: { [key: string]: string }, i: number) =>
                            <tr key={i} className='border-b border-N300 transition'>
                                {headers.map(({ key, align }, i) =>
                                    <td className={cn('p-4', { 'px-8': shouldIndent(i) })} key={key}>
                                        {item.hasOwnProperty(`${key}Component`)
                                            ? item[`${key}Component`]
                                            : <div className='flex flex-row gap-2 items-center'>
                                                <Typography 
                                                    color='text-N800'
                                                    fontWeight={key === sortBy ? 'font-black' : 'font-normal'}
                                                    className={cn('flex-1', { 'text-right': align === 'right' })}>
                                                    {item[key]}
                                                </Typography>
                                                {item[`${key}SiblingComponent`]}
                                            </div>
                                        }</td>
                                )}
                            </tr>)
                        : <tr className='border-none'>
                            <td colSpan={headers.length} className={'p-4 text-center'}>
                                <NoAvailable
                                    title='No Results Found'
                                    message={'Sorry, we couldn’t find any results that match your search. Please try again\nwith different keywords.'} />
                            </td>
                        </tr>}

                {(withPagination && !isLoadingData && getPagedData().length)
                    ? <tr>
                        <td colSpan={headers.length} className='px-8 py-6'>
                            <Paginate
                                totalItems={getPagedData().length}
                                totalPerPage={totalPerPage}
                                currentPage={currentPage}
                                handleTotalPerPageChange={handleTotalPerPageChange}
                                handlePageChange={handlePageChange} />
                        </td>
                    </tr>
                    : null
                }
            </tbody>
        </table>
    );
}

export default Table;
