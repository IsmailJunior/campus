import qs from 'qs';
import axios from 'axios';
import { flattenAttributes } from '@/app/_lib/utils';

export const fetcher = async ( path: string, locale: string,options = {}) =>
{
  const homePageQuery = qs.stringify( {
    locale,
    populate: {
      blocks: {
        populate: {
          image: {
            fields: ['url']
          },
          h2: {
            populate: {
              image: {
                fields: ['url']
              },
              title: true
            }
          },
          page: {
            populate: true
          },
          links: {
            fields: ['url', 'text']
          }
        }
      },
    }
  })
  const url = new URL( path, `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/` );
  url.search = homePageQuery

  if ( url !== null )
	{
    const reposnse = await axios.get( url.href, options );
    const flattenResponse = flattenAttributes(reposnse)
    return flattenResponse;
	}
};

