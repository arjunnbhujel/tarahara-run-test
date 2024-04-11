import "@/components/ui/styles/copyright.css"

export default function Copyright() {
  return (
    <div className="copyright">
      <p className="copyright_info">© 2024 Tarahara Run.</p>
      <p className="copyright_developer">
        Made with ❤ by{" "}
        <a
          href="https://arjunbhujel.com.np/"
          rel="noreferrer"
          target="_blank"
          className="developer_link"
        >
          Arjun Bhujel
        </a>
      </p>
    </div>
  )
}
