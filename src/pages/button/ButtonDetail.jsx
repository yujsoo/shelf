import { useParams, Navigate } from 'react-router-dom'
import ShowcaseLayout from '../../layouts/ShowcaseLayout'
import { BUTTONS } from './buttons'

export default function ButtonDetail() {
  const { id } = useParams()
  const btn = BUTTONS.find(b => b.id === id)

  if (!btn) return <Navigate to="/button" replace />

  return (
    <ShowcaseLayout code={btn.code} backTo="/button" hint={btn.hint}>
      <btn.Component />
    </ShowcaseLayout>
  )
}
