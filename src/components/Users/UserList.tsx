import React from 'react'
import { UserData } from '../../models/users.model'
import { PaginationContainer } from '../pagination/PaginationContainer'
import { User } from './User'

type Props = {
  users: UserData[]
}

export const UserList: React.FC<Props> = ({ users }) => {
  return (
    <div>
      <div className='users'>
        {users &&
          users?.map((user: UserData) => {
            return <div key={user.id} className='user'>
              {

                <User singleUser={user} />

              }
            </div>
          })

        }
      </div>
      <div className="paginations">
        {/* <PaginationContainer  totalusers={users.length}/> */}
      </div>
    </div>
  )
}
