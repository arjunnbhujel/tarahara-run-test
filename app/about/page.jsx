import Image from "next/image"

import running from "@/public/image/about/running.svg"
import community from "@/public/image/about/community.svg"
import youth from "@/public/image/about/youth.svg"
import certificate from "@/public/image/about/certificate.jpeg"

import "@/styles/about.css"

export default function About() {
  return (
    <main className="about">
      <div className="about_intro">
        <h2 className="about_title">About Tarahara Run</h2>
        <p>
          Welcome to Tarahara Run, a vibrant community brought together by a
          shared passion for running and a commitment to making a positive
          impact. We are a not-for-profit organization dedicated to promoting
          health, unity, and community engagement through the joy of running.
        </p>
        <p>
          At Tarahara Run, we believe in the transformative power of running.
          Our mission is to inspire individuals to lead healthier lifestyles,
          foster a sense of community, and contribute to meaningful social
          change. Through weekly runs and a variety of running events, we aim to
          create a space where every step counts towards a better tomorrow.
        </p>
        <p>
          Tarahara Run invites you to lace up your shoes and join us on a
          journey of fitness, friendship, and fulfillment. Whether you&apos;re
          running for personal goals, the joy of being active, or a shared
          cause, Tarahara Run is the place where every stride matters.
        </p>
      </div>

      <div className="about_goal">
        <h2 className="about_title">Our Goals</h2>
        <div className="about_goal-card">
          <div className="card_icon running">
            <Image src={running} width="auto" height="200" alt="running icon" />
            <p>Promoting Running Habit</p>
          </div>

          <div className="card_icon community">
            <Image
              src={community}
              width="auto"
              height="200"
              alt="community icon"
            />
            <p>Community Building</p>
          </div>

          <div className="card_icon youth">
            <Image
              src={youth}
              width="auto"
              height="200"
              alt="community youth"
            />
            <p>Youth Empowerment</p>
          </div>
        </div>
      </div>

      <div className="about_registration">
        <h2 className="about_title">We Are Registered Organization</h2>
        <Image
          src={certificate}
          alt="certificate of registration"
          className="image_certificate"
        />
      </div>
    </main>
  )
}
