import jwt from "jsonwebtoken";

export const protect  = (req, res, next) => {
    const token = req.cookies.accessToken;
    if(!token){
        return res.status(401).json({message:"Not Authorized"})
    }
    try{
        const decode = jwt.verify(token,
            process.env.ACCESS_TOKEN_SECRET
        );
        req.user = decode;
        next();
    }catch(err){
        return res.status(401).json({message:"Token Expired"});
    }
}