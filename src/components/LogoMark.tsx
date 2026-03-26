import type { CSSProperties } from 'react'
import { classNames } from '../utils/classNames'

type LogoMarkProps = {
  size?: number
  className?: string
  framed?: boolean
}

export default function LogoMark({
  size = 42,
  className,
  framed = true,
}: LogoMarkProps) {
  const style: CSSProperties = {
    width: size,
    height: size,
  }

  const glyph = (
    <svg
      viewBox="0 0 32 32"
      className="h-full w-full"
      fill="none"
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M16 2L21 7L26 5V15C26 22 21.5 27 16 30C10.5 27 6 22 6 15V5L11 7L16 2Z"
        fill="#C9A356"
        fillOpacity="0.14"
        stroke="#C9A356"
        strokeWidth="1.2"
      />
      <path d="M9 12L12.5 8L16 12L20 8L23 12V14.5H9V12Z" fill="#F7F1E7" />
      <path d="M11.5 17H20.5" stroke="#C9A356" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12.75 20.5H19.25" stroke="#C9A356" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
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
