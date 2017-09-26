import React, { Component } from 'react';

class VideoListItem extends Component{

    getVideoImageUrl(){
        return this.props.video.snippet.thumbnails.default.url;
    }

    getVideoTitle(){
        return this.props.video.snippet.title;
    }

    render(){
        return (
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img
                            className="media-object"
                            src={this.getVideoImageUrl()}
                            onClick={()=> this.props.changeSelectedVideo( this.props.video ) }
                        />
                    </div>

                    <div className="media-body">
                        <div className="media-heading">{this.getVideoTitle()}</div>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem ;