import { Component } from 'react'
import PropTypes from 'prop-types'

class Toggle extends Component{
    constructor(props){
        super(props)
        
        this.state= {
            on: this.props.on
        }
    }

    handleToggle = (e) => {
        e.preventDefault();

        if(this.props.enabled) {

            this.props.onToggle(!this.state.on)
            this.setState({
                on: !this.state.on
            })
        }
    }

    render() {

        const classNames = ['toggle-track', (this.state.on ? ' on' : ''), (this.props.enabled ? '' : ' disabled')].join('');

        return(
            <div className="toggle-wrap">
                <div className={classNames} onClick={this.handleToggle}>
                    <div className="toggle-pin"></div>
                </div>
            </div>
        )
    }
}

export default Toggle;

Toggle.defaultProps = {
	on: false,
    enabled: true,
    onToggle: (val) => {}
}

Toggle.propTypes = {
	on : PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
}

