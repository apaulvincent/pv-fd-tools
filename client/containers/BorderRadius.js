import { Component } from 'react'

import Slider from 'react-rangeslider'
import '../assets/styles/components/range.scss'

class BorderRadius extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {}
	}

	updateAllRadius = (value) => {
		this.props.updateStyles('borderRadius', value)
	}

	render(){

		const {width, borderRadius} = this.props

		return(
			<div className="drawer-tool-bar tool-bar-main">
				<div className="inner">
					<h4>Boder Radius</h4>
					<label>Radius <strong>{borderRadius}</strong></label>
					<Slider 
						value={borderRadius}
						max={100}
						tooltip={false}
						onChange={this.updateAllRadius}
						/>
					<hr className="pv-spacer"/>
				</div>
			</div>
		)
	}
}


export default BorderRadius;