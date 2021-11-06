import { LatLngExpression, Icon, LatLngBounds, LeafletEventHandlerFnMap } from "leaflet"
import React, { useEffect, useState } from "react"
import { useMapEvents, Marker, Popup, Rectangle  } from "react-leaflet"

// Builtin default image src paths are broken, can't live without this.
const DefaultMarker = new Icon({
  iconUrl: '/assets/leaflet/marker-icon-2x.png',
  shadowUrl: '/assets/leaflet/marker-shadow.png',

  iconSize:     [25, 41],
  shadowSize:   [41, 41],
  iconAnchor:   [12, 37],
  shadowAnchor: [12, 37],
  popupAnchor:  [0, -76]
})

type Props = {
  onSelect?: (bounds?: LatLngBounds) => void
}

/**
 * Renders the selection markers on the map.
 */
const MapRectSelector = ({ onSelect }: Props) => {
  const [markers, setMarkers] = useState([] as LatLngExpression[])
  const [isDragging, setIsDragging] = useState(false)

  const notify = (markers: LatLngExpression[]) => {
    onSelect?.(markers.length === 2
      ? new LatLngBounds(markers[0], markers[1])
      : undefined)
  }

  const pushMarker = (coord: LatLngExpression) => {
    const newMarkers = [...markers, coord].slice(-2)
    setMarkers(newMarkers)
  }

  const updateMarker = (coord: LatLngExpression, index: number) => {
    const newMarkers = [...markers]
    newMarkers[index] = coord
    setMarkers(newMarkers)
  }

  useEffect(() => {
    notify(markers)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markers])

  const getHandlers = (index: number) => ({
    dragend: (e) => {
      setIsDragging(false)
      // TODO: Can this be obtained differently? Using internal prop is not ideal.
      updateMarker(e.target._latlng, index)
    },
    dragstart: () => {
      setIsDragging(true)
    },
  } as LeafletEventHandlerFnMap)

  useMapEvents({
    click: (e) => { pushMarker(e.latlng) },
  })

  return markers.length < 1 ? <></> : <>
    {markers.map((marker, i) => (
      <Marker
        key={i}
        position={marker}
        icon={DefaultMarker}
        draggable
        eventHandlers={getHandlers(i)}
      >
        <Popup>
          <span>{JSON.stringify(marker)}</span>
        </Popup>
      </Marker>
    ))}
    {markers.length === 2 &&
      <Rectangle
        key={`${isDragging}`}
        bounds={new LatLngBounds(markers[0], markers[1])}
        opacity={isDragging ? 0.1 : 1}
      />
    }
  </>
}

export default MapRectSelector
