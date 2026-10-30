import { useState } from 'react'
import { asset } from '../asset'

type Props = { src: string; alt?: string; className?: string }

export default function PhotoPlaceholder({ src, alt = 'us', className = '' }: Props) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden rounded-[2px] bg-blush ${className}`}>
      {!failed ? (
        <img
          src={asset(src)}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-blush via-ivory to-blush text-rose">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
          </svg>
          <span className="eyebrow !text-[0.6rem]">{src.split('/').pop()}</span>
        </div>
      )}
    </div>
  )
}
