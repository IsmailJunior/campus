import axios from 'axios';

const instance = axios.create( {
	baseURL: process.env.NEXT_PUBLIC_STRAPI_URL
} );

const fetcher = async ( path: string ) =>
{
	const response = await instance( path )
	return response.data;
}