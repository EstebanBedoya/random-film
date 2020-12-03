import { Pagination } from '@material-ui/lab'
import React from 'react'
import PaginationComponent from './PaginationComponent'

export default {
    title: 'pagination',
    component: PaginationComponent
}

export const PaginationExample = () => {
    return <PaginationComponent numberPages={500} />
}
