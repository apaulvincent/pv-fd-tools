import {Component} from 'react'
import PropTypes from 'prop-types'

import Menu from '../components/Menu'
import {BoxModel} from '../components/BoxModel'
import {Output} from '../components/Output'

class Main extends Component {
	constructor(props){
		super(props);

		this.state = {
			boxStyles: {
				width: 300,
				height: 200,
				backgroundColor: {r: 248, g: 248, b: 248, a: 1},
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
				boxShadowInset: false
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

		const formatBoxStyles = {
			width: `${this.state.boxStyles.width}px`,
			height: `${this.state.boxStyles.height}px`,
			border: `${this.state.boxStyles.borderWidth}px ${this.state.boxStyles.borderStyle} ${this.state.boxStyles.borderColor}`,
			borderRadius: `${this.state.boxStyles.borderRadius}px`,
			backgroundColor: `rgba(${this.state.boxStyles.backgroundColor.r},
							       ${this.state.boxStyles.backgroundColor.g},
							       ${this.state.boxStyles.backgroundColor.b},
							       ${this.state.boxStyles.backgroundColor.a})`,
			boxShadow: `${this.state.boxStyles.boxShadowInset ? 'inset' : ''} 
						${this.state.boxStyles.boxShadowHorizontal}px 
						${this.state.boxStyles.boxShadowVertical}px 
						${this.state.boxStyles.boxShadowBlur}px 
						${this.state.boxStyles.boxShadowSpread}px 
						rgba(${this.state.boxStyles.boxShadowColor.r},
							${this.state.boxStyles.boxShadowColor.g},
							${this.state.boxStyles.boxShadowColor.b},
							${this.state.boxStyles.boxShadowOpacity})`,
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

const boxText =
`width: ${this.state.boxStyles.width}px;
height: ${this.state.boxStyles.height}px;
${this.prefixer(boxShadowPrefix, boxShadowValues)}
`;
		
		return(
			<div className="app-wrap">
				<Menu />
				{React.cloneElement(this.props.children, {
						width: this.state.boxStyles.width,
						height: this.state.boxStyles.height,
						backgroundColor: this.state.boxStyles.backgroundColor,
						borderWidth: this.state.boxStyles.borderWidth,
						borderColor: this.state.boxStyles.borderColor,
						borderStyle: this.state.boxStyles.borderStyle,
						borderRadius: this.state.boxStyles.borderRadius,
						boxShadowHorizontal: this.state.boxStyles.boxShadowHorizontal,
						boxShadowVertical: this.state.boxStyles.boxShadowVertical,
						boxShadowBlur: this.state.boxStyles.boxShadowBlur,
						boxShadowSpread: this.state.boxStyles.boxShadowSpread,
						boxShadowColor: this.state.boxStyles.boxShadowColor,
						boxShadowOpacity: this.state.boxStyles.boxShadowOpacity,
						boxShadowInset: this.state.boxStyles.boxShadowInset,
						updateStyles : this.updateStyles
						})}
				<BoxModel styles={formatBoxStyles} />
				<Output text={boxText} />
			</div>
		)
	}
}

export default Main;
