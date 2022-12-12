import React, { useEffect, useState } from 'react'
import { UserData } from '../../models/users.model';
import { useUsersQuery } from '../../services/usersApis';
import { LoadingSpinner } from '../loading-spiner/LoadingSpinner';
import { UserList } from './UserList';

export const UsersContainer: React.FC = () => {
    const [usersData, setUsersData] = useState<UserData[]>();

    let { data, isLoading } = useUsersQuery();

    useEffect(() => {
        if (data) {
            console.log("data", data);
            setUsersData(data);
        }
    }, [data]);





    return (
        <div>
            {isLoading ? (
                <div>
                    <LoadingSpinner />
                </div>

            ) : usersData && <UserList users={usersData} />
            }
        </div>
    )
}
