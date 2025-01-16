import React from 'react'

function UserGreeting(props) {

    if (props.isLoggedIn) {
        return (
            <p>Welcome {props.userName}! </p>
        )
    } else {
        return (
            <div>Please log in, {props.userName} !</div>
        );
    }

    


  
}

UserGreeting.defaultProps = {
    userName: "guest user",
    isLoggedIn: false
}

export default UserGreeting