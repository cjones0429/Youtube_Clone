import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/searchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videoId: '2RQh0BOoBbQ',
            title: '',
            description: '',
            related_videos: [],
         }
    }

    searchForVideo = async (searchQuery) => {
        let response = await axios.get(`http://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=AIzaSyC_TUmTIqQx4r4y8Y16DpOQNoxRkNuIkl4`)
        let videos = response.date;
        this.setState({
            videoId: videos.items[0].id.videoId
        })
    }

    componentDidMount(){
        this.searchForVideo();
    }

    render() { 
        return ( 
            <div>
                <center>
                    <h1>YouTube Clone</h1>
                </center>
                <br/>
                <div>
                    <SearchBar searchForVideo={this.searchForVideo}/>
                </div>
                <br/>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${this.state.videoId}?autoplay=1&origin=http://example.com`}
                frameborder="0"></iframe>
            </div>
         );
    }
}
 
export default App;