import {Component} from 'react'
import PropTypes from 'prop-types'

import Menu from '../components/Menu'
import {BoxModel} from '../components/BoxModel'

class Main extends Component {
	constructor(props){
		super(props);

		this.state = {
			boxStyles: {
				width: 300,
				height: 200,
				background: '#f1f1f1'
			}
		}
	}

	updateStyles = (attribute, val) => {

		const newObj = {};
		newObj[attribute] = val;

		this.setState({
			boxStyles: Object.assign({}, this.state.boxStyles, newObj)
		})
	}
	
	render(){

		console.log(this.props)

		return(
			<div className="app-wrap">
				<Menu />
				{React.cloneElement(this.props.children, {
						width: this.state.boxStyles.width,
						height: this.state.boxStyles.height,
						updateStyles : this.updateStyles
						})}
				<BoxModel styles={this.state.boxStyles}/>
			</div>
		)
	}
}

export default Main;
