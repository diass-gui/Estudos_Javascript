// Promises com async/await

const axios = require('axios');

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if(error) {
            reject(new Error('Error in login!'));
        }
        
        console.log("User logged!")
        resolve({ email });
    }) 
}

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        console.log("GetUserVideos");
        resolve(['video1', 'video2', 'video3']);
     }, 2000)
    })
}

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("GetVideoDetails")
        resolve({ title: 'Video title' })
    }, 2500)
    }) 
}

const displayUser = async () => {
    try {
        const user = await loginUser('bigode@gmail.com', '1324756');
        console.log({ user })
        const videos = await getUserVideos(user.email);
        console.log({ videos })
        const videoDetails = await getVideoDetails(videos[0]);
        console.log({ videoDetails })
    } catch(error) {
        console.log(error)
    }
}

// displayUser();

const fetchAPI = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log({ data }) 
}

fetchAPI()