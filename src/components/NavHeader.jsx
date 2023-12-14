import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import UsersList from './UsersList';
import { UserContext } from '../contexts/User';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

const NavHeader = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {currUser, setCurrUser} = useContext(UserContext)

    return (
        <nav className="nav-header">
            <>
      <Button variant="primary" onClick={handleShow}>
     Account
      </Button>
      <Button variant='primary' aria-label='link to home page'>
        <Link id="home-link" to="/">Home</Link>
      </Button>
      <Button variant='primary' aria-label='link to topics page'>
        <Link id="topics-link" to="/topics">Topics</Link>
      </Button>

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