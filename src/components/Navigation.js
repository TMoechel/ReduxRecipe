import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Navigation = () => {
    return (
        <div>
            <div className='navigation'>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">FantaKitchen</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/recipes">Rezepte</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </div>
    )
}

export default Navigation;