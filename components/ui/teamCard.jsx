import "@/components/ui/styles/teamCard.css"
import Image from "next/image"

export default function TeamCard({ team }) {
  return (
    <div className="teamcard_details">
      <Image src={team.img} width={200} height={240} alt={team.alt} />
      <div className="teamcard_text">
        <h3 className="teamcard_title">{team.title}</h3>
        <p className="teamcard_name">{team.name}</p>
        <p className="teamcard_number">{team.number}</p>
      </div>
    </div>
  )
}
