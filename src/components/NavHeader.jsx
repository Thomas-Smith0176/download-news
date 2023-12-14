import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import UsersList from './UsersList';
import { UserContext } from '../contexts/User';
import { Link, useNavigate } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

const NavHeader = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {currUser, setCurrUser} = useContext(UserContext)
    const navigate = useNavigate()

    return (
        <nav className="nav-header">
            <>
      <Button variant="primary" onClick={handleShow} className='nav-button'>
     Account
      </Button>
        {/* <Link id="home-link" to="/" > */}
      <Button variant='primary' aria-label='link to home page' className='nav-button' onClick={() => {navigate("/")}}>
          Home
      </Button>
          {/* </Link> */}
        {/* <Link id="topics-link" to="/topics"> */}
      <Button variant='primary' aria-label='link to topics page' className='nav-button' onClick={() => {navigate("/topics")}}>
          Topics
      </Button>
          {/* </Link> */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            {!currUser && <Offcanvas.Title>You are not signed in!</Offcanvas.Title>}
            {currUser && <Offcanvas.Title>{currUser.username}'s Account</Offcanvas.Title>}
            {currUser && <div className="user-avatar-cropper">
              <img src={`${currUser.avatar_url}`} className="user-avatar-img"></img>
              </div>}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion>
            <Accordion.Header>Change user</Accordion.Header>
            <Accordion.Body>
              <UsersList/>
            </Accordion.Body>
          </Accordion>
        </Offcanvas.Body>
          {currUser && <Button variant="primary" onClick={()=>{setCurrUser(undefined)}}>Sign out</Button>}
      </Offcanvas>
    </>
        </nav>
    );
};

export default NavHeader; 