
import Pagination from '../components/Pagination/Pagination';


export default {
    title: "Pagination-component",
    component: Pagination,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        currentPage: { control: 'number' },
        totalNumberOfData: { control: 'number' },
    }
}

export const defaultPagination = {
    args: {
        totalNumberOfData: 30,
        perPage: 4
    }
}


export const pagination = {
    args: {
        totalNumberOfData: 79,
        currentPage: 1,
    }
}

export const customStyles = {
    args: {
        totalNumberOfData: 22,
        currentPage: 4,
        perPage: 3,
        inlineStyles: {
            pageButton: {
                color: 'blue'
            },
            container: {
                backgroundColor: 'violet'
            }
        }
    }
}