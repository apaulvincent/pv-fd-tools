import {Component} from 'react'
import { Link } from 'react-router'


// Icons
import HomeIcon from 'react-icons/lib/fa/home'
import NoteIcon from 'react-icons/lib/fa/file-text-o'
import LogoutIcon from 'react-icons/lib/fa/sign-out'
import TagIcon from 'react-icons/lib/go/tag'

class Menu extends Component {

	render(){
		return(
			<nav className="main-menu">
				<Link to="/" onlyActiveOnIndex activeClassName="selected"><HomeIcon/></Link>
				<Link to="/box-shadow" activeClassName="selected"><NoteIcon/></Link>
				<Link to="/border-radius" activeClassName="selected"><NoteIcon/></Link>
			</nav>
		)
	}
}

export default Menu;