import { logger } from 'src/lib/logger'
import {useRequireAuth} from "@redwoodjs/graphql-server";
import {getCurrentUser, isAuthenticated} from "src/lib/auth";

const fetchIgnGeoJson = async (event, _context) => {
  console.log(`is authenticated? ${isAuthenticated()}}`)
 return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({message: `is authenticated? ${isAuthenticated()}`}),
  };
 }



export const handler = useRequireAuth({
  handlerFn: fetchIgnGeoJson,
  getCurrentUser,
})
