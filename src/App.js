import React, { Component } from 'react';
import Clapper from './ClapperComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FaVid from 'react-icons/lib/fa/video-camera';

class App extends Component {
    constructor(props){
        super(props);
        this.toggleVideo1 = this.toggleVideo1.bind(this);
        this.toggleVideo2 = this.toggleVideo2.bind(this);
        this.toggleVideo3 = this.toggleVideo3.bind(this);
        this.toggleVideo4 = this.toggleVideo4.bind(this);
        this.toggleVideo5 = this.toggleVideo5.bind(this);
        this.state = {
            video1IsActive: false,
            video2IsActive: false,
            video3IsActive: false,
            video4IsActive: false,
            video5IsActive: false,
        
        }
    }

    toggleVideo1() {
        this.setState({
            video1IsActive: !this.state.video1IsActive
        })
    }

    toggleVideo2() {
        this.setState({
            video2IsActive: !this.state.video2IsActive
        })
    }

    toggleVideo3() {
        this.setState({
            video3IsActive: !this.state.video3IsActive
        })
    }

    toggleVideo4() {
        this.setState({
            video4IsActive: !this.state.video4IsActive
        })
    }

    toggleVideo5() {
        this.setState({
            video5IsActive: !this.state.video5IsActive
        })
    }
    render(){
        console.log("in React App");
        return (
            <div>
                <div className = "header">
                <FaVid/>
                <h1>BernsTube</h1>
                </div>
                <hr/>
                <div className = "banner">
                    <img className = "hlsImage" src ="https://s3.amazonaws.com/fs1.podbean.org/podbean_app_logo/HLS-_HTTP-Live-Streaming_.jpg"></img>
                </div>
                <hr/>
                <p>Recommended HLS Videos</p>
                <div className = "bodyDiv">
                    <div>
                        <button onClick={this.toggleVideo1}>Parkour is Life</button>
                        {this.state.video1IsActive ? <Clapper id="video1" source ="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"/> : false}
                    </div>
                    <div>
                        <button onClick={this.toggleVideo2}>Dragon's Quest</button>
                        {this.state.video2IsActive ? <Clapper id="video2" source ="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"/> : false}
                    </div>
                    <div>
                        <button onClick={this.toggleVideo3}>Table Ronde</button>
                        {this.state.video3IsActive ? <Clapper id="video3" source ="https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8"/> : false}
                    </div>
                    <div>
                        <button onClick={this.toggleVideo4}>Adventures of Buck Tooth Bunny</button>
                        {this.state.video4IsActive ? <Clapper id="video4" source ="http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8"/> : false}
                    </div>
                    <div>
                        <button onClick={this.toggleVideo5}>Inside Look: China's History</button>
                        {this.state.video5IsActive ? <Clapper id="video5" source ="http://www.streambox.fr/playlists/test_001/stream.m3u8"/> : false}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;