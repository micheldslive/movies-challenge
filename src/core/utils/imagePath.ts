import Placeholder from '@/assets/placeholder.png'

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASEURL || ''

export const ImagePath = (path: string) =>
  path ? IMAGE_BASE_URL + path : Placeholder
