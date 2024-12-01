    import jwt from 'jsonwebtoken';
    const generateToken=(payLoad)=>{
        const secretKey = 'yourSecretKey' ;//Own secret key
        const options ={
            expiresIn :'1h', //Token expiration time
        };

        const token =jwt.sign(payLoad,secretKey,options);
        return token;
    };
    export default generateToken;