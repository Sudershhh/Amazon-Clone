import axios from "axios"

const instance = axios.create({

    baseURL:"https://us-central1-clone-f7599.cloudfunctions.net/api" // The API cloud function URL
});

export default instance;





// "http://localhost:5001/clone-f7599/us-central1/api" - LOCAL END POINT URL
