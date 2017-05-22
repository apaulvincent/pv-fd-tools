import { Component } from 'react'
import PropTypes from 'prop-types'


import Slider from 'react-rangeslider'
import '../assets/styles/components/range.scss'

import { SketchPicker } from 'react-color';
import Toggle from '../components/Toggle';

class Home extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			color: {
				r: '0',
				g: '0',
				b: '0',
				a: '1',
			},
			showColorPicker: false,
		}
	}

	updateWidth = (value) => {
		this.props.updateStyles('width', value)
	}

	updateHeight = (value) => {
		this.props.updateStyles('height', value)
	}

	updateBackgroundColor = (color) => {
		this.props.updateStyles('backgroundColor', color.rgb)
	}


	showColorPicker = () => {
		this.setState({
			showColorPicker: !this.state.showColorPicker
		})
	}

	hideColorPicker = () => {
		this.setState({
			showColorPicker: false
		})
	}

	render(){

		const {width, height, backgroundColor} = this.props

		const btnStyle = {
			background: `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, 1)`
		}

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
					<hr className="pv-spacer"/>
					<label>Background <strong>{`R: ${backgroundColor.r} G: ${backgroundColor.g} B: ${backgroundColor.b}`}</strong></label>
					<button onClick={this.showColorPicker} className="color-picker-btn"><span style={btnStyle}></span></button>
					{
						this.state.showColorPicker ? 
						<div className="color-picker-popover">
							<div className="color-picker-cover" onClick={this.hideColorPicker}></div>
							<SketchPicker 
								color={backgroundColor}
								disableAlpha={true}
								presetColors={[]}
								onChange={this.updateBackgroundColor}/>
						</div> : null
					}
				</div>
			</div>
		)
	}
}


export default Home;


Home.defaultProps = {}

Home.propTypes = {}

