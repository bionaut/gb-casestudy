import React, { FC } from 'react'
import {StarIcon} from '@heroicons/react/24/solid'

interface ProductRatingProps {
  // 0 - 100 (from what I can tell)
  rating: number
}

const Star = ({ checked }: { checked: boolean }) => {
  const classes = `h-6 w-6 ${checked ? 'text-orange-500 ' : 'text-orange-200'}`
  return <StarIcon className={classes} />
}

export const ProductRating: FC<ProductRatingProps> = (props) => {
  const { rating } = props
  const stars = ratingToStars(rating)

  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => {
        const isChecked = index < stars
        return <Star checked={isChecked} key={index} />
      })}
    </div>
  )
}

function ratingToStars(rating: number): number {
  return  Math.round(rating / 20)
}
