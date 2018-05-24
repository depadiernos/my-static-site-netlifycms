import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import styled, { injectGlobal } from 'styled-components'

const App = () => (
  <Router>
    <div>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </Nav>
      <Content>
        <Routes />
      </Content>
    </div>
  </Router>
)

export default hot(module)(App)

const Nav = styled.nav`
  width: 100%;
  background: #108db8;
  a {
    color: white;
    padding: 1rem;
    display: inline-block;
  }
`

const Content = styled.div`
  padding: 1rem;
`

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }
  img {
    max-width: 100%;
  }

  .image {
    width: 25%;
    min-width: 250px;
    height: auto;
  }

  .blog-post {
   display: flex;
   flex-direction: column;
  }
`
