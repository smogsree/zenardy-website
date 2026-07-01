export interface OfficeLocation {
  name: string
  address: string
  phone: string
  mapsLink: string
  mapsEmbed?: string
}

export const offices: OfficeLocation[] = [
  {
    name: 'Tampa LLC',
    address: '28210 Paseo Drive #214, Wesley Chapel, Tampa, FL 33543, USA',
    phone: '+1 (813) 555-0142',
    mapsLink:
      'https://www.google.com/maps/place/28210+Paseo+Drive+%23214,+Wesley+Chapel,+FL+33543,+USA/@28.1881329,-82.3522181,17z',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.631085538834!2d-82.35221812481261!3d28.188132904122988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b0d726c56985%3A0x9984ccb7d9d1639a!2s28210%20Paseo%20Drive%20%23214%2C%20Wesley%20Chapel%2C%20FL%2033543%2C%20USA!5e0!3m2!1sen!2sin!4v1779380491993!5m2!1sen!2sin',
  },
  {
    name: 'Chennai',
    address:
      'No. 39, 1st Cross St, Judges Colony, Nehru Nagar, Perungudi, Chennai, Tamil Nadu 600096, India',
    phone: '+91 44 5555 0180',
    mapsLink: 'https://www.google.com/maps/place/Zenardy+Technologies+Pvt+Ltd/@12.974196,80.249596,17z',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.963350160902!2d80.24702117358912!3d12.974195964824359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677ac82fcfe9%3A0xf8578731cd69e777!2sZenardy%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1749648754739!5m2!1sen!2sin',
  },
  {
    name: 'Hyderabad',
    address:
      'EON Hyderabad by Navanaami, Nanakramguda, Financial District, Hyderabad, Telangana 500032, India',
    phone: '+91 40 5555 0195',
    mapsLink: 'https://maps.app.goo.gl/iCUYvypt2cjB8CRw6',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.506048649082!2d78.35121339999999!3d17.4073384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9578f3bd8073%3A0x2786f63edeef6ca5!2sEON%20Hyderabad%20by%20Navanaami!5e0!3m2!1sen!2sin!4v1782935753081!5m2!1sen!2sin',
  },
]
