import React from 'react'

//receive wrapped component
const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow', 'purple'];
    const randomColour = colours[Math.floor(Math.random() * 6)];

    const className = randomColour + '-text';

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow