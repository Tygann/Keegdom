import { useEffect } from 'react'

type PageMetaProps = {
  description: string
  title: string
}

export default function PageMeta({ description, title }: PageMetaProps) {
  useEffect(() => {
    document.title = title

    const descriptionTag = document.querySelector('meta[name="description"]')

    if (descriptionTag) {
      descriptionTag.setAttribute('content', description)
    }
  }, [description, title])

  return null
}
