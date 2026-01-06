// Promises

const loginUser = (email, password, onSucess, onError) => {
    setTimeout(() => {
        const error = false;

        if(error) {
            return onError(new Error('Error in Login!'));
        }

        console.log("user logged!")
        onSucess({ email });
    }, 1500);
}

const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if(error) {
            reject("Error in login!");
        }

        resolve({ email });
    }) 
}

loginUserPromise('felipe@gmail.com', '765432').then((user) => {
    console.log({ user })
})