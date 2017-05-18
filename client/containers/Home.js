import { Component } from 'react'

class Home extends Component {

	updateWidth = () => {
		const boxWidth = (this.refs.boxWidth.value < 500) ? this.refs.boxWidth.value : 500;
		this.props.updateStyles('width', boxWidth + 'px')
	}

	updateHeight = () => {
		const boxHeight = (this.refs.boxHeight.value < 500) ? this.refs.boxHeight.value : 500;
		this.props.updateStyles('height', boxHeight + 'px')
	}

	render(){

		const {updateStyles, width, height} = this.props

		return(
			<div className="drawer-tool-bar tool-bar-main">
				<div className="inner">
					<label>Width</label>
					<input type="number" ref="boxWidth" defaultValue={parseInt(width)} onChange={this.updateWidth} />
					<br/>
					<label>Height</label>
					<input type="number" ref="boxHeight" defaultValue={parseInt(height)} onChange={this.updateHeight} />
				</div>
			</div>
		)
	}
}


export default Home;