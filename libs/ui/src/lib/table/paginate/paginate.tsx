// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import colors from '@ui/styles/colors';
import cn from 'classnames';
import { ChevronLeft, ChevronRight } from '../../icons';
import Typography from '../../typography/typography';

/* eslint-disable-next-line */
export interface PaginateProps {
    className?: string,
    totalPerPage: number,
    totalItems: number,
    currentPage: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleTotalPerPageChange: (e: any) => void,
    handlePageChange: (value: number) => void
}

export function Paginate({
    className = '', totalPerPage, totalItems, currentPage, handleTotalPerPageChange, handlePageChange
}: PaginateProps) {
    return (
        <div className='flex flex-row gap-9 items-center justify-end'>
            <div className='flex flex-row'>
                <Typography color='text-N700'>Rows per page: </Typography>
                <select onChange={handleTotalPerPageChange} value={totalPerPage} className='outline-none text-N800'>
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </div>

            <Typography color='text-N700'>
                {(currentPage * totalPerPage + 1) - totalPerPage}-{currentPage * totalPerPage > totalItems ? totalItems : currentPage * totalPerPage} of {totalItems}
            </Typography>

            <div className='flex flex-row gap-4'>
                <div
                    onClick={!(currentPage <= 1) ? () => handlePageChange(currentPage - 1) : undefined}
                    className={cn({ 'hover:cursor-pointer': !(currentPage <= 1) })}>
                    <ChevronLeft size={16} color={colors[(currentPage <= 1) ? 'N500' : 'N800']} />
                </div>
                <div
                    onClick={!((currentPage * totalPerPage) < totalItems) ? undefined : () => handlePageChange(currentPage + 1)}
                    className={cn({ 'hover:cursor-pointer': ((currentPage * totalPerPage) < totalItems) })}>
                    <ChevronRight size={16} color={colors[((currentPage * totalPerPage) < totalItems) ? 'N800' : 'N500']} />
                </div>
            </div>
        </div>
    );
}

export default Paginate;
