import React from 'react'
import axios from "axios";

const Home = (props) => {

const handleMeet = async() =>{

    try {
        const {data} = await axios.get("https://teams-clone-backend.herokuapp.com/getRoomID")
        props.history?.push(`/join/${data.roomID}`)
    }
    catch(error){
        console.log(error);
    }
}

    return ( <button onClick={handleMeet}>
        meet
    </button> );
}
 
export default Home;