import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Menu from '../components/Menu'
import {Box} from '../components/Box'

window.React = React

class Main extends Component {
	constructor(props){
		super(props);

		this.state = {
			boxStyles: {

			}
		}
	}

	render(){
		return(
			<div className="app-wrap">
				<Menu />
				{React.cloneElement(this.props.children, this.props)}
				<Box styles={this.state.boxStyles}/>
			</div>
		)
	}
}

export default Main;
