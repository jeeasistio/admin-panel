import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Container from '@material-ui/core/Container'
import Footer from './Footer'

const Layout = ({
  withNav = true,
  withFooter = true,
  children,
  containerWidth
}) => {
  return (
    <>
      {withNav && <Nav />}

      {containerWidth ? (
        <Main>
          <Container maxWidth={containerWidth}>{children}</Container>
        </Main>
      ) : (
        <Main>{children}</Main>
      )}

      {withFooter && <Footer />}
    </>
  )
}

export default Layout
