import styled from 'styled-components'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import MapRectSelector from './MapRectSelector'

const Container = styled(MapContainer)`
  width: 100%;
  height: 50vh;
`

type Props = {
  center: LatLngExpression
}

/**
 * WARNING: Use MapUniversal to avoid SSR undefined window error.
 */
const Map = (props: Props) => {
  const copyright = '&copy; '
    + '<a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors';

  return (
    <Container
      center={props.center}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution={copyright}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapRectSelector />
    </Container>
  )
}

export default Map
