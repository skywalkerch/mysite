import { createFileRoute } from '@tanstack/react-router'
import GalleryPlayer, { type PhotoType } from '@/components/custom/GalleryPlayer'
export const Route = createFileRoute('/gallery/2024')({
  component: RouteComponent,
})
const picturesList: PhotoType[] = [
  { url: '/gallery/2024/_DSC4667.jpg', device: 'DSC-RX100M3', focallenth: '24mm', focal: 'f/1.8', time: '1/1250s', ISO: '125' },

]

function RouteComponent() {
  return (
    <GalleryPlayer picturesList={picturesList} bgMusicPath='https://cdn.jsdmirror.com/gh/skywalkerch/PublicRecourcesBed/RecourcesBed/Welcome%20Home-Radical%20Face.mp3' />
  )
}
