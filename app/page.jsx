import Insurance from "./components/home/Insurance"
import EmblaCarousel from "./components/home/EmblaCarousel"
import ServicesSnippet from "./components/home/ServicesSnippet"

export default function Home() {
  return (
    <main >
      <EmblaCarousel />
      <ServicesSnippet />
      <Insurance />
    </main>
  )
}
