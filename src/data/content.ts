import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  Boxes,
  Building2,
  Briefcase,
  Cloud,
  Cpu,
  Factory,
  Heart,
  Layers,
  Link2,
  Package,
  ShoppingCart,
  Store,
  Truck,
  Utensils,
  Workflow,
  Zap,
} from 'lucide-react'

export interface MegaItem {
  label: string
  description: string
  icon: LucideIcon
  to?: string
}

export const servicesMega: MegaItem[] = [
  { label: 'NetSuite Services', description: 'Implementation, admin, customization & training.', icon: Cloud },
  { label: 'NetSuite Integrations', description: 'Amazon, Shopify, Coupa, Walmart & RESTlets.', icon: Link2 },
  { label: 'Celigo Services', description: 'Integrator.io flows & SmartConnectors.', icon: Workflow },
  { label: 'Salesforce Services', description: 'CRM implementation & NetSuite sync.', icon: Building2 },
  { label: 'Boomi Services', description: 'Low-code iPaaS, EDI/B2B, MDM.', icon: Layers },
  { label: 'EPM Services', description: 'NSPB · NSAR · NSAW planning & reporting.', icon: Boxes },
  { label: 'Automation & Intelligence', description: 'RPA, AI chatbots, predictive forecasting.', icon: Bot },
  { label: 'Zen Solutions', description: 'Proprietary NetSuite accelerators.', icon: Zap },
]

export const industriesMega: MegaItem[] = [
  { label: 'Food & Beverage', description: 'Shelf life, compliance & batch tracking.', icon: Utensils, to: '/industries/food-beverage' },
  { label: 'E-commerce & Distribution', description: 'Multi-channel fulfillment at scale.', icon: ShoppingCart, to: '/industries/e-commerce-distribution' },
  { label: 'Wholesale Distribution', description: 'Inventory, pricing & route optimization.', icon: Truck, to: '/industries/wholesale-distribution' },
  { label: 'Retail', description: 'POS integration & omnichannel ops.', icon: Store, to: '/industries/retail' },
  { label: 'Software Services', description: 'Subscription billing & project accounting.', icon: Cpu, to: '/industries/software-services' },
  { label: 'Manufacturing', description: 'MRP, WIP tracking & shop floor control.', icon: Factory, to: '/industries/manufacturing' },
  { label: 'DMO', description: 'Destination marketing & event management.', icon: Building2, to: '/industries/dmo' },
  { label: 'Software/High-Tech', description: 'Revenue recognition & SaaS metrics.', icon: Package, to: '/industries/software-hightech' },
]

export const insideZenardyMega: MegaItem[] = [
  { label: 'Careers', description: 'Join our growing global team.', icon: Briefcase, to: '/#careers' },
  { label: 'Zenardy Culture', description: 'Celebrations, outings & people-first values.', icon: Heart, to: '/about#culture' },
]

export const zenSolutionsMega: MegaItem[] = [
  { label: 'Zen Catch Weight', description: 'Dynamic billing using live weight data.', icon: Package, to: '/solutions/zen-catch-weight' },
  { label: 'Zen AI Auto Fulfillment', description: 'Intelligent order routing & fulfillment.', icon: Bot, to: '/solutions/zen-ai-auto-fulfillment' },
  { label: 'Zen Advanced Budgeting', description: 'Multi-dimensional planning in NetSuite.', icon: Boxes, to: '/solutions/zen-advanced-budgeting' },
  { label: 'Zen Mobile Order Printing', description: 'Warehouse printing from any device.', icon: Zap, to: '/solutions/zen-mobile-order-printing' },
  { label: 'Zen AA – Advanced Allocations', description: 'Complex allocation rules automated.', icon: Layers, to: '/solutions/zen-aa-advanced-allocations' },
]

export interface ServiceCard {
  title: string
  description: string
  outcomes: string[]
}

export const services: ServiceCard[] = [
  {
    title: 'NetSuite Services',
    description: 'Implementation, admin, customization, GST, training.',
    outcomes: [
      'Reduced order processing time by 60%',
      'Unified operations across 3 regions',
      'Deployment in under 90 days',
    ],
  },
  {
    title: 'NetSuite Integrations',
    description: 'Amazon, Shopify, Coupa, Walmart, RESTlets & SOAP.',
    outcomes: [
      'Real-time inventory sync across channels',
      'Eliminated manual data entry',
      '99.9% integration uptime',
    ],
  },
  {
    title: 'Celigo Services',
    description: 'Integrator.io flows & SmartConnectors.',
    outcomes: [
      '50+ automated integration flows',
      'Reduced integration maintenance by 40%',
      'Faster time-to-market for new channels',
    ],
  },
  {
    title: 'Salesforce Services',
    description: 'CRM implementation & NetSuite sync.',
    outcomes: [
      'Unified customer view across CRM & ERP',
      'Automated quote-to-cash pipeline',
      'Improved sales forecast accuracy',
    ],
  },
  {
    title: 'Boomi Services',
    description: 'Low-code iPaaS, EDI/B2B, MDM.',
    outcomes: [
      'Enterprise-wide data governance',
      'EDI compliance for major retailers',
      'Reduced middleware costs by 35%',
    ],
  },
  {
    title: 'EPM Services',
    description: 'NSPB · NSAR · NSAW.',
    outcomes: [
      'Consolidated financial planning',
      'Automated variance reporting',
      'Faster month-end close cycles',
    ],
  },
  {
    title: 'Automation & Intelligence',
    description: 'RPA, AI chatbots, predictive forecasting.',
    outcomes: [
      '70% reduction in support tickets',
      'Automated GL reconciliation',
      'Predictive demand forecasting',
    ],
  },
  {
    title: 'Zen Solutions',
    description: 'Our proprietary NetSuite accelerators.',
    outcomes: [
      'Catch-weight billing automation',
      'Mobile warehouse printing',
      'Advanced allocation rules',
    ],
  },
]

export const industries = [
  {
    name: 'Food & Beverage',
    description:
      'Managing shelf life, compliance, and batch tracking in food production and distribution.',
  },
  {
    name: 'E-commerce & Distribution',
    description: 'Multi-channel order management, fulfillment, and real-time inventory visibility.',
  },
  {
    name: 'Wholesale Distribution',
    description: 'Complex pricing, route planning, and warehouse optimization at scale.',
  },
  {
    name: 'Retail',
    description: 'Omnichannel POS integration, loyalty programs, and store-level analytics.',
  },
  {
    name: 'Software Services',
    description: 'Subscription billing, project accounting, and recurring revenue management.',
  },
  {
    name: 'Manufacturing',
    description: 'MRP, work-in-progress tracking, and shop floor control in NetSuite.',
  },
  {
    name: 'DMO',
    description: 'Destination marketing, event management, and tourism revenue tracking.',
  },
  {
    name: 'Software/High-Tech',
    description: 'Revenue recognition, SaaS metrics, and rapid scaling on the cloud.',
  },
]

export const zenSolutions = [
  { name: 'Zen Catch Weight', benefit: 'Dynamic billing using live weight data.', icon: Package },
  { name: 'Zen AI Auto Fulfillment', benefit: 'Intelligent order routing & fulfillment.', icon: Bot },
  { name: 'Zen Advanced Budgeting', benefit: 'Multi-dimensional planning in NetSuite.', icon: Boxes },
  { name: 'Zen Mobile Order Printing', benefit: 'Warehouse printing from any device.', icon: Zap },
  { name: 'Zen AA – Advanced Allocations', benefit: 'Complex allocation rules automated.', icon: Layers },
]

export interface TeamMember {
  name: string
  title: string
  group: 'leadership' | 'operations' | 'capability'
  linkedin?: string
}

export const team: TeamMember[] = [
  { name: 'Vijay Avadhan', title: 'CEO', group: 'leadership' },
  { name: 'Venky Gurunathan', title: 'COO', group: 'leadership' },
  { name: 'Deepa Avadhan', title: 'Delivery Lead & VP Finance', group: 'leadership' },
  { name: 'Jim Bowes', title: 'High-Tech Sales Lead', group: 'leadership' },
  { name: 'Lindsey Wojcik', title: 'Industry Head, Products', group: 'leadership' },
  { name: 'John Spellacy', title: 'Emerging Sales Head', group: 'leadership' },
  { name: 'Shiva Koppolu', title: 'Hyderabad Center Head', group: 'operations' },
  { name: 'Preethi Ramamurthy', title: 'Chennai Center Head + Senior HR', group: 'operations' },
  { name: 'Saran Vasudevan', title: 'EPM Practice Head', group: 'capability' },
  { name: 'Esther Beula', title: 'Center of Excellence', group: 'capability' },
]

export const stats = [
  { label: 'Years', value: 7, suffix: '' },
  { label: 'Offices', value: 3, suffix: '' },
  { label: 'Uptime', value: 99.9, suffix: '%' },
  { label: 'Records Migrated', value: 250000, suffix: '+' },
]

export const awards = [
  'Product Spotlight – Planning & Budgeting',
  'Industry Spotlight – Robotics',
  'Competitive Spotlight – Microsoft Switch',
  'NetSuite Solution Provider',
  'Celigo Partner Excellence',
  'Oracle NetSuite Partner',
]

export const testimonials = [
  {
    quote:
      'Working with Zenardy was a very pleasant process from start to finish. Their team understood our needs and delivered beyond expectations.',
    name: 'Greater Raleigh Chamber',
    role: 'Enterprise Client',
  },
  {
    quote:
      'Zenardy restored my faith in Oracle. Their expertise and dedication turned a complex implementation into a smooth transition.',
    name: 'QC Kinetix',
    role: 'Healthcare',
  },
  {
    quote:
      "We wouldn't be where we are without each of you. The Zenardy team has been an extension of our own.",
    name: 'IMS',
    role: 'Technology Services',
  },
  {
    quote:
      'Since partnering with Zenardy, we have achieved 30% YOY growth with streamlined operations across our distribution network.',
    name: 'Food & Beverage Client',
    role: 'Distribution',
  },
]

export const timeline = [
  { year: 2018, text: 'Zenardy founded in Tampa, FL — focused on NetSuite implementation excellence.' },
  { year: 2019, text: 'Expanded service offerings to include Celigo and Salesforce integrations.' },
  { year: 2020, text: 'Opened Chennai delivery center; team grew to support global clients remotely.' },
  { year: 2021, text: 'Launched first Zen proprietary solutions — Catch Weight and Advanced Allocations.' },
  { year: 2022, text: 'Hyderabad center established; EPM practice launched with NSPB/NSAR expertise.' },
  { year: 2023, text: 'Zen AI Auto Fulfillment released; 250,000+ records migrated for enterprise clients.' },
  { year: 2024, text: 'AI-Powered NetSuite Chatbot deployed — 70% reduction in support tickets.' },
  { year: 2025, text: '12-person team across 3 offices; industry awards in Planning, Robotics & Microsoft Switch.' },
]

export const careers = [
  { title: 'Senior Functional Consultant – NetSuite', location: 'Remote / Tampa' },
  { title: 'ERP/Finance Consultant', location: 'Chennai / Hyderabad' },
  { title: 'Project Manager', location: 'Tampa, FL' },
]

export const blogPosts = [
  {
    title: 'Recruitment Reinvented',
    excerpt: 'How we built a people-first hiring pipeline across three continents.',
    author: 'Preethi Ramamurthy',
    gradient: 'from-brand/30 to-brand-red-dim/40',
  },
  {
    title: 'People-First Culture',
    excerpt: 'Why culture is the foundation of every successful ERP transformation.',
    author: 'Vijay Avadhan',
    gradient: 'from-brand-red-dim/30 to-brand/20',
  },
  {
    title: 'The Power of DEI',
    excerpt: 'Building diverse teams that deliver better outcomes for our clients.',
    author: 'Supraja Balachandar',
    gradient: 'from-brand/20 to-brand-red/20',
  },
]

export { offices } from './offices'
