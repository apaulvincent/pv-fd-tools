import { Component } from 'react'
import PropTypes from 'prop-types'

import Slider from 'react-rangeslider'
import '../assets/styles/components/range.scss'

import { SketchPicker } from 'react-color';
import Toggle from '../components/Toggle';

import {hexToRgb} from '../utils/utility';


class Gradient extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {}
	}

	handleOpacityDrag = (id, pos) => {

		const markerWidth = 10;
		const gradientWrapRect = this.refs.gradientWrap.getBoundingClientRect();
		const newPos = pos - gradientWrapRect.left;
		const percent = newPos/gradientWrapRect.width * 100;

		if(percent >= 0 && percent <= 100) {

			this.props.updateStyles('gradientStyle', Object.assign({}, this.props.gradientStyle, {
				opacityMarkers: this.props.opacityMarkers.map( o => {
					if(o.id == id) return Object.assign({}, o, {position:percent})
						return o
					})
			}))

		}
	}

	handleColorDrag = (id, pos) => {

		const markerWidth = 10;
		const gradientWrapRect = this.refs.gradientWrap.getBoundingClientRect();
		const newPos = pos - gradientWrapRect.left
		const percent = newPos/gradientWrapRect.width * 100;

		if(percent >= 0 && percent <= 100) {
			this.props.updateStyles('gradientStyle', Object.assign({}, this.props.gradientStyle, {
				colorMarkers: this.props.colorMarkers.map( o => {
					if(o.id == id) return Object.assign({}, o, {position:percent})
						return o
					})
			}))
		}
	}

	handleColorChange = (id, color) => {

		this.props.updateStyles('gradientStyle', Object.assign({}, this.props.gradientStyle, {
				colorMarkers: this.props.colorMarkers.map( o => {
					if(o.id == id) return Object.assign({}, o, {color: color})
						return o
					}),
				selectedColorHex: color
			}))
	}

	handleColorMarkerSelect = (id, color) => {
		this.props.updateStyles('gradientStyle', Object.assign({}, this.props.gradientStyle, {
				selectedColorMarkerId: id,
				selectedColorHex: color
			}))
	}

	handleColorTrackClick = (e) => {

		const gradientWrapRect = this.refs.gradientWrap.getBoundingClientRect();
		const newPos = e.pageX - gradientWrapRect.left;
		const percent = newPos/gradientWrapRect.width * 100;
		const newId = new Date().valueOf();

		if(( e.target.className.indexOf('marker-color-wrap') !== -1 )){

			this.props.updateStyles('gradientStyle', Object.assign({}, this.props.gradientStyle, {
				colorMarkers: [...this.props.colorMarkers, 
					{id: newId, position: percent, color: this.props.selectedColorHex}]
			}))
		}
	}

	enableGradientToggle = (e) => {
		this.props.updateStyles('enableGradient', !this.props.enableGradient)
	}

	render(){

		const { colorMarkers,
				opacityMarkers,
				selectedColorMarkerId,
				selectedColorHex,
				enableGradient} = this.props

		let bgImageStr = 'linear-gradient(to right,';
		const sortColors = colorMarkers.sort((a, b) => a.position - b.position);

		for (var i = 0; i < sortColors.length; i++) {
			bgImageStr += `${(i == 0) ? '':','} rgb(${hexToRgb(sortColors[i].color)}) ${sortColors[i].position}%`;
		}

		const gradientStyle = {
			backgroundImage : bgImageStr
		}

		return(
			<div className="drawer-tool-bar tool-bar-gradient">
				<div className="inner">
		    		<h4>Gradient</h4>
					<hr className="pv-spacer"/>
					<label>Enable</label>
					<Toggle on={enableGradient} onToggle={this.enableGradientToggle} />
					<hr className="pv-spacer"/>
					<div className="gradient-wrap">
						<div className="marker-track marker-opacity-wrap">
							{
								opacityMarkers.map((o, i) => {
									return <OpacityMarker 
												onMove={this.handleOpacityDrag}
												position={o.position}
												opacity={o.opacity}
												guid={o.id}
												key={o.id} />
								})
							}
						</div>
						<div className="gradient-panel" ref="gradientWrap">
							<div className="gradient-holder" style={gradientStyle}></div>
						</div>
						<div ref="colorTrack" onClickCapture={this.handleColorTrackClick} className="marker-track marker-color-wrap">
							{
								colorMarkers.map((o, i) => {
									return <ColorMarker
												onMove={this.handleColorDrag} 
												onColorChange={this.handleColorChange}
												onColorMarkerSelect={this.handleColorMarkerSelect}
												position={o.position} 
												color={o.color}
												selected={o.id == selectedColorMarkerId}
												guid={o.id} 
												key={o.id} />
								})
							}
						</div>
					</div>

			    </div>
			</div>
		)
	}
}
export default Gradient;


class ColorMarker extends Component {
	constructor(props){
		super(props)

		this.state = {
			open: false
		}		
	}
	

	onMouseDown = (e) => {
		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mouseup', this.onMouseUp);
		e.preventDefault();
	}

	onMouseUp = (e) => {
		document.removeEventListener('mousemove', this.onMouseMove);
		document.removeEventListener('mouseup', this.onMouseUp);
		e.preventDefault();	
	}

	onMouseMove = (e) => {
		this.props.onMove(this.props.guid, e.x)
		e.preventDefault();
	}

	handleClick = (e) => {

		this.setState({
			open: !this.state.open
		})

		this.props.onColorMarkerSelect(this.props.guid, this.props.color)

		e.preventDefault();
	}

	handleClose = (e) => {
		this.setState({
			open: false
		})

		e.preventDefault();
	}

	updateColor = (color) => {
		this.props.onColorChange(this.props.guid, color.hex)
	}

	render() {

		const style = {
			background: this.props.color,
			left: `${this.props.position}%`
		}

		const tipStyle = {
			borderBottomColor: this.props.color,
		}

		const classes = ['marker', (this.props.selected ? ' selected': '')].join('')

		return(
			<div className={classes} style={style}>
				<span className="tip" style={tipStyle}></span>
				<div className="color-handler" onMouseDown={this.onMouseDown} onClick={this.handleClick}></div>

				{
					(this.state.open) ? 
					<div className="color-picker-popover">
					<div className="color-picker-cover" onClick={this.handleClose}></div>
						<SketchPicker 
							color={this.props.color}
							disableAlpha={true}
							presetColors={[]}
							onChange={this.updateColor}/>
					</div> : null 
				}

			</div>
		)
	}
}

ColorMarker.defaultProps = {
	onMove:  f => f,
	onColorChange: f => f
}

ColorMarker.propTypes = {
	onMove: PropTypes.func,
	onColorChange: PropTypes.func
}


class OpacityMarker extends Component {
	constructor(props){
		super(props)
		this.state = {
			opacity: 1,
			position: 0
		}		
	}

	onMouseDown = (e) => {
		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mouseup', this.onMouseUp);
		e.preventDefault();
	}

	onMouseUp = (e) => {
		document.removeEventListener('mousemove', this.onMouseMove);
		document.removeEventListener('mouseup', this.onMouseUp);
		e.preventDefault();
	}

	onMouseMove = (e) => {
		this.props.onMove(this.props.guid, e.x) 		
		e.preventDefault();
	}

	render() {

		const style = {
			opacity: this.props.opacity,
			left:  `${this.props.position}%`
		}

		const tipStyle = {
			borderBottomColor: this.props.opacity,
		}

		const classes = ['marker', (this.props.selected ? ' selected': '')].join('')


		return(
			<div className={classes} style={style} onMouseDown={this.onMouseDown}>
				<span className="tip" style={tipStyle}></span>
			</div>
		)
	}
}

OpacityMarker.defaultProps = {
	onMove:  f => f
}

OpacityMarker.propTypes = {
	onMove: PropTypes.func
}
