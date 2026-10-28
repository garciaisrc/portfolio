import { profile } from '../data/profile'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {currentYear} {profile.name}. Hecho con React + Vite.
      </p>
    </footer>
  )
}
