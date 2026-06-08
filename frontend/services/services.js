const services = [
  { id: 1, title: 'Residential Cleaning', description: 'Detailed home cleaning for everyday upkeep', icon: 'home-clean' },
  { id: 2, title: 'Office Cleaning', description: 'Professional workspace cleaning and surface care', icon: 'office-clean' },
  { id: 3, title: 'Deep Cleaning', description: 'Intensive cleaning for kitchens, bathrooms, and high-touch areas', icon: 'deep-clean' },
  { id: 4, title: 'Move-In / Move-Out', description: 'Thorough cleanup for property transitions and turnovers', icon: 'move-clean' },
  { id: 5, title: 'Commercial Cleaning', description: 'Recurring support for teams and business spaces', icon: 'commercial' },
  { id: 6, title: 'Sanitization Service', description: 'Targeted sanitation before and after busy periods', icon: 'sanitize' },
]

export const getServices = () => services
export const getServiceById = (id) => services.find((service) => service.id === id)
