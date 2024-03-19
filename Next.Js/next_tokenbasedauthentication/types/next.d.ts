// types/next.d.ts
import { NextApiRequest } from 'next';

declare global {
  namespace Next {
    interface NextApiRequest {
      user?: { [key: string]: any }; // Define the user property
    }
  }
}
