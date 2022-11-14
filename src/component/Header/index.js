import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {NavHeader,NavContainer,NavContent,Logo,AddButton,LogoutButton,LogoutImage} from "./styledComponent"

// import './index.css'

const Header = props => {
  const {history} = props

  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavHeader>
      <NavContainer>
        <Link to="/" className="links">
          <Logo
            alt="website logo"
            src="https://res.cloudinary.com/dxjowybhg/image/upload/v1668266663/website-logo_fc1w9i.jpg"
          />
        </Link>
        <NavContent>
          <Link to="/add" className="links">
            <AddButton type="button">
          Add Item
        </AddButton>
          </Link>
        <LogoutButton type="button" onClick={onLogout}>
          <LogoutImage alt='logout' src='https://res.cloudinary.com/dxjowybhg/image/upload/v1668265550/logout_sjctg2.jpg'/>
        </LogoutButton>
        </NavContent>
      </NavContainer>
    </NavHeader>
  )
}
export default withRouter(Header)