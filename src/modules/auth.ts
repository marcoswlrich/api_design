import jwt from "jsonwebtoken";

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.name },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.send("Not authorized");
    return;
  }
};
