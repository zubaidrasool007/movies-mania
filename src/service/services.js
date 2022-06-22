import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const Api_Key = 'f6bb554383b810d88fb570d3cf4c92a6'
const baseUrl = 'https://api.themoviedb.org/3'
export const moviesApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTopRatedByName: builder.query({
            query: () => `/movie/popular?api_key=${Api_Key}&language=en-US&page=1`

        }),
        getMoviesDetailByName: builder.query({
            query: (id) => `/movie/${id}?api_key=${Api_Key}&language=en-US`
        }),
        getSimilarMoviesByName: builder.query({
            query: (id) => `/movie/${id}/similar?api_key=${Api_Key}&language=en-US&page=1`
        }),
        getSerchMoviesByName: builder.query({
            query: (input) => `/search/movie?api_key=${Api_Key}&language=en-US&query=${input}&page=2&include_adult=false`
        }),
        getMoviesReviewsByName: builder.query({
            query: (id) => `/movie/${id}/reviews?api_key=${Api_Key}&language=en-US&page=1`
        }),
        getMoviesImagesByName: builder.query({
            query: () => `/movie/a/images?api_key=${Api_Key}&language=en-US`
        }),
        getMoviesCastByName: builder.query({
            query: (id) => `/movie/${id}/credits?api_key=${Api_Key}&language=en-US`
        }),
    }),
})
export const { useGetTopRatedByNameQuery, useGetMoviesDetailByNameQuery, useGetSimilarMoviesByNameQuery, useGetSerchMoviesByNameQuery, useGetMoviesReviewsByNameQuery, useGetMoviesImagesByNameQuery, useGetMoviesCastByNameQuery } = moviesApi
