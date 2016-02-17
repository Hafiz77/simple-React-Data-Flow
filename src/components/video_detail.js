import React from 'react';

 const VideoDetail=({video})=>{
   if(!video){
     return <div className="">Loading...</div>
   }
   const description=video.snippet.description;
   const title=video.snippet.title;
   const videoId=video.id.videoId;
   const url=`https://www.youtube.com/embed/${videoId}`;
   return(
     <div className="video-detail col-md-8">
 		     <div className="embed-responsive embed-responsive-16by9">
 			      <iframe src={url} frameBorder="2px" className="embed-responsive-item"></iframe>
 		     </div>
     		<div className="details">
     			 <div className=""><h4>{title}</h4></div>
     			 <div className=""><h6>{description}</h6></div>
     		</div>
 	</div>
   );
 };
 export default VideoDetail;
