import type { CSSProperties } from 'react'
import crestUrl from '../assets/keegan-family-crest.png'
import iconUrl from '../assets/keegan-family-icon.png'
import { classNames } from '../utils/classNames'

type LogoMarkProps = {
  size?: number
  className?: string
  framed?: boolean
  kind?: 'icon' | 'crest'
}

export default function LogoMark({
  size = 42,
  className,
  framed = true,
  kind = 'icon',
}: LogoMarkProps) {
  const style: CSSProperties = {
    width: size,
    height: size,
  }

  const imageUrl = kind === 'crest' ? crestUrl : iconUrl
  const altText = kind === 'crest' ? 'Keegan family crest' : 'Keegan family icon'

  const glyph = (
    <img alt={altText} className="h-full w-full object-contain" src={imageUrl} />
  )

  if (!framed) {
    return (
      <span className={classNames('inline-flex items-center justify-center', className)} style={style}>
        {glyph}
      </span>
    )
  }

  return (
    <span
      className={classNames(
        'inline-flex items-center justify-center rounded-[18px] border border-[rgba(201,163,86,0.18)] bg-[linear-gradient(180deg,rgba(201,163,86,0.14),rgba(255,255,255,0.02))] p-2 shadow-[0_18px_36px_rgba(0,0,0,0.28)]',
        className,
      )}
      style={style}
    >
      {glyph}
    </span>
  )
}
