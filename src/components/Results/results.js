import React from 'react'
import "./results.scss"

const Results = () => {
  return (
    <div className='results'>
      <div className='results-overview'>
        <video className='results-overview-video' controls>  
          <source src="path of a video" type="video/mp4"/>  
          <source src="path of a video" type="video/mpeg"/>
        </video>  

        <audio className='results-overview-audio'controls>
            <source src="path of a video" type="video/mp3" />
            <source src="path of a video" type="video/ogg"/>
        </audio>
      </div>
      
      <div className='results-download'>
        <button className='results-download-btn'>Download Video</button>
        <button className='results-download-btn'>Download Audio</button>
      </div>
      <div className='results-share'>
        <div className='results-share-video'></div>
        <div className='results-share-audio'>

        </div>
      </div>
    </div>
  )
}

export default Results