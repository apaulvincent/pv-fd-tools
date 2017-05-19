import { Component } from 'react'
import PropTypes from 'prop-types'


import Slider from 'react-rangeslider'
import '../assets/styles/components/range.scss'

class Home extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
		}
	}

	updateWidth = (value) => {
		this.props.updateStyles('width', value)
	}

	updateHeight = (value) => {
		this.props.updateStyles('height', value)
	}

	render(){

		const {width, height} = this.props

		return(
			<div className="drawer-tool-bar tool-bar-main">
				<div className="inner">
					<h4>Dimension</h4>
					<label>Width <strong>{width}</strong></label>
					<Slider 
						value={width}
						max={500}
						step={10}
						tooltip={false}
						onChange={this.updateWidth}
						/>
					<hr className="pv-spacer"/>
					<label>Height <strong>{height}</strong></label>
					<Slider 
						value={height}
						max={500}
						step={10}
						tooltip={false}
						onChange={this.updateHeight}
						/>
				</div>
			</div>
		)
	}
}


export default Home;


Home.defaultProps = {}

Home.propTypes = {}

