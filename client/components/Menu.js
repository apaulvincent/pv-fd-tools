import {Component} from 'react'
import { Link } from 'react-router'


// Icons
import HomeIcon from 'react-icons/lib/fa/arrows'
import Square from 'react-icons/lib/fa/square-o'
import Clone from 'react-icons/lib/fa/clone'
import Anim from 'react-icons/lib/fa/circle-thin'
import Gradie from 'react-icons/lib/fa/minus-square-o'

class Menu extends Component {

	render(){
		return(
			<nav className="main-menu">
				<Link to="/" onlyActiveOnIndex activeClassName="selected"><HomeIcon/></Link>
				<Link to="/box-shadow" activeClassName="selected"><Clone/></Link>
				<Link to="/border-radius" activeClassName="selected"><Square/></Link>
				<Link to="/gradient" activeClassName="selected"><Gradie/></Link>
				<Link to="/animation" activeClassName="selected"><Anim/></Link>
			</nav>
		)
	}
}

export default Menu;