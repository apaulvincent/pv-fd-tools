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
			color: '#fafafa',
			showColorPicker: false,
			colorPickerId: null
		}
	}

	updateWidth = (value) => {
		this.props.updateStyles('width', value)
	}

	updateHeight = (value) => {
		this.props.updateStyles('height', value)
	}

	updateBackgroundColor = (color) => {
		this.props.updateStyles('backgroundColor', color.hex)
	}

	updateForegroundColor = (color) => {
		this.props.updateStyles('foregroundColor', color.hex)
	}

	showColorPicker = (e) => {
		this.setState({
			showColorPicker: !this.state.showColorPicker,
			colorPickerId: e.currentTarget.id
		})
	}

	hideColorPicker = () => {
		this.setState({
			showColorPicker: false
		})
	}

	render(){

		const {width, height, backgroundColor, foregroundColor} = this.props

		const btnStyleFG = {
			background: foregroundColor
		}

		const btnStyleBG = {
			background: backgroundColor
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
					<label>Foreground <strong>{`HEX: ${foregroundColor}`}</strong></label>
					<button onClick={this.showColorPicker} id="btn1" className="color-picker-btn"><span style={btnStyleFG}></span></button>
					{
						(this.state.showColorPicker && this.state.colorPickerId == 'btn1') ? 
						<div className="color-picker-popover">
							<div className="color-picker-cover" onClick={this.hideColorPicker}></div>
							<SketchPicker 
								color={foregroundColor}
								disableAlpha={true}
								presetColors={[]}
								onChange={this.updateForegroundColor}/>
						</div> : null
					}
					<hr className="pv-spacer"/>
					<label>Background <strong>{`HEX: ${backgroundColor}`}</strong></label>
					<button onClick={this.showColorPicker} id="btn2" className="color-picker-btn"><span style={btnStyleBG}></span></button>
					{
						(this.state.showColorPicker && this.state.colorPickerId == 'btn2') ? 
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

