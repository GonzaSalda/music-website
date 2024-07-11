"use client"
import AlbumSlider from "./AlbumSlider"
import { motion } from "framer-motion"
import { fadeIn } from "../../../variants"
import SectionHeader from "../SectionHeader"
const Albums = () => {
  return (
    <section id="discography">
        <div className="container mx-auto">
            <SectionHeader pretitle="Discography" title="Popular Albums"/>
            {/* Album slider */}
            <AlbumSlider/>
        </div>
    </section>
  )
}

export default Albums