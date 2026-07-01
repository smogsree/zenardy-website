import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageLayout } from './layouts/PageLayout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { IndustryPage } from './pages/IndustryPage'
import { SolutionPage } from './pages/SolutionPage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/solutions/:slug" element={<SolutionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
