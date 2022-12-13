import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition } from '@reduxjs/toolkit/dist/query'
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import React from 'react'
import { UserData } from '../../models/users.model'
import { PaginationContainer } from '../pagination/PaginationContainer'
import { User } from './User'

type Props = {
  users: UserData[];
  deleteUserData: MutationTrigger<MutationDefinition<string, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "users", void, "contactsApi">>
}

export const UserList: React.FC<Props> = ({ users,deleteUserData }) => {
  return (
    <div>
      <div className='users'>
        {users &&
          users?.map((user: UserData) => {
            return <div key={user.id} className='user'>
              {

                <User singleUser={user} deleteUserData={deleteUserData} />

              }
            </div>
          })

        }
      </div>
      <div className="paginations">
        <PaginationContainer totalusers={users.length} />
      </div>
    </div>
  )
}
