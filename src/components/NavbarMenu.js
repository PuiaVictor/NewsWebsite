import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import { FaBlackTie, FaStethoscope, FaLaptop, FaHome, FaFutbol, FaBtc, FaGlobe, FaNewspaper, FaSearch} from "react-icons/fa";
import { AiOutlineExperiment } from "react-icons/ai";

export const NavbarMenu = (props) => (
        <Navbar bg="light" expand="lg" fixed="top">
            <FaNewspaper size='3rem'/>
            <Navbar.Brand href="#home">Today's News</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={()=>props.onClickCategory}>
                        <div>
                            <FaHome size='3rem'/>
                            <b>Home</b>
                        </div>
                    </Nav.Link>
                    <Nav.Link onClick={()=>props.onClickCategory('health')}>
                        <div>
                            <FaStethoscope size='3rem'/>
                            <b>Health</b>
                        </div>
                    </Nav.Link>
                    <Nav.Link onClick={()=>props.onClickCategory('sport')}>
                        <div>
                            <FaFutbol size='3rem'/>
                            <b>Sport</b>
                        </div>
                    </Nav.Link>
                    <Nav.Link onClick={()=>props.onClickCategory('business')}>
                        <div>
                        <FaBtc size='3rem'/>
                        <b>Business</b>
                    </div>
                    </Nav.Link>
                    <Nav.Link onClick={()=>props.onClickCategory('politics')}>
                        <div>
                        <FaBlackTie size='3rem'/>
                        <b>Politics</b>
                    </div>
                    </Nav.Link>
                    <Nav.Link onClick={()=>props.onClickCategory('technology')}>
                        <div>
                            <FaLaptop size='3rem'/>
                            <b>Technology</b>
                        </div>
                    </Nav.Link>
                    <Nav.Link onClick={()=>props.onClickCategory('science')}>
                        <div>
                            <AiOutlineExperiment size='3rem'/>
                            <b>Science</b>
                        </div>
                    </Nav.Link>
                    <div>
                        <FaGlobe size='3rem'/>
                    <NavDropdown title="Region" id="basic-nav-dropdown">

                        <NavDropdown.Item onClick={()=>props.onClickCountry('ro')}>Romania</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>props.onClickCountry('hu')}>Hungary</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>props.onClickCountry('de')}>Germany</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>props.onClickCountry('at')}>Austria</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>props.onClickCountry('ru')}>Russia</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>props.onClickCountry('us')}>United States</NavDropdown.Item>
                    </NavDropdown>
                    </div>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button>
                        <FaSearch size='1rem'/>
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
)
