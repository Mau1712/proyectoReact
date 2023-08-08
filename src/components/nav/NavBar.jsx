import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cartSop from '../assets/img/cartSop.png';
import CartWidget from '../CartWidget';



function MiNav() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">TECHBOX</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">¿Quiénes Somos?</Nav.Link>
                        <Nav.Link href="#action2">Sucursales</Nav.Link>
                        <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Mother Board</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Procesadores</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Memorias RAM</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Disco duro</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Tarjetas de video</NavDropdown.Item> 
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Tarjetas LAN</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Interfaz de Audio</NavDropdown.Item> 
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Fuentes de poder</NavDropdown.Item> 
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Monitores</NavDropdown.Item> 
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Teclados</NavDropdown.Item> 
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Mouse</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Accesorios</NavDropdown.Item>                       
                        </NavDropdown>
                    </Nav>
                    <CartWidget amount={5}/>
                    <a href=""><img className='cartImg' src={cartSop} alt="" /></a>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MiNav;




