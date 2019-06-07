import React from 'react';
import Seachbar from './searchbar';
import youtube from '../apis/youtube';
import Videolist from './videolist';
import VideoDetail from './videodetail';

class App extends React.Component{

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount(){
        this.onTermSubmit('Latest');
    }

    onTermSubmit = async (term)=>{
       const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]})
    }

    onVideoSelect = (video) => {
        console.log('From the app ',video)
        this.setState({selectedVideo:video})
    }

    render() {
        return (<div className="ui container">            
            <Seachbar onFormSubmit = {this.onTermSubmit} />
            <div className="ui grid">
                <div className= "ui row">
                    <div className = "eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
            </div>
                <div className= "five wide column">
            <Videolist videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
            </div>
            </div>
            
        </div>)
    }
}

export default App