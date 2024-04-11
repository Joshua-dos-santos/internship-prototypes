// pages/api/authenticate.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Here you would handle user authentication
  // Assuming you have validated the user and got the user data

  // Example user data
  const user = {
    id: 1,
    username: 'example_user'
  };

  // Generate JWT token
  const token = jwt.sign(user, 'c@^vT5nK#8BqF$p6X&!z@Uj2*Gc3$@%');

  // Set the token as a cookie
  res.setHeader('Set-Cookie', `token=${token}; HttpOnly`);

  // Respond with a success message or user data
  res.status(200).json({ success: true, user });
};
