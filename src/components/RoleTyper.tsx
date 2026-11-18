import { profile } from '../data/profile'
import { useTypewriter } from '../hooks/useTypewriter'

export default function RoleTyper() {
  const text = useTypewriter(profile.roles)

  return (
    <span className="role-typer">
      <span className="sr-only">{profile.role}</span>
      <span aria-hidden="true">
        {text}
        <span className="role-typer__cursor" />
      </span>
    </span>
  )
}
