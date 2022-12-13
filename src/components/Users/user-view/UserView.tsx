import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { UserData } from '../../../models/users.model';
import { useDeleteUserMutation, useUserQuery } from '../../../services/usersApis';
import { Button, Image } from 'antd';
import { LoadingSpinner } from '../../loading-spiner/LoadingSpinner';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const UserView: React.FC = () => {
    const [usersData, setUsersData] = useState<UserData>();
    const navigate = useNavigate();

    const { id } = useParams<string>();
    const { data, isLoading } = useUserQuery(id);

    useEffect(() => {
        if (data) {
            console.log("data", data);
            setUsersData(data);
        }
    }, [data]);

    const eidtUser = (id: any) => {

    }



    return (
        <div>
            {isLoading ? (
                <div>
                    <LoadingSpinner />
                </div>
            ) : usersData && <div className='user_view'>
                <div>
                    <Image src={usersData.avatar} width={400} alt="" />
                    <div className='text-right'>{usersData.createdAt}</div>
                </div>
                <div className='data'>
                    <div className='head d-flex justify-content-between align-items-center'>
                        <h3>{usersData.name}</h3>
                        <div className='d-flex align-items-center actions' style={{ gap: "20" }}>
                            <EditOutlined className='edit' onClick={() => eidtUser(usersData.id)} />
                            {/* <DeleteOutlined className='delete' onClick={() => navigate(`/users`)} /> */}
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dicta, reiciendis tenetur, quaerat quisquam recusandae voluptates praesentium, architecto ad natus laboriosam corporis dolor quidem placeat tempore modi facilis maiores nobis?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dicta, reiciendis tenetur, quaerat quisquam recusandae voluptates praesentium, architecto ad natus laboriosam corporis dolor quidem placeat tempore modi facilis maiores nobis?
                    </p>
                    <div className='back_btn'>
                        <Button type="primary" onClick={() => navigate(`/users`)}>Back To Users</Button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
