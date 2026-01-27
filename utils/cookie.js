export const setTokens = (res, accessToken, refreshToken) =>{
    res.cookie("accessToken", accessToken, 
        {
            httpOnly: true,
            sameSite: "lax",
            secure: false,
            path:"/"
        }
    );

    res.cookie("refreshToken", refreshToken, 
        {
            httpOnly: true,
            sameSite: "lax",
            secure: false,
            path:"/"
        }
    );

};