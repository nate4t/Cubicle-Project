module.exports.isAuth = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
    }else {
        res.status(401).json({ msg: 'Please Register'});    
    }
};

module.exports.isAdmin = (req, res, next) => {

};