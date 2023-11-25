// import library components
import React, { useEffect, useMemo, useState } from 'react'

// import styles file
import './Pagination.scss'

// import custom components


// types definition
type Props = {
    nextClickHandler?: (offset: number | string) => void;
    previousClickHandler?: (offset: number | string) => void;
    totalNumberOfData: number;
    perPage: number;
    currentPage?: number;
    pageClickHandler?: (offset: number | string) => void;
    classNames?: {
        container?: string;
        previousButton?: string;
        nextButton?: string;
        pageContainer?: string;
        pageButton?: string;
        pageActiveButton?: string;
        buttons?: string;
    };
    components?: {
        previousButton?: React.ReactNode;
        nextButton?: React.ReactNode;
        pageButton?: React.ReactNode;
    };
    inlineStyles?: {
        container?: React.CSSProperties;
        previousButton?: React.CSSProperties;
        nextButton?: React.CSSProperties;
        pageContainer?: React.CSSProperties;
        pageButton?: React.CSSProperties;
        pageActiveButton?: React.CSSProperties;
        buttons?: React.CSSProperties;
    }
}

const Pagination = (props: Props) => {

    const { perPage,
        currentPage,
        nextClickHandler,
        previousClickHandler,
        pageClickHandler,
        totalNumberOfData = 0,
        classNames,
        components,
        inlineStyles,
    } = props


    const [currentPageState, setCurrentPageState] = useState(currentPage || 1)
    const totalPages: number = Math.ceil(totalNumberOfData / perPage);


    const pageNavigateHandler = (type: 'back' | 'forward' | 'page', pageNumber: number) => {
        if (Number.isNaN(pageNumber)) return

        if (type === 'back') {
            if (currentPageState > 1) {
                setCurrentPageState(prev => prev - pageNumber)
                previousClickHandler?.(currentPageState)
            }
        } else if (type === 'forward') {
            if (currentPageState < totalPages) {
                setCurrentPageState(prev => prev + pageNumber)
                nextClickHandler?.(currentPageState)
            }
        } else if (type === 'page') {
            setCurrentPageState(prev => pageNumber)
            pageClickHandler?.(currentPageState)
        }
    }

    const getPaginationNumbers = (currentPage: number, totalPages: number): (number | string)[] => {
        const pageNumbers: (number | string)[] = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        const startIndex = Math.max(currentPage - 2, 1);
        const endIndex = Math.min(currentPage + 1, totalPages);

        let showLeftDots = startIndex > 2;
        let showRightDots = endIndex < (totalPages - 2);

        if (!showLeftDots && showRightDots) {
            return [...pageNumbers.slice(0, 7), '...', totalPages];
        }

        if (showLeftDots && !showRightDots) {
            return [1, '...', ...pageNumbers.slice(totalPages - 7)];
        }

        if (showLeftDots && showRightDots) {
            return [1, '...', ...pageNumbers.slice(startIndex - 1, endIndex + 1), '...', totalPages];
        }

        return pageNumbers;
    }

    const pageNumberToRender = useMemo(() => getPaginationNumbers(currentPageState, totalPages), [currentPageState, totalPages])

    useEffect(() => {
        if (currentPage && currentPage !== currentPageState && currentPage <= totalPages && currentPage >= 1) {
            setCurrentPageState(currentPage)
        }
    }, [currentPage])

    return (
        <div
            id='ReactLightPagination'
            className={`pagination-container ${classNames?.container}'`}
            style={inlineStyles?.container}
        >

            <button
                className={`previous-btn block ${classNames?.previousButton} ${classNames?.buttons}`}
                onClick={() => pageNavigateHandler('back', 1)}
                style={{ ...inlineStyles?.previousButton, ...inlineStyles?.buttons }}
            >
                {components?.previousButton || 'Previous'}
            </button>

            <div
                className={`page-numbers-container ${classNames?.pageContainer}`}
                style={inlineStyles?.pageContainer}
            >

                {
                    pageNumberToRender?.map((item, index) => {
                        return (
                            <button
                                onClick={() => pageNavigateHandler('page', Number(item))}
                                key={`${item}${index}`}
                                className={`block page-number ${item === currentPageState && `active ${classNames?.pageActiveButton}`}  ${classNames?.buttons} ${classNames?.pageButton} `}
                                style={{ ...inlineStyles?.pageButton, ...inlineStyles?.buttons, ...(item === currentPageState ? inlineStyles?.pageActiveButton : {}) }}
                            >
                                {components?.pageButton || item}
                            </button>
                        )
                    })
                }

            </div>

            <button
                className={`block next-btn ${classNames?.nextButton} ${classNames?.buttons} `}
                onClick={() => pageNavigateHandler('forward', 1)}
                style={{ ...inlineStyles?.nextButton, ...inlineStyles?.buttons }}
            >
                {components?.nextButton || 'Next'}
            </button>
        </div >
    )
}

export default Pagination


