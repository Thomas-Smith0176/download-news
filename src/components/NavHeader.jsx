import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import UsersList from './UsersList';
import { UserContext } from '../contexts/User';

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

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            {!currUser && <Offcanvas.Title>You are not signed in!</Offcanvas.Title>}
            {currUser && <Offcanvas.Title>{currUser.username}'s Account</Offcanvas.Title>}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <UsersList/>
          {currUser && <Button variant="primary" onClick={()=>{setCurrUser(undefined)}}>Sign out</Button>}
        </Offcanvas.Body>
      </Offcanvas>
    </>
        </nav>
    );
};

export default NavHeader; 