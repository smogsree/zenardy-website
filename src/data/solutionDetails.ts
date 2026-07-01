export interface SolutionDetail {
  slug: string
  title: string
  subtitle: string
  benefits: { title: string; description: string }[]
  features: { title: string; description: string }[]
  demoDescription: string
  faqs: { question: string; answer: string }[]
  ctaHeadline: string
}

export const solutionDetails: SolutionDetail[] = [
  {
    slug: 'zen-catch-weight',
    title: 'Zen Catch Weight Solution',
    subtitle: 'Zen IP Solutions',
    benefits: [
      { title: 'Efficiency', description: 'Automates complex expense allocation logic.' },
      {
        title: 'Automation',
        description:
          'Reduces manual steps and ensures accuracy in food & beverage and metal industry environments.',
      },
      {
        title: 'Customization',
        description:
          'Tailored to streamline NetSuite usage for food & beverage and metal industry.',
      },
      {
        title: 'Intelligence',
        description: 'Improves reporting, compliance, and decision-making.',
      },
    ],
    features: [
      { title: 'Seamless Integration', description: 'Built-in NetSuite integration.' },
      { title: 'Live Monitoring', description: 'Support for real-time processing and alerts.' },
      { title: 'Smart Automation', description: 'Custom rules and business logic.' },
      { title: 'Future-Ready', description: 'Scalable architecture for future enhancements.' },
    ],
    demoDescription:
      'Watch how Zen Catch Weight Solution addresses real-world challenges in industries such as food & beverage and metal industry.',
    faqs: [
      {
        question: 'Who can benefit most from Zen Catch Weight Solution?',
        answer:
          'Businesses in food & beverage or metals that deal with variable-weight items like meat, produce, or coils.',
      },
      {
        question: 'Is this solution configurable for different departments or workflows?',
        answer:
          'Yes, the solution supports custom unit configurations and workflows based on your needs.',
      },
      {
        question: 'What ongoing support is provided post-implementation?',
        answer: 'We offer training, documentation, and SLA-based support options.',
      },
    ],
    ctaHeadline: 'Interested in Zen Catch Weight Solution?',
  },
  {
    slug: 'zen-ai-auto-fulfillment',
    title: 'Zen AI Auto Fulfillment – Warehouse',
    subtitle: 'Zen IP Solutions',
    benefits: [
      {
        title: 'AutoFulfill',
        description: 'Improves operational efficiency with Zen AI Auto Fulfillment.',
      },
      {
        title: 'AutoAccuracy',
        description: 'Reduces manual steps and ensures accuracy in multi-warehouse environments.',
      },
      {
        title: 'SuiteStreamlined',
        description: 'Tailored to streamline NetSuite usage for distribution and retail.',
      },
      { title: 'SwiftStock', description: 'Enhances delivery speed and reduces stockouts.' },
    ],
    features: [
      { title: 'Smart Fulfillment', description: 'AI-based nearest warehouse selection.' },
      { title: 'Fulfillment Logic', description: 'Custom fulfillment prioritization rules.' },
      { title: 'Inventory Check', description: 'Real-time inventory validation.' },
      { title: 'Zone Integration', description: 'Integration with shipping zones.' },
    ],
    demoDescription:
      'Watch how Zen AI Auto Fulfillment optimizes intelligent warehouse selection in NetSuite.',
    faqs: [
      {
        question: 'Who can benefit most from Zen AI Auto Fulfillment?',
        answer:
          'Distribution-heavy businesses with multiple warehouses, such as retailers and manufacturers.',
      },
      {
        question: 'Is this solution configurable by business rules?',
        answer:
          'Yes, you can define rules based on location, customer priority, stock levels, and zones.',
      },
      {
        question: 'What ongoing support is provided post-implementation?',
        answer:
          'Our team offers configuration assistance, monitoring tools, and full maintenance support.',
      },
    ],
    ctaHeadline: 'Interested in Zen AI Auto Fulfillment?',
  },
  {
    slug: 'zen-advanced-budgeting',
    title: 'Zen Advanced Budgeting Solution',
    subtitle: 'Zen IP Solutions',
    benefits: [
      {
        title: 'Optimization',
        description: 'Enhances budgeting efficiency across subsidiaries and currencies.',
      },
      { title: 'Accuracy', description: 'Reduces spreadsheet errors and version conflicts.' },
      {
        title: 'Precision',
        description:
          'Enables accurate financial planning across non-profit, tech, and service sectors.',
      },
      { title: 'Clarity', description: 'Improves forecast visibility and control.' },
    ],
    features: [
      { title: 'Global Budgeting', description: 'Multi-subsidiary and multi-currency budget entry.' },
      { title: 'Suite Integration', description: 'Integration with NetSuite standard transactions.' },
      { title: 'Workflow Approvals', description: 'Role-based access and workflow approvals.' },
      { title: 'Actual Tracking', description: 'Real-time budget-to-actual tracking.' },
    ],
    demoDescription:
      'Watch how Zen Advanced Budgeting enables dynamic financial planning and cost control.',
    faqs: [
      {
        question: 'Who can benefit most from Zen Advanced Budgeting Solution?',
        answer: 'Multi-subsidiary organizations in nonprofit, tech, and service industries.',
      },
      {
        question: "Is it integrated with NetSuite's budgeting module?",
        answer:
          "Yes, it extends and enhances NetSuite's native budgeting with AI-driven capabilities.",
      },
      {
        question: 'Can we control permissions by department?',
        answer: 'Yes, budgeting input and approvals are controlled via role-based permissions.',
      },
    ],
    ctaHeadline: 'Interested in Zen Advanced Budgeting?',
  },
  {
    slug: 'zen-mobile-order-printing',
    title: 'Zen Mobile Order Printing',
    subtitle: 'Zen IP Solutions',
    benefits: [
      { title: 'Mobility', description: 'Improves operational efficiency with mobile order printing.' },
      { title: 'Efficiency', description: 'Reduces delays in documentation.' },
      { title: 'Flexibility', description: 'Works in offline and on-the-go environments.' },
      {
        title: 'Versatility',
        description: 'Great fit for retail, manufacturing, distribution, and POS setups.',
      },
    ],
    features: [
      { title: 'Mobile Interface', description: 'Custom mobile interface.' },
      { title: 'Wireless Printing', description: 'Supports wireless printers (Zebra, Dymo, etc.).' },
      { title: 'Live Orders', description: 'Pulls real-time order data from NetSuite.' },
      { title: 'Custom Templates', description: 'Customizable print templates.' },
    ],
    demoDescription:
      'Watch how Zen Mobile Order Printing enables fast, on-the-go document generation from mobile devices.',
    faqs: [
      {
        question: 'Is it compatible with Android/iOS tablets?',
        answer: 'Yes, the solution works on both platforms via mobile browsers or apps.',
      },
      {
        question: 'Can I customize the printed layout?',
        answer: 'Yes, you can fully customize label and invoice templates.',
      },
      {
        question: 'What printers are supported?',
        answer: 'Most thermal and wireless printers like Zebra, Brother, and Dymo are supported.',
      },
    ],
    ctaHeadline: 'Interested in Zen Mobile Order Printing?',
  },
  {
    slug: 'zen-aa-advanced-allocations',
    title: 'Zen AA – Advanced Allocations',
    subtitle: 'Zen IP Solutions',
    benefits: [
      {
        title: 'Simplification',
        description: 'Supports sales teams with mobile invoice and SO printing.',
      },
      { title: 'Granularity', description: 'Supports line-level allocation for better accuracy.' },
      {
        title: 'Universality',
        description: 'Useful across software, nonprofit, and services sectors.',
      },
      { title: 'Visibility', description: 'Enhances cost center tracking and reporting.' },
    ],
    features: [
      {
        title: 'Smart Distribution',
        description: 'Allocation by percentage, fixed value, or formula.',
      },
      { title: 'Line Integration', description: 'Works across transaction lines and accounts.' },
      { title: 'Reusable Templates', description: 'Reusable allocation templates.' },
      { title: 'Allocation Audit', description: 'Full audit trail of allocations.' },
    ],
    demoDescription:
      'See how Zen Advanced Allocations simplifies cost distribution inside NetSuite.',
    faqs: [
      {
        question: 'Who should use Zen Advanced Allocations?',
        answer:
          'Companies needing detailed expense tracking across departments or projects.',
      },
      {
        question: 'Can we create different rules for each cost center?',
        answer: 'Yes, allocation rules can be uniquely defined for any segment.',
      },
      {
        question: 'What types of transactions are supported?',
        answer: 'Expense reports, journal entries, vendor bills, and more.',
      },
    ],
    ctaHeadline: 'Ready to simplify allocations?',
  },
]

export function getSolutionBySlug(slug: string): SolutionDetail | undefined {
  return solutionDetails.find((s) => s.slug === slug)
}

export const solutionSlugByLabel: Record<string, string> = {
  'Zen Catch Weight': 'zen-catch-weight',
  'Zen AI Auto Fulfillment': 'zen-ai-auto-fulfillment',
  'Zen Advanced Budgeting': 'zen-advanced-budgeting',
  'Zen Mobile Order Printing': 'zen-mobile-order-printing',
  'Zen AA – Advanced Allocations': 'zen-aa-advanced-allocations',
}
