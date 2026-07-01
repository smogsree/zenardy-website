export interface IndustryDetail {
  slug: string
  title: string
  subtitle: string
  description: string
  features: { title: string; description: string }[]
  customization: { title: string; description: string }[]
  testimonial: { quote: string; attribution: string }
  caseStudy: string
  faq: { question: string; answer: string }
}

export const industryDetails: IndustryDetail[] = [
  {
    slug: 'food-beverage',
    title: 'Food & Beverage',
    subtitle: 'Food & Beverage',
    description:
      'Managing shelf life, compliance, and batch tracking in food production and distribution.',
    features: [
      {
        title: 'Lot and expiration tracking',
        description:
          'Lot and Expiration Tracking ensures traceability of product batches and their expiry dates for quality control and compliance.',
      },
      {
        title: 'Recipe/BOM management',
        description:
          'Recipe/BOM Management handles the creation and control of product formulas or bills of materials to ensure accurate production and costing.',
      },
      {
        title: 'Quality control and traceability',
        description:
          'Quality Control and Traceability ensure products meet standards and can be tracked through every stage of production and delivery.',
      },
      {
        title: 'Regulatory reporting (FDA, FSSAI)',
        description:
          'Regulatory Reporting (FDA, FSSAI) ensures compliance by generating required reports for food and drug authorities like FDA and FSSAI.',
      },
    ],
    customization: [
      {
        title: 'Cold storage inventory handling',
        description:
          'Cold Storage Inventory Handling manages temperature-sensitive stock to ensure safe storage, compliance, and reduced spoilage.',
      },
      {
        title: 'Recall traceability tools',
        description:
          'Recall Traceability Tools quickly identify and track affected products across the supply chain to ensure efficient and compliant recalls.',
      },
      {
        title: 'Nutritional labeling modules',
        description:
          'Nutritional Labeling Modules automate the creation of accurate nutrition labels based on product ingredients and regulatory standards.',
      },
    ],
    testimonial: {
      quote: 'Zenardy helped us meet compliance without sacrificing efficiency.',
      attribution: 'QA Director',
    },
    caseStudy: 'Enabled FDA audit readiness in under 60 days.',
    faq: {
      question: 'Do you support expiration-based stock rotation?',
      answer: 'Yes, with FIFO/FEFO configurations.',
    },
  },
  {
    slug: 'e-commerce-distribution',
    title: 'E-commerce, Distribution',
    subtitle: 'E-commerce, Distribution',
    description:
      'Helping distributors manage multi-location inventory, logistics, and order orchestration.',
    features: [
      {
        title: 'Real-time inventory across locations',
        description:
          'Real-Time Inventory Across Locations provides live visibility of stock levels at all sites, ensuring efficient inventory management and fulfillment.',
      },
      {
        title: 'Automated reorder and fulfillment',
        description:
          'Automated Reorder and Fulfillment triggers restocking and order processing based on inventory levels, reducing stockouts and manual effort.',
      },
      {
        title: 'Bin management and barcode scanning',
        description:
          'Bin Management and Barcode Scanning optimize warehouse organization and enable quick, accurate tracking of items through barcode-enabled bin locations.',
      },
      {
        title: 'Drop shipment and backorder handling',
        description:
          'Drop Shipment and Backorder Handling streamline order fulfillment by managing third-party shipments and tracking pending stock to ensure timely delivery.',
      },
    ],
    customization: [
      {
        title: 'Pick-pack-ship automation',
        description:
          'Pick-Pack-Ship Automation streamlines order fulfillment by automating the picking, packing, and shipping process for faster and error-free deliveries.',
      },
      {
        title: 'Demand planning',
        description:
          'Demand Planning forecasts customer needs to optimize inventory, reduce waste, and ensure timely product availability.',
      },
      {
        title: 'Carrier integrations',
        description:
          'Carrier Integrations connect shipping providers directly to your system for real-time rates, label generation, and tracking updates.',
      },
    ],
    testimonial: {
      quote:
        "Our fulfillment rates jumped significantly after implementing Zenardy's NetSuite solution.",
      attribution: 'Supply Chain Head',
    },
    caseStudy: 'Reduced stockouts by 35% for a national distributor in Q1 alone.',
    faq: {
      question: 'Can I manage multiple warehouses?',
      answer: 'Yes, with full multi-location inventory tracking.',
    },
  },
  {
    slug: 'wholesale-distribution',
    title: 'Wholesale Distribution',
    subtitle: 'Wholesale Distribution',
    description:
      'Helping distributors manage multi-location inventory, logistics, and order orchestration.',
    features: [
      {
        title: 'Real-time inventory across locations',
        description:
          'Real-Time Inventory Across Locations provides live visibility of stock levels at all sites, ensuring efficient inventory management and fulfillment.',
      },
      {
        title: 'Automated reorder and fulfillment',
        description:
          'Automated Reorder and Fulfillment triggers restocking and order processing based on inventory levels, reducing stockouts and manual effort.',
      },
      {
        title: 'Bin management and barcode scanning',
        description:
          'Bin Management and Barcode Scanning optimize warehouse organization and enable quick, accurate tracking of items through barcode-enabled bin locations.',
      },
      {
        title: 'Drop shipment and backorder handling',
        description:
          'Drop Shipment and Backorder Handling streamline order fulfillment by managing third-party shipments and tracking pending stock to ensure timely delivery.',
      },
    ],
    customization: [
      {
        title: 'Pick-pack-ship automation',
        description:
          'Pick-Pack-Ship Automation streamlines order fulfillment by automating the picking, packing, and shipping process for faster and error-free deliveries.',
      },
      {
        title: 'Demand planning',
        description:
          'Demand Planning forecasts customer needs to optimize inventory, reduce waste, and ensure timely product availability.',
      },
      {
        title: 'Carrier integrations',
        description:
          'Carrier Integrations connect shipping providers directly to your system for real-time rates, label generation, and tracking updates.',
      },
    ],
    testimonial: {
      quote:
        "Our fulfillment rates jumped significantly after implementing Zenardy's NetSuite solution.",
      attribution: 'Supply Chain Head',
    },
    caseStudy: 'Reduced stockouts by 35% for a national distributor in Q1 alone.',
    faq: {
      question: 'Can I manage multiple warehouses?',
      answer: 'Yes, with full multi-location inventory tracking.',
    },
  },
  {
    slug: 'retail',
    title: 'Retail',
    subtitle: 'Retail',
    description:
      'Enabling fashion and retail companies to manage seasonal inventory and multi-channel sales.',
    features: [
      {
        title: 'SKU matrix (size/color)',
        description:
          'SKU Matrix (Size/Color) manages product variants like size, color, or style under a single item for simplified inventory and sales tracking.',
      },
      {
        title: 'Seasonal planning and forecasting',
        description:
          'Seasonal Planning and Forecasting predicts demand shifts based on seasons or trends to optimize inventory, production, and sales strategies.',
      },
      {
        title: 'E-commerce and POS integration',
        description:
          'E-commerce and POS Integration syncs online and in-store sales channels for unified inventory, order, and customer management.',
      },
      {
        title: 'Returns and exchanges management',
        description:
          'Returns and Exchanges Management streamlines the process of handling product returns and replacements to ensure customer satisfaction and accurate inventory updates.',
      },
    ],
    customization: [
      {
        title: 'Shopify and Amazon integration',
        description:
          'Shopify and Amazon Integration connects your store with leading platforms to sync inventory, orders, and product listings for seamless multichannel selling.',
      },
      {
        title: 'Visual assortment planning',
        description:
          'Visual Assortment Planning helps teams design and organize product collections using visual layouts to optimize merchandising and meet customer demand.',
      },
      {
        title: 'Vendor compliance tools',
        description:
          'Vendor Compliance Tools ensure suppliers meet your quality, delivery, and packaging standards to maintain smooth and consistent operations.',
      },
    ],
    testimonial: {
      quote: 'Inventory sync across stores and online channels is seamless now.',
      attribution: 'Retail Director',
    },
    caseStudy: 'Boosted inventory turnover by 28% after system overhaul.',
    faq: {
      question: 'Do you support multiple styles and variants?',
      answer: 'Yes, through the matrix item feature.',
    },
  },
  {
    slug: 'software-services',
    title: 'Software Services',
    subtitle: 'Software Services',
    description: 'Optimizing operations for SaaS and tech-enabled businesses.',
    features: [
      {
        title: 'Subscription billing',
        description:
          'Subscription Billing automates recurring payments, invoicing, and renewals for products or services offered on a subscription basis.',
      },
      {
        title: 'Revenue recognition (ASC 606 compliant)',
        description:
          'Revenue Recognition (ASC 606 Compliant) ensures accurate, timely revenue reporting by following standardized accounting rules for contracts and performance obligations.',
      },
      {
        title: 'Deferred revenue and renewals',
        description:
          'Deferred Revenue and Renewals manage income received in advance and automate renewal processes to ensure accurate financial reporting and continuity.',
      },
      {
        title: 'Investor-ready reporting',
        description:
          'Investor-Ready Reporting provides clear, accurate financial and operational reports to support transparency and informed decision-making for stakeholders.',
      },
    ],
    customization: [
      {
        title: 'API integrations with CRMs',
        description:
          'API Integrations with CRMs seamlessly connect your system with CRM platforms to sync customer data, streamline workflows, and enhance sales and service efficiency.',
      },
      {
        title: 'Advanced billing logic',
        description:
          'Advanced Billing Logic supports complex pricing models, discounts, and billing schedules to accommodate diverse customer and contract needs.',
      },
      {
        title: 'Global consolidation',
        description:
          'Global Consolidation combines financial data from multiple entities, currencies, and regions into unified reports for accurate global visibility and compliance.',
      },
    ],
    testimonial: {
      quote: 'Our recurring revenue is now fully automated and audit-proof.',
      attribution: 'CFO',
    },
    caseStudy: 'Cut manual invoice efforts by 70% with usage-based billing automation.',
    faq: {
      question: 'Does NetSuite support usage-based pricing?',
      answer: 'Yes, including hybrid models.',
    },
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    subtitle: 'Manufacturing',
    description:
      'Helping manufacturers optimize inventory, streamline production, and improve demand forecasting.',
    features: [
      {
        title: 'Real-time inventory visibility',
        description:
          'Gain up-to-the-minute insights into stock levels across locations to optimize fulfillment, reduce stockouts, and improve decision-making.',
      },
      {
        title: 'Work order and BOM management',
        description:
          'Streamline production with accurate Bill of Materials and work order tracking to ensure efficient assembly, resource planning, and cost control.',
      },
      {
        title: 'Demand and supply planning',
        description:
          'Align production schedules with demand forecasts to balance capacity, reduce waste, and meet customer delivery commitments.',
      },
      {
        title: 'Shop floor integration',
        description:
          'Connect shop floor operations with ERP for real-time production tracking, labor capture, and operational visibility.',
      },
    ],
    customization: [
      {
        title: 'Barcode scanning and mobile pick/pack',
        description:
          'Barcode Scanning and Mobile Pick/Pack streamline inventory handling by enabling fast, accurate picking and packing using mobile devices.',
      },
      {
        title: 'Custom workflows for discrete and batch manufacturing',
        description:
          'Custom Workflows for Discrete and Batch Manufacturing tailor production processes to fit specific operational needs, ensuring efficiency and compliance in both manufacturing types.',
      },
      {
        title: 'Production costing modules',
        description:
          'Production Costing Modules track and calculate the total cost of manufacturing, including materials, labor, and overhead, for accurate pricing and profitability analysis.',
      },
    ],
    testimonial: {
      quote: "Zenardy's tailored NetSuite deployment transformed our production planning process.",
      attribution: 'Operations Manager',
    },
    caseStudy: 'Reduced lead times by 30% through integrated supply chain automation.',
    faq: {
      question: 'Can NetSuite support multi-level BOMs?',
      answer: 'Absolutely, with dynamic routing and costing.',
    },
  },
  {
    slug: 'dmo',
    title: 'DMO',
    subtitle: 'DMO (Destination Marketing Organizations)',
    description:
      'Serving tourism boards and destination marketers with campaign, budget, and grant management tools.',
    features: [
      {
        title: 'Grant tracking and compliance',
        description:
          'Grant Tracking and Compliance monitors fund usage, reporting, and deadlines to ensure adherence to grant terms and regulatory requirements.',
      },
      {
        title: 'Marketing campaign analytics',
        description:
          'Marketing Campaign Analytics tracks campaign performance metrics to measure ROI, optimize strategies, and drive better engagement and conversions.',
      },
      {
        title: 'Stakeholder reporting tools',
        description:
          'Stakeholder Reporting Tools deliver clear, tailored insights to investors, boards, and partners for informed decision-making and transparency.',
      },
      {
        title: 'Event and budget management',
        description:
          'Event and Budget Management streamlines planning, spending, and tracking for events to ensure they stay within budget and meet objectives.',
      },
    ],
    customization: [
      {
        title: 'Custom dashboards for grant KPIs',
        description:
          'Custom Dashboards for Grant KPIs provide real-time visual tracking of grant performance metrics to ensure transparency, compliance, and goal alignment.',
      },
      {
        title: 'Integrated event calendars',
        description:
          'Integrated Event Calendars centralize scheduling and coordination of events, improving visibility, planning, and team collaboration.',
      },
      {
        title: 'Ad performance syncing',
        description:
          'Ad Performance Syncing connects ad platforms to your system, enabling real-time tracking and analysis of campaign results across channels.',
      },
    ],
    testimonial: {
      quote: "Our destination campaign reporting improved with Zenardy's streamlined suite.",
      attribution: 'CFO',
    },
    caseStudy: 'Enabled compliance tracking for state-level tourism fund allocation.',
    faq: {
      question: 'Can we track campaign ROI and grants together?',
      answer: 'Yes, all in one financial view.',
    },
  },
  {
    slug: 'software-hightech',
    title: 'Software / Hightech',
    subtitle: 'Software / Hightech',
    description: 'Supporting high-growth tech firms with scalable finance and R&D solutions.',
    features: [
      {
        title: 'Advanced revenue models',
        description:
          'Advanced Revenue Models support complex income structures like subscriptions, usage-based billing, and multi-element arrangements for flexible monetization.',
      },
      {
        title: 'R&D project tracking',
        description:
          'R&D Project Tracking monitors research and development activities, timelines, and budgets to ensure progress, compliance, and strategic alignment.',
      },
      {
        title: 'Subscription management',
        description:
          'Subscription Management automates sign-ups, billing, renewals, and customer preferences for seamless recurring service delivery.',
      },
      {
        title: 'Global financial consolidation',
        description:
          'Global Financial Consolidation unifies financial data from multiple entities, currencies, and regions into a single, accurate view for streamlined reporting and compliance.',
      },
    ],
    customization: [
      {
        title: 'Cap table integration',
        description:
          'Cap Table Integration syncs equity ownership data with financial systems to simplify stakeholder management, reporting, and fundraising insights.',
      },
      {
        title: 'Milestone-based funding tracking',
        description:
          'Milestone-Based Funding Tracking monitors fund disbursements tied to project milestones, ensuring accountability, budget control, and goal alignment.',
      },
      {
        title: 'Custom user portals',
        description:
          'Custom User Portals provide personalized, secure access to data, services, and tools tailored to individual user roles and needs.',
      },
    ],
    testimonial: {
      quote: "We scaled from startup to Series C with Zenardy's finance infrastructure.",
      attribution: 'CFO',
    },
    caseStudy: 'Enabled investor-grade reporting in under 45 days for a VC-backed startup.',
    faq: {
      question: 'Do you support multi-entity setups?',
      answer: 'Yes, with real-time consolidation.',
    },
  },
]

export function getIndustryBySlug(slug: string): IndustryDetail | undefined {
  return industryDetails.find((i) => i.slug === slug)
}

export const industrySlugByLabel: Record<string, string> = {
  'Food & Beverage': 'food-beverage',
  'E-commerce & Distribution': 'e-commerce-distribution',
  'Wholesale Distribution': 'wholesale-distribution',
  Retail: 'retail',
  'Software Services': 'software-services',
  Manufacturing: 'manufacturing',
  DMO: 'dmo',
  'Software/High-Tech': 'software-hightech',
}
