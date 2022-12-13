import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserData } from "../models/users.model";


export const usersApi = createApi({ //contactApi reducer
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://638c8737eafd555746a83447.mockapi.io/api/v1/" }), // here we were creating baseurl
    tagTypes: ['users'], // When ever the data is updated, inserted or deleted from the server, it updates the data.
    endpoints: (builder) => ({     // bulider can build the endPoints                                     
        users: builder.query<UserData[], void>({
            query: () => '/users', // users is end point of the server
            providesTags: ['users']  // updating data 
        }),
        user: builder.query<UserData, string |undefined>({
            query: (id) => `/users/${id}`,  //getting data of id
            providesTags: ['users']  // updating data 
        }),
        addUser: builder.mutation<void /*addContact is used send new record to the server*/, any /* Contact is interface of the new record */>({
            query: contact/*new record*/ => ({ // contact is new record
                url: '/users',
                method: "POST",
                body: contact
            }),
            invalidatesTags: ['users'] // updating data 
        }),
        updateUser: builder.mutation<void, any /* Contact is interface of the new record */>({
            query: (contact)/*new record*/ => ({
                url: `/users/${contact.id}`,  // updating based on id 
                method: "PUT",
                body: contact
            }),
            invalidatesTags: ['users'] // updating data 
        }),
        deleteUser: builder.mutation<void, string>({
            query: (id)/*new record*/ => ({
                url: `/users/${id}`,  // deleteong contact based on id 
                method: "DELETE",
                // body: 
            }),
            invalidatesTags: ['users'] // updating data 
        })
    })
})

export const { useUsersQuery, useUserQuery, useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation } = usersApi;

//the above hooks for get and storing data into the server : hooks



/* 
builder.query: 
  --> query is used only to get data from the server.

builder.mutation:
      --> Mutatations are used to send data to the server and apply the changes to the local cache.
      --> Mutations can also invalidate cached data and force re-fetchs.
 */