export interface PaginationProps {
    onChange: (value: number) => void,
    currentPage: number,
    itemsPerPage: number,
    totalItems: number,
    className?: string,
}

export function Pagination({ className, onChange, currentPage, itemsPerPage, totalItems }: PaginationProps) {
    const MAX_PAGE_BTNS = 9;
    const pageCount = Math.ceil(totalItems / itemsPerPage);
    if (pageCount <= 1) return <></>;

    const isInAMiddlePage = 4 <= currentPage && currentPage <= pageCount - 3;

    let pageArray: number[] = [];
    if (pageCount <= MAX_PAGE_BTNS) {
        for (let i = 1; i <= pageCount; i++)
            pageArray.push(i);
    } else {
        pageArray = [
            1,
            isInAMiddlePage ? -1 : 2,
            isInAMiddlePage ? currentPage - 2 : 3,
            isInAMiddlePage ? currentPage - 1 : 4,
            isInAMiddlePage ? currentPage : -1,
            isInAMiddlePage ? currentPage + 1 : pageCount - 3,
            isInAMiddlePage ? currentPage + 2 : pageCount - 2,
            isInAMiddlePage ? -1 : pageCount - 1,
            pageCount
        ];
    }


    return (
        <nav className={className}>
            <ul className="flex gap-2 text-primary text-sm font-medium">
                {pageArray.map((page, index) => (
                    <li key={`pagination-${index}-${page}`} className={`rounded-md ${page === currentPage && 'bg-primary text-white'} px-3 py-2`} >
                        {page === -1 ? <a>...</a> : <a target="_self" href={`?pagination=${page}`} onClick={() => onChange(page)}>{page}</a>}
                    </li>
                ))}
            </ul>
        </nav>
    );
}