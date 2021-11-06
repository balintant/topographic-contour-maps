import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import Map from '@/components/MapUniversal'
import Personalisator from '@/components/Personalisator'
import { LatLngBounds } from 'leaflet'
import { useState } from 'react'

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
  const [bounds, setBounds] = useState<LatLngBounds | undefined>()

  return (
    <Container>
      <Head>
        <title>Topographic contour map generator</title>
        <meta name="description" content="Generate SVG files using custom hue range and sampling levels" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Main>
        <h1>
          Topograhic contour map generator
        </h1>

        <Map
          center={[47.503802, 19.031654]}
          onSelect={(bounds: LatLngBounds) => { setBounds(bounds) }}
          />
        <Personalisator />

        <p>Your coordinates: {bounds ? bounds.toBBoxString() : '[please select on the map first]'}</p>

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
