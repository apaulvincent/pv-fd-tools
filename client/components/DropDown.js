import { Component } from 'react'
import PropTypes from 'prop-types'

class DropDown extends Component{
    constructor(props){
        super(props)
        
        this.state= {
            open: false,
            value: '',
            text: 'Select'
        }
    }

    handleOpen = () => {
        if(this.props.enabled) {
            this.setState({
                open: !this.state.open,
            })
        }
    }

    handleSelect = (val, text) => {

        this.props.onChange(val)

        this.setState({
            value: val,
            text: text
        })
    }

    render() {
        const {defaultValue} = this.props
        const classNames = ['pv-dropdown', (this.state.open ? ' open' : ''), (this.props.enabled ? '' : ' disabled')].join('');
        const defaultSelected = (defaultValue) ? defaultValue : this.state.value

        return(
            <div className="pv-dropdown-wrap">
                <div className={classNames} onClick={this.handleOpen}>
                    <div className="pv-dd-field">{(defaultValue) ? defaultValue : this.state.text}</div>
                    <div className="pv-dd-options">
                        { 
                            React.Children.map(this.props.children, (child => {
                                return React.cloneElement(child, {
                                    value: child.props.value,
                                    text: child.props.children,
                                    onSelect: this.handleSelect,
                                    selected: defaultSelected
                                })
                            })) 
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default DropDown;

DropDown.defaultProps = {
    selected: '',
    enabled: true,
    onChange: (val) => {}
}

DropDown.propTypes = {
    selected: PropTypes.string.isRequired,
    enabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export class Option extends Component {
    
    handleSelect = () => {
        this.props.onSelect(this.props.value, this.props.text)
    }

    render(){
        const {value, text, onSelect, selected} = this.props
        const classNames = ['list-item', (selected == value ? ' selected' : '')].join('');
        return (
            <div className={classNames} onClick={this.handleSelect}>
                {text}
            </div>
        )
    }
}
