import React from 'react'

const FoodVideo = (props) => {
    return (
        <div className='vidio text-center'>
            <iframe
                width="560"
                height="315"
                src={props.video.replace('/watch?v=', '/embed/')}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    )
}

export default FoodVideo