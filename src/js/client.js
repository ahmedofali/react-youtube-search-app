// Create a new Component this component should produce html
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = 'AIzaSyDdmMGsyJflT5Uz0lBmAd1Y_infYZ2pGEk';

class App extends Component{
    constructor( props ){
        super();
        this.state = { youtube_videos:[], selected_video: null};
        this.getListYoutubeVideos('surfboards');
    }

    getListYoutubeVideos( term ){
        YTSearch({key: API_KEY, term:term},(youtube_videos) => {
            this.setState({ youtube_videos : youtube_videos , selected_video:youtube_videos[0]});
        });
    }

    changeSelectedVideo(video){
        this.setState({ selected_video:video });
    }

    render(){
        return (
            <div className="row">
                <div className="container">
                    <SearchBar onSearchTermChange={ term =>this.getListYoutubeVideos(term) } />
                    <div className="row">
                        <VideoDetail video={this.state.selected_video}/>
                        <VideoList videos={this.state.youtube_videos} changeSelectedVideo={this.changeSelectedVideo.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}


const app = document.getElementById('app');

ReactDOM.render(
    <App/>,
    app
);