import React, { Component } from 'react';

class VideoDetail extends Component{

    constructor({video}){
        super();
        this.video = video ;
    }

    getVideoTitle(){
        return this.props.video.snippet.title;
    }

    getVideoDescription(){
        return this.props.video.snippet.description;
    }

    // Return Video Url for embedding inside iframe
    getVideoUrl(){
        const videoId = this.props.video.id.videoId;
        return `https://www.youtube.com/embed/${videoId}`;
    }

    render(){
        if( ! this.props.video ){
            return(
                <div>Loading....</div>
            );
        }

        return(
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={this.getVideoUrl()} frameborder="0" className="embed-responsive-item"></iframe>
                </div>
                <div className="details">
                    <div className="">{this.getVideoTitle()}</div>
                    <div className="">{this.getVideoDescription()}</div>
                </div>
            </div>
        )
    }
}

export default VideoDetail ;