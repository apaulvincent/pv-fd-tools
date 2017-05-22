import { Component } from 'react'

import Slider from 'react-rangeslider'
import '../assets/styles/components/range.scss'

import { SketchPicker } from 'react-color';
import Toggle from '../components/Toggle';
import DropDown, {Option} from '../components/DropDown';


class Border extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			hex: '#000000',
			showColorPicker: false,
		}
	}

	updateAllRadius = (value) => {
		this.props.updateStyles('borderRadius', value)
	}

	updateBorderWidth = (value) => {
		this.props.updateStyles('borderWidth', value)
	}

	updateBorderColor = (color) => {
		this.props.updateStyles('borderColor', color.hex)
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

	updateBorderStyle = (val) => {
		this.props.updateStyles('borderStyle', val)
	}

	render(){

		const {width, 
			   borderRadius,
			   borderColor,
			   borderStyle,
			   borderWidth} = this.props


		const btnStyle = {
			background: `${borderColor}`
		}

		return(
			<div className="drawer-tool-bar tool-bar-main">
				<div className="inner">
					<h4>Boder</h4>
					<label>Radius <strong>{borderRadius}</strong></label>
					<Slider 
						value={borderRadius}
						max={100}
						tooltip={false}
						onChange={this.updateAllRadius}
						/>
					<hr className="pv-spacer"/>
					<label>Border Width <strong>{borderWidth}</strong></label>
					<Slider 
						value={borderWidth}
						max={100}
						tooltip={false}
						onChange={this.updateBorderWidth}
						/>
					<hr className="pv-spacer"/>
					<label>Border Color <strong>{`${borderColor}`}</strong></label>
					<button onClick={this.showColorPicker} className="color-picker-btn"><span style={btnStyle}></span></button>
					{
						this.state.showColorPicker ? 
						<div className="color-picker-popover">
							<div className="color-picker-cover" onClick={this.hideColorPicker}></div>
							<SketchPicker 
								color={borderColor}
								disableAlpha={true}
								presetColors={[]}
								onChange={this.updateBorderColor}/>
						</div> : null
					}
					<hr className="pv-spacer"/>
					<label>Style <strong>{}</strong></label>
					<DropDown defaultValue={borderStyle} onChange={this.updateBorderStyle}>
						<Option value={'solid'}>Solid<span></span></Option>
						<Option value={'dotted'}>Dotted<span></span></Option>
						<Option value={'dashed'}>Dashed<span></span></Option>
						<Option value={'double'}>Double<span></span></Option>
						<Option value={'none'}>None<span></span></Option>
					</DropDown>
				</div>
			</div>
		)
	}
}


export default Border;