import React from 'react'
import '../style/Videoitem.css'

const Videoitem = ({ video, onVideoSelect }) => {
    console.log(video)
    return (
        <div className=" video-item item" onClick={()=>onVideoSelect(video)}>
            <br></br>
            <br></br>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} />
            <div className='content'>
                <div className='header'>
                    {video.snippet.title}
                </div>
            </div>
        </div>)
}

export default Videoitem