import Image from "next/image"

import "@/components/ui/styles/weeklyRun.css"
import WeeklyRunPhoto from "@/public/image/home/Photo.png"

export default function WeeklyRun() {
  return (
    <div className="weeklyRun">
      <h2 className="weeklyRun_heading">WE ORGANIZE WEEKLY RUN</h2>
      <p className="weeklyRun_text">EVERY SATURDAY</p>
      <p className="weeklyRun_text">TIME - 6:30 PM</p>
      <p className="weeklyRun_text">LOCATION - PANIPIYA, TARAHARA</p>
      <Image
        className="weeklyRun_image"
        src={WeeklyRunPhoto}
        alt="Weekly Run Group Photo"
      />
    </div>
  )
}
