import React from 'react'

class Icon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span class="material-icons" onClick={(icon)=>{this.props.onSwitch(this.props.icon)}}>{this.props.icon}</span>
        )
    }
}

export default Icon