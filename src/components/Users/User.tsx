import React from 'react'
import { UserData } from '../../models/users.model';
import { Image } from 'antd';


type Props = {
    singleUser: UserData,
}

export const User: React.FC<Props> = ({ singleUser }) => {
    return (
        <div>
            <Image src={singleUser.avatar} alt="" />
            <div>{singleUser.name}</div>
            <div>{singleUser.createdAt}</div>

            <div>
                <button></button>
            </div>
        </div>
    )
}
