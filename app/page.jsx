import Insurance from "./components/home/Insurance"
import EmblaCarousel from "./components/home/EmblaCarousel"
import ServicesSnippet from "./components/home/ServicesSnippet"
import Appointment from "./components/home/Appointment"

export default function Home() {
  return (
    <main >
      <EmblaCarousel />
      <ServicesSnippet />
      <Insurance />
      <Appointment />
    </main>
  )
}
