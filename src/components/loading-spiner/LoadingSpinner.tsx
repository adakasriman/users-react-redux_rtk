import React from 'react';
import { Alert, Space, Spin } from 'antd';


export const LoadingSpinner: React.FC = () => {
    return (
        <div className='spinner'>
            <Space direction="vertical" style={{ width: '100%' }}>
                <Space>
                    <Spin tip="Loading" size="large">
                        <div className="content" />
                    </Spin>
                </Space>
            </Space>
        </div>
    )
}
