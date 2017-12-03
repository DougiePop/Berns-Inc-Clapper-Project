import React, { Component } from 'react';
import Clapper from './ClapperComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isActive: false
        }
    }

    toggle() {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render(){
        console.log("in React App");
        return (
            <div>
                <h1>Welcome to Berns Inc. Video Library</h1>
                <div>
                    <h2>Video 1</h2>
                    {this.state.isActive ? <Clapper id="video" source ="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"/> : false}
                    <button onClick={this.toggle}>Toggle</button>
                </div>
                <div>
                    <h2>Video 2</h2>
                    {this.state.isActive ? <Clapper id="video2" source ="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"/> : false}
                </div>
                <div>
                    <h2>Video 3</h2>
                    {this.state.isActive ? <Clapper id="video3" source ="https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8"/> : false}
                </div>
                <div>
                    <h2>Video 4</h2>
                    {this.state.isActive ? <Clapper id="video4" source ="http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8"/> : false}
                </div>
                <div>
                    <h2>Video 5</h2>
                    {this.state.isActive ? <Clapper id="video5" source ="http://www.streambox.fr/playlists/test_001/stream.m3u8"/> : false}
                </div>
            </div>
        )
    }
}

export default App;