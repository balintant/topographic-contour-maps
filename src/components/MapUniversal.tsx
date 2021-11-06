import dynamic from 'next/dynamic'

/**
 * IMPORTANT: Use this file instead of Map component due to it having a
 * non-SSR friendly file import. Dynamic loader will only load map when
 * window is available.
 */
const MapUniversal = dynamic(
  () => import('./Map'),
  { ssr: false }
)

export default MapUniversal
