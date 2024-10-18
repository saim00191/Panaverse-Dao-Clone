
import CoreTracks from '@/components/CoreTracks/CoreTracks'
import Hero from '@/components/HeroSection/Hero'
import ProgramOutCome from '@/components/ProgramOutcome/ProgramOutCome'
import SpecializedTrack from '@/components/SpecializedTrack/SpecializedTrack'
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Core-Tracks sections */}
      <CoreTracks />
      {/* Specialized-Tracks sections */}
      <SpecializedTrack />
      {/* Program OutCome Section */}
      <ProgramOutCome/>
    </div>
  )
}
