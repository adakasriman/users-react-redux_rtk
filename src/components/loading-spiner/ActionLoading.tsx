import { Alert, Spin } from 'antd'
import React from 'react'

export const ActionLoading: React.FC = () => {
    return (
        <div className='spinner'>
            <Spin tip="Loading...">
                <Alert
                 
                    description="Updating Data"
                    type="info"
                />
            </Spin>
        </div>
    )
}
