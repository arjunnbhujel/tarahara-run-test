import TeamCard from "@/components/ui/teamCard"
import "@/styles/team.css"

import shiva_rai from "@/public/image/team/shiva-rai.jpeg"

const teamDetails = {
  president: {
    title: "President",
    name: "Shiva Rai",
    alt: "President detail",
    number: "98xxxxxxxx",
    img: shiva_rai,
  },
  vice_president: {
    title: "Vice President",
    name: "Min Kumar Khawas",
    alt: "Vice president detail",
    number: "98xxxxxxxx",
    img: shiva_rai,
  },
  secretary: {
    title: "Secretary",
    name: "Jivan Giri",
    alt: "Secretary detail",
    number: "98xxxxxxxx",
    img: shiva_rai,
  },
  treasurer: {
    title: "Treasurer",
    name: "Kishor Khatri",
    alt: "Treasurer detail",
    number: "98xxxxxxxx",
    img: shiva_rai,
  },
  member1: {
    title: "Member",
    name: "Jivan Giri",
    alt: "Member detail",
    img: shiva_rai,
  },
  member2: {
    title: "Member",
    name: "Jivan Giri",
    alt: "Member detail",
    img: shiva_rai,
  },
  member3: {
    title: "Member",
    name: "Jivan Giri",
    alt: "Member detail",
    img: shiva_rai,
  },
}

export default function Team() {
  return (
    <div className="team">
      <h2 className="team_heading">Our Team</h2>
      <div className="teamcard">
        {/* {Object.values(teamDetails).forEach((detail, index) => {
          return <TeamCard key={index} team={detail} />
        })} */}

        <TeamCard team={teamDetails.president} />
        <TeamCard team={teamDetails.vice_president} />
        <TeamCard team={teamDetails.secretary} />
        <TeamCard team={teamDetails.treasurer} />
      </div>
    </div>
  )
}
