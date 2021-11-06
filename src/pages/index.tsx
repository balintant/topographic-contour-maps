import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import Map from '@/components/Map'
import Personalisator from '@/components/Personalisator'

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
`

const Main = styled.main``

const Footer = styled.footer`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
`

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Topographic contour map generator</title>
        <meta name="description" content="Generate SVG files using custom hue range and sampling levels" />
        { /* @TODO: <link rel="icon" href="/favicon.ico" /> */ }
      </Head>

      <Main>
        <h1>
          Topograhic contour map generator
        </h1>

        <Map />
        <Personalisator />

        <p>
          @TODO: Credits.
        </p>
      </Main>

      <Footer>
        <a
          href="https://github.com/orosznyet/topographic-contour-maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code on Github
        </a>
      </Footer>
    </Container>
  )
}

export default Home
