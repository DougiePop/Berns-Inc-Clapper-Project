import React, { Component } from 'react';
import Clapper from 'clappr';

class ClapperComponent extends Component {

    componentDidMount() {
        const { id, source } = this.props;

        this.clappr_player = new Clappr.Player({
            parent: `#${id}`,
            source: source,
            width: 250,
            height: 200
        })

        this.clappr_player.play();
    }

    componentWillUnmount() {
        this.clappr_player.destroy();
        this.clappr_player = null;
    }

    render() {
        const { id } = this.props;

        return (
            <div>
                <p id={id}></p>
            </div>
        );
    }
}

export default ClapperComponent;