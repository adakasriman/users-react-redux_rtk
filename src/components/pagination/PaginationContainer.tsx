import { Pagination } from 'antd'
import React from 'react';

type Props = {
    totalusers: number
}


export const PaginationContainer: React.FC<Props> = ({totalusers}) => <Pagination defaultCurrent={12} total={totalusers} />
