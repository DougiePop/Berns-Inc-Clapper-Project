import React, { Component } from 'react';
import Clappr from 'clappr';

class ClapperComponent extends Component {

    componentDidMount() {
        const { id, source } = this.props;

        this.clappr_player = new Clappr.Player({
            parent: `#${id}`,
            source: source,
            width: 200,
            height: 250
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