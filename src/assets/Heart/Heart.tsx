import React from 'react'


export type HeartType = {

}

const Heart:React.FC<HeartType> = () => {
    const electricStyles = {

    }
    return <div style={electricStyles}>
        <svg id="Layer_1"  version="1.1" viewBox="0 0 128 128"    ><g><path d="M114.6,66.4c12.3-12.3,12.3-32.3,0-44.5h0C102.3,9.6,82.3,9.6,70,21.9l-6,6l-6-6c-12.3-12.3-32.3-12.3-44.5,0   c-6,5.9-9.2,13.9-9.2,22.3s3.3,16.3,9.2,22.3L64,117L114.6,66.4z M12.2,44.2c0-6.3,2.4-12.2,6.9-16.6c4.6-4.6,10.6-6.9,16.6-6.9   s12,2.3,16.6,6.9L64,39.2l11.7-11.7c9.2-9.2,24.1-9.2,33.2,0c4.4,4.4,6.9,10.3,6.9,16.6s-2.4,12.2-6.9,16.6L64,105.7L19.1,60.8   C14.7,56.3,12.2,50.4,12.2,44.2z"/></g></svg>
     </div>
}

export default Heart;