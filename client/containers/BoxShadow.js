import { Component } from 'react'
import PropTypes from 'prop-types'


import Slider from 'react-rangeslider'
import '../assets/styles/components/range.scss'
import { SketchPicker } from 'react-color';


class BoxShadow extends Component {
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

	updateHorizontalLength = (value) => {
		this.props.updateStyles('boxShadowHorizontal', value)
	}

	updateVerticalLength = (value) => {
		this.props.updateStyles('boxShadowVertical', value)
	}

	updateBlur = (value) => {
		this.props.updateStyles('boxShadowBlur', value)
	}

	updateSpread = (value) => {
		this.props.updateStyles('boxShadowSpread', value)
	}

	updateColor = (color) => {
		this.props.updateStyles('boxShadowColor', color.rgb)
	}

	updateOpacity = (value) => {
		this.props.updateStyles('boxShadowOpacity', parseFloat(value.toFixed(2)))
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

		const {boxShadowHorizontal, 
			   boxShadowVertical,
			   boxShadowBlur,
			   boxShadowColor,
			   boxShadowOpacity,
			   boxShadowSpread} = this.props

		const btnStyle = {
			background: `rgba(${boxShadowColor.r}, ${boxShadowColor.g}, ${boxShadowColor.b}, 1)`
		}

		return(
			<div className="drawer-tool-bar tool-bar-box-shadow">
				<div className="inner">
					<h4>Box Shadow</h4>
					<label>Horizontal <strong>{boxShadowHorizontal}</strong></label>
					<Slider 
						value={boxShadowHorizontal}
						max={300}
						min={-300}
						tooltip={false}
						onChange={this.updateHorizontalLength}
						/>
					<hr className="pv-spacer"/>
					<label>Vertical <strong>{boxShadowVertical}</strong></label>
					<Slider 
						value={boxShadowVertical}
						max={300}
						min={-300}
						tooltip={false}
						onChange={this.updateVerticalLength}
						/>
					<hr className="pv-spacer"/>
					<label>Blur <strong>{boxShadowBlur}</strong></label>
					<Slider 
						value={boxShadowBlur}
						max={100}
						min={0}
						tooltip={false}
						onChange={this.updateBlur}
						/>
					<hr className="pv-spacer"/>
					<label>Spread <strong>{boxShadowSpread}</strong></label>
					<Slider 
						value={boxShadowSpread}
						max={200}
						min={0}
						tooltip={false}
						onChange={this.updateSpread}
						/>
					<hr className="pv-spacer"/>
					<label>Color <strong>{}</strong></label>
					<button onClick={this.showColorPicker} className="color-picker-btn"><span style={btnStyle}></span></button>
					{
						this.state.showColorPicker ? 
						<div className="color-picker-popover">
							<div className="color-picker-cover" onClick={this.hideColorPicker}></div>
							<SketchPicker 
								color={boxShadowColor}
								disableAlpha={true}
								presetColors={[]}
								onChange={this.updateColor}/>
						</div> : null
					}
					<hr className="pv-spacer"/>
					<label>Opacity <strong>{boxShadowOpacity}</strong></label>
					<Slider 
						value={boxShadowOpacity}
						max={1}
						min={0}
						step={0.05}
						tooltip={false}
						onChange={this.updateOpacity}
						/>
				</div>
			</div>
		)
	}
}


export default BoxShadow;