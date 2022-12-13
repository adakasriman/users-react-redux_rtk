import React from 'react'
import { UserData } from '../../models/users.model';
import { Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition } from '@reduxjs/toolkit/dist/query'
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'


type Props = {
    singleUser: UserData,
    deleteUserData: MutationTrigger<MutationDefinition<string, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "users", void, "contactsApi">>

}



export const User: React.FC<Props> = ({ singleUser,deleteUserData }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='user-date' >
                {/* <Image src={singleUser.avatar} alt="" /> */}

                <img className='cursor-pointer ' src={singleUser.avatar} alt="" onClick={() => navigate(`/users/user/${singleUser.id}`)} />
                <div className='user-content'>
                    <span className='delete'>
                        <DeleteOutlined onClick={() => deleteUserData(singleUser.id)} />
                    </span>
                    <div>{singleUser.name}</div>
                    <div>{singleUser.createdAt}</div>
                </div>
            </div>
        </div>
    )
}
