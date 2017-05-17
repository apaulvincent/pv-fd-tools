import {Component} from 'react'
import PropTypes from 'prop-types'

import Menu from '../components/Menu'
import {Box} from '../components/Box'

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
