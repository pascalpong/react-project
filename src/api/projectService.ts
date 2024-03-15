/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const ProjectService = createApi({
    reducerPath: 'ProjectService',
    baseQuery,
    endpoints: (builder) => ({
      getProjects: builder.query<any, any>({
        query: () => ({
          url: '/project',
          method: 'GET'
        })
      })
    })
});
  
export const { useGetProjectsQuery } = ProjectService;