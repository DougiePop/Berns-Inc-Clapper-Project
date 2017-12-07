import React, { Component } from 'react';
import Clapper from './ClapperComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FaVid from 'react-icons/lib/fa/video-camera';
import FaSearch from 'react-icons/lib/fa/search';

class App extends Component {
    constructor(props){
        super(props);
        this.toggleVideo1 = this.toggleVideo1.bind(this);
        this.toggleVideo2 = this.toggleVideo2.bind(this);
        this.toggleVideo3 = this.toggleVideo3.bind(this);
        this.toggleVideo4 = this.toggleVideo4.bind(this);
        this.toggleVideo5 = this.toggleVideo5.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            video1IsActive: false,
            video2IsActive: false,
            video3IsActive: false,
            video4IsActive: false,
            video5IsActive: false,
            field: ''
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

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit() {
        if (this.state.field === "parkour" || this.state.field === "p" ) {
            this.toggleVideo1();
        } else if (this.state.field === "dragon" || this.state.field === "d") {
            this.toggleVideo2()
        } else if (this.state.field === "jazz" || this.state.field === "j") {
            this.toggleVideo3()
        } else if (this.state.field === "bunny" || this.state.field === "b") {
            this.toggleVideo4()
        } else if (this.state.field === "china" || this.state.field === "c") {
            this.toggleVideo5()
        }
    }


    render() {
        // console.log("in React App");
        const thumbnail1 = <img src = "http://www.edp24.co.uk/polopoly_fs/1.1241807!/image/3779723638.jpg_gen/derivatives/landscape_490/3779723638.jpg" onClick ={this.toggleVideo1} onMouseOver = {this.toggleVideo1}/>
        const thumbnail2 = <img src = "http://creativefan.com/files/2011/01/dragon-12-500x242.jpg" onClick ={this.toggleVideo2} onMouseOver = {this.toggleVideo2}/>
        const thumbnail3 = <img src = "https://suntimesmedia.files.wordpress.com/2017/07/14530-05a6716_flat_medium.jpg?w=763" onClick ={this.toggleVideo3} onMouseOver = {this.toggleVideo3}/>
        const thumbnail4 = <img src = "https://i.pinimg.com/564x/d2/67/08/d26708dd8b132a87c6e5414b28e733a7--videos-funny-bunnies.jpg" onClick ={this.toggleVideo4} onMouseOver = {this.toggleVideo4}/>
        const thumbnail5 = <img src = "http://obstacleracingmedia-zone.xjxqn70rpaabk.netdna-cdn.com/wp-content/uploads/2016/10/2016SpartanAgogeChina.jpg" onClick ={this.toggleVideo5} onMouseOver = {this.toggleVideo5}/>
        return (
            <div>
                <div className = "header">
                <FaVid/>
                <h1>BernsTube</h1>
                <form onSubmit={this.handleSubmit} id = "searchForm">
                    <input id = "searchInput" placeholder="Search" type="text" name="field" value={this.state.field} onChange={this.handleChange}/>
                    <button className="searchButton" type='submit' >
                    <FaSearch/>
                    </button>
                </form>
                </div>
                <div className = "mainBody">
                <div className = "banner">
                <h2>Featured Clip</h2>
                <iframe width="1020" height="315" src="https://www.youtube.com/embed/aqz-KE-bpKQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div className="subHeader">
                <p id="subbHeader">Recommended HLS Videos</p>
                </div>
                <div className = "bodyDiv">
                    <div className="video">
                        {this.state.video1IsActive ? <Clapper id="video1" source ="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"/> : thumbnail1}
                        <p className ="videoTitle">Parkour: A New Sport?</p>
                        <p className ="videoAuthor">Clip King</p>
                        <p className ="videoAuthor">50K views - 4 months ago</p>
                    </div>
                    <div className="video">
                        {this.state.video2IsActive ? <Clapper id="video2" source ="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"/> : thumbnail2}
                        <p className ="videoTitle">Dragons: The Animation</p>
                        <p className ="videoAuthor">Hire Queen</p>
                        <p className ="videoAuthor">90K views - 2 months ago</p>
                    </div>
                    <div className="video">
                        {this.state.video3IsActive ? <Clapper id="video3" source ="https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8"/> : thumbnail3}
                        <p className ="videoTitle">Ronde Table: Jazz Classics</p>
                        <p className ="videoAuthor">Classiq</p>
                        <p className ="videoAuthor">4K views - 6 months ago</p>
                    </div>
                    <div className="video">
                        {this.state.video4IsActive ? <Clapper id="video4" source ="http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8"/> : thumbnail4}
                        <p className ="videoTitle">Big Buck Bunny: The Movie</p>
                        <p className ="videoAuthor">JuiceGrid</p>
                        <p className ="videoAuthor">98K views - 8 months ago</p>
                    </div>
                    <div className="video">
                        {this.state.video5IsActive ? <Clapper id="video5" source ="http://www.streambox.fr/playlists/test_001/stream.m3u8"/> : thumbnail5}
                        <p className ="videoTitle">China's Ancient History</p>
                        <p className ="videoAuthor">Blender</p>
                        <p className ="videoAuthor">17K views - 3 months ago</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default App;