import { useParams, Navigate } from 'react-router-dom'
import { IndustryDetailPage } from '../components/IndustryDetailPage'
import { getIndustryBySlug } from '../data/industryDetails'

export function IndustryPage() {
  const { slug } = useParams<{ slug: string }>()
  const industry = slug ? getIndustryBySlug(slug) : undefined

  if (!industry) {
    return <Navigate to="/#industries" replace />
  }

  return <IndustryDetailPage industry={industry} />
}
