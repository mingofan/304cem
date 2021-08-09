const User = require('../models/user');

exports.getSignupForm = (req, res, next) => {
    res.render('signup', { path: '/signup', pageTitle: 'Sign up', name: 'Ming Fan' })
}

exports.getSigninForm = (req, res, next) => {
    res.render('signin', { path: '/signin', pageTitle: 'Sign in123', name: 'Ming Fan' })
}

exports.postSignup = (req, res, next) => {
    new User({
            email: req.body.email,
            password: req.body.password
        }).save()
        .then(result => {
            res.redirect('/');
            console.log('Signup_Success_and_redirect_to_index');
        }).catch(err => {
            throw new Error('Save User failed');
        });
}

exports.postSignin = (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;
    
    User.findOne({email: email, password: password}, function(err, user) {

        if (!user){
            return res.status(404).send();
        }
        res.redirect('/');
        console.log('login_Success_and_redirect_to_index');
    });
}