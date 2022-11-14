import {Link} from 'react-router-dom'
import {NotFoundButton,NotFoundContainer,NotFoundDesc,NotFoundHeading,NotFoundImage} from "./styledComponent"
const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      alt="page not found"
      src="https://res.cloudinary.com/dxjowybhg/image/upload/v1664014232/not-found_rb0oea.png"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundDesc>
      we are sorry, the page you requested could not be found.
      <br />
      Please go back to the home page.
    </NotFoundDesc>
    <Link to="/">
      <NotFoundButton type="button">
        Home Page
      </NotFoundButton>
    </Link>
  </NotFoundContainer>
)
export default NotFound