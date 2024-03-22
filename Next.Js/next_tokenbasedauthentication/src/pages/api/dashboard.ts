// pages/api/dashboard.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const verifyToken = (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
  // Get token from cookies or authorization header
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, 'c@^vT5nK#8BqF$p6X&!z@Uj2*Gc3$@%');

    // Attach user data to request object
    req.body = decoded;

    next(); // Proceed to the next middleware
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Call verifyToken middleware before handling the request
  verifyToken(req, res, () => {
    // If token is valid, handle the protected route logic here
      const user = req.body;
      console.log(user)
    res.status(200).json({ message: `Welcome, ${user.username}! This is a protected route.` });
  });
};
