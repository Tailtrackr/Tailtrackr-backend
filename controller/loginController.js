const admin =  require('../config/firebaseInit.js');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Sign in the user with email and password
        const userCredential = await auth.signInWithEmailAndPassword(email, password);

        // Get the user's ID token
        const idToken = await userCredential.user.getIdToken();

        // Send the ID token back to the client
        res.send({ idToken });
    } catch (error) {
        console.error(error);
        res.status(401).send({ message: 'Invalid email or password' });
    }
};

const signUp = async (req, res) => {  
    try {
    console.log(req.body);
    const userResponse  = await admin.auth().createUser({  
        email: req.body.email,
        emailVerified: false,
        password: req.body.password,
    });
    return res.json(userResponse); 
    } catch (error) {
        console.log(error);
    }
}

const test = async (req, res) => {  
    console.log(req.body)
    console.log('test');
    res.send('test');

}


module.exports = {  
    login,
    signUp,
    test
};