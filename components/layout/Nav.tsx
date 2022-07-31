import React from 'react'
import { Navbar, Container, Button, NavbarBrand } from 'react-bootstrap'
import Link from 'next/link'

function Nav() {
  return (
    <Navbar>
      <Container>
        <NavbarBrand>
          Task Manager
        </NavbarBrand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            Signed in as: <a href='#login'></a>
          </Navbar.Text>
          <Link href='' passHref>
            <Button>Log out</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav