import { useParams, Navigate } from 'react-router-dom'
import { SolutionDetailPage } from '../components/SolutionDetailPage'
import { getSolutionBySlug } from '../data/solutionDetails'

export function SolutionPage() {
  const { slug } = useParams<{ slug: string }>()
  const solution = slug ? getSolutionBySlug(slug) : undefined

  if (!solution) {
    return <Navigate to="/#zen-solutions" replace />
  }

  return <SolutionDetailPage solution={solution} />
}
