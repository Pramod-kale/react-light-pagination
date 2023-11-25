import React from 'react';
import './Pagination.scss';
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
    };
};
declare const Pagination: (props: Props) => React.JSX.Element;
export default Pagination;
