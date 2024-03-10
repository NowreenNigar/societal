const jwt = require( "jsonwebtoken" );

module.exports = ( req, res, next ) =>{
    // Get token from header if it exists
    let token = req.header["x-auth-token"].split('')[2];

    // Check if not token is provided
    if ( !token ) return res.status( 401 ).send( { msg: "No token provided." } );

    try {
        // Verify token
        const decoded = jwt.verify( token, process.env.APP_SECRET );

        // Add user data to request body
        req.user = decoded;
        console.log("User added to the request");
        next();
    } catch ( e ) {
        console.error(e);
        // Return unauthorized status code and message
        res.status( 403 ).send( { msg: "Invalid or expired token." } );
    }
};