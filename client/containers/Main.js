import {Component} from 'react'
import PropTypes from 'prop-types'

import Menu from '../components/Menu'
import {BoxModel} from '../components/BoxModel'

class Main extends Component {
	constructor(props){
		super(props);

		this.state = {
			boxStyles: {
				width: 300,
				height: 200,
				borderRadius: 0,
				boxShadowHorizontal: 10,
				boxShadowVertical: 10,
				boxShadowBlur: 20,
				boxShadowSpread: 0,
				boxShadowColor: {r: 0, g: 0, b: 0, a: 1},
				boxShadowOpacity: 0.5,
				background: '#f1f1f1'
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
	
	render(){

		const formatBoxStyles = {
			width: `${this.state.boxStyles.width}px`,
			height: `${this.state.boxStyles.height}px`,
			borderRadius: `${this.state.boxStyles.borderRadius}px`,
			background: '#f1f1f1',
			boxShadow: `${this.state.boxStyles.boxShadowHorizontal}px
						${this.state.boxStyles.boxShadowVertical}px 
						${this.state.boxStyles.boxShadowBlur}px 
						${this.state.boxStyles.boxShadowSpread}px 
						rgba(${this.state.boxStyles.boxShadowColor.r},
							${this.state.boxStyles.boxShadowColor.g},
							${this.state.boxStyles.boxShadowColor.b},
							${this.state.boxStyles.boxShadowOpacity})`,
		}

const boxText =
`width: ${this.state.boxStyles.width}px;
height: ${this.state.boxStyles.height}px;
-webkit-box-shadow: ${this.state.boxStyles.boxShadowHorizontal}px ${this.state.boxStyles.boxShadowVertical}px ${this.state.boxStyles.boxShadowBlur}px ${this.state.boxStyles.boxShadowSpread}px  rgba(rgba(${this.state.boxStyles.boxShadowColor.r}, ${this.state.boxStyles.boxShadowColor.g}, ${this.state.boxStyles.boxShadowColor.b}, ${this.state.boxStyles.boxShadowOpacity}));
-moz-box-shadow: ${this.state.boxStyles.boxShadowHorizontal}px ${this.state.boxStyles.boxShadowVertical}px ${this.state.boxStyles.boxShadowBlur}px ${this.state.boxStyles.boxShadowSpread}px  rgba(rgba(${this.state.boxStyles.boxShadowColor.r}, ${this.state.boxStyles.boxShadowColor.g}, ${this.state.boxStyles.boxShadowColor.b}, ${this.state.boxStyles.boxShadowOpacity}));
box-shadow: ${this.state.boxStyles.boxShadowHorizontal}px ${this.state.boxStyles.boxShadowVertical}px ${this.state.boxStyles.boxShadowBlur}px ${this.state.boxStyles.boxShadowSpread}px  rgba(rgba(${this.state.boxStyles.boxShadowColor.r}, ${this.state.boxStyles.boxShadowColor.g}, ${this.state.boxStyles.boxShadowColor.b}, ${this.state.boxStyles.boxShadowOpacity}));
`;
		
		return(
			<div className="app-wrap">
				<Menu />
				{React.cloneElement(this.props.children, {
						width: this.state.boxStyles.width,
						height: this.state.boxStyles.height,
						borderRadius: this.state.boxStyles.borderRadius,
						boxShadowHorizontal: this.state.boxStyles.boxShadowHorizontal,
						boxShadowVertical: this.state.boxStyles.boxShadowVertical,
						boxShadowBlur: this.state.boxStyles.boxShadowBlur,
						boxShadowSpread: this.state.boxStyles.boxShadowSpread,
						boxShadowColor: this.state.boxStyles.boxShadowColor,
						boxShadowOpacity: this.state.boxStyles.boxShadowOpacity,
						updateStyles : this.updateStyles
						})}
				<BoxModel styles={formatBoxStyles} text={boxText} />
			</div>
		)
	}
}

export default Main;
