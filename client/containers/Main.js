import {Component} from 'react'
import PropTypes from 'prop-types'

import Menu from '../components/Menu'
import {BoxModel} from '../components/BoxModel'
import {AnimationModel} from '../components/AnimationModel'
import {Output} from '../components/Output'

import {hexToRgb} from '../utils/utility';

class Main extends Component {
	constructor(props){
		super(props);

		this.state = {
			boxStyles: {
				width: 300,
				height: 200,
				foregroundColor: '#FFFFFF',
				backgroundColor: '#E9E9E9',
				borderWidth: 0,
				borderColor: '#000000',
				borderStyle: 'solid',
				borderRadius: 0,
				boxShadowHorizontal: 10,
				boxShadowVertical: 10,
				boxShadowBlur: 20,
				boxShadowSpread: 0,
				boxShadowColor: {r: 0, g: 0, b: 0, a: 1},
				boxShadowOpacity: 0.1,
				boxShadowInset: false,
				enableGradient: false,
				gradientStyle: {
					colorMarkers: [
						{id: 1, position: 0, color: '#f0483f', opacity: 1},
						{id: 2, position: 100, color: '#837ced', opacity: 1},
					]
				}
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

	prefixer = (prefix, arr) => {
		if(prefix instanceof Array && arr instanceof Array ) {
			return prefix.map((p, i) => {
				return p + arr.join(' ');
			}).join('\n');
		}
	}
	
	render(){

		const formatWrapperBoxStyles = {
			backgroundColor: this.state.boxStyles.backgroundColor			
		}

		let bgImageStr = 'linear-gradient(to right,';

		const sortColors = this.state.boxStyles.gradientStyle['colorMarkers'].sort((a, b) => a.position - b.position);

		for (var i = 0; i < sortColors.length; i++) {
			bgImageStr += `${(i == 0) ? '':','} rgba(${hexToRgb(sortColors[i].color)}, ${sortColors[i].opacity}) ${sortColors[i].position}%`;
		}

		const formatBoxStyles = {
			width: `${this.state.boxStyles.width}px`,
			height: `${this.state.boxStyles.height}px`,
			border: `${this.state.boxStyles.borderWidth}px ${this.state.boxStyles.borderStyle} ${this.state.boxStyles.borderColor}`,
			borderRadius: `${this.state.boxStyles.borderRadius}px`,
			backgroundColor: this.state.boxStyles.foregroundColor,
			boxShadow: `${this.state.boxStyles.boxShadowInset ? 'inset' : ''} 
						${this.state.boxStyles.boxShadowHorizontal}px 
						${this.state.boxStyles.boxShadowVertical}px 
						${this.state.boxStyles.boxShadowBlur}px 
						${this.state.boxStyles.boxShadowSpread}px 
						rgba(${this.state.boxStyles.boxShadowColor.r},
							${this.state.boxStyles.boxShadowColor.g},
							${this.state.boxStyles.boxShadowColor.b},
							${this.state.boxStyles.boxShadowOpacity})`,
			backgroundImage : (this.state.boxStyles.enableGradient ?  bgImageStr : 'none')
		}

		const boxShadowPrefix = [
			'-webkit-box-shadow:',
			'-moz-box-shadow:',
			'box-shadow:'];

		const boxShadowValues = [
			`${this.state.boxStyles.boxShadowInset ? ' inset' : ''}`,
			`${this.state.boxStyles.boxShadowHorizontal}px`,
			`${this.state.boxStyles.boxShadowVertical}px`,
			`${this.state.boxStyles.boxShadowBlur}px`,
			`${this.state.boxStyles.boxShadowSpread}px`,  
			`rgba(${this.state.boxStyles.boxShadowColor.r}, ${this.state.boxStyles.boxShadowColor.g}, ${this.state.boxStyles.boxShadowColor.b}, ${this.state.boxStyles.boxShadowOpacity});`];

const boxText =`/* DIMENSION */
width: ${this.state.boxStyles.width}px;
height: ${this.state.boxStyles.height}px;
/* BOXSHADOW */
${this.prefixer(boxShadowPrefix, boxShadowValues)}
/* BORDER */
`;
		
		return(
			<div className="app-wrap">
				<Menu />
				{React.cloneElement(this.props.children, {
						width: this.state.boxStyles.width,
						height: this.state.boxStyles.height,
						foregroundColor: this.state.boxStyles.foregroundColor,
						backgroundColor: this.state.boxStyles.backgroundColor,
						borderStyle: this.state.boxStyles.borderStyle,
						borderWidth: this.state.boxStyles.borderWidth,
						borderColor: this.state.boxStyles.borderColor,
						borderRadius: this.state.boxStyles.borderRadius,
						boxShadowHorizontal: this.state.boxStyles.boxShadowHorizontal,
						boxShadowVertical: this.state.boxStyles.boxShadowVertical,
						boxShadowBlur: this.state.boxStyles.boxShadowBlur,
						boxShadowSpread: this.state.boxStyles.boxShadowSpread,
						boxShadowColor: this.state.boxStyles.boxShadowColor,
						boxShadowOpacity: this.state.boxStyles.boxShadowOpacity,
						boxShadowInset: this.state.boxStyles.boxShadowInset,
						enableGradient: this.state.boxStyles.enableGradient,
						gradientStyle: this.state.boxStyles.gradientStyle,
						colorMarkers: this.state.boxStyles.gradientStyle.colorMarkers,
						selectedColorMarkerId: this.state.boxStyles.gradientStyle.selectedColorMarkerId,
						selectedColorHex: this.state.boxStyles.gradientStyle.selectedColorHex,
						updateStyles : this.updateStyles,
						})}
				{ 
					( this.props.location.pathname == '/animation') ? 
				    <AnimationModel/> :
					<BoxModel styles={formatBoxStyles} wrapStyles={formatWrapperBoxStyles} />
				}
				<Output text={boxText} />
			</div>
		)
	}
}

export default Main;
