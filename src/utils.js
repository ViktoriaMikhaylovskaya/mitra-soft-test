import { SORTING } from "./constants";


export const getQueriesBySort = (sort) => {
    switch (sort) { 
        case SORTING.ASC:
            return '&_sort=title&_order=asc'
        case SORTING.DESC:
            return '&_sort=title&_order=desc'
        default:
            return ''
    }
}