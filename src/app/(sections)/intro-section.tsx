import React, { FC } from 'react'
import Image from 'next/image'

export const IntroSection: FC = (props) => {
  return (
    <section className={'flex flex-col w-full mt-4 px-4 md:px-0 space-y-4'}>
      <div className={'w-full'}>
        <h1 className={'cool-header gradient'}>
          Sports <br className={'hidden md:block'} /> Nutrition
        </h1>
        <Image className={'runner'} alt={'man running'} width={554} height={642} src={'/hero-section-runner-man.png'} />
      </div>
      <div className={'prose lg:prose-lg'}>
        <p className={'text-2xl font-light'}>
          Sports Nutrition is a category of products that covers dozens of different types of dietary supplements for
          athletes. These include <a href={'https://gymbeam.com/protein'}>proteins</a>,{' '}
          <a href={'https://gymbeam.com/amino-acids'}>amino acids</a>,{' '}
          <a href={'https://gymbeam.com/weight-gainers-and-carbohydrates'}>weight gainers and carbohydrates</a>,{' '}
          <a href={'https://gymbeam.com/fat-burners'}>fat burners</a>,{' '}
          <a href={'https://gymbeam.com/joint-supplements'}>joint supplements</a>,{' '}
          <a href={'https://gymbeam.com/pre-workout-and-testosterone-support-supplements'}>
            pre-workout and testosterone support supplements
          </a>
          , <a href={'https://gymbeam.com/vitamins'}>vitamins and minerals</a>.
        </p>
        <p className={'text-2xl font-light'}>
          The category is intended for <strong>strength athletes, runners, cyclists</strong> and all the{' '}
          <strong>fans of a healthy</strong> lifestyle. And we are not talking about just the physical sports, because
          gamers and e-sport fans will also come to appreciate such supplements. Nutrition in sports or e-sports is one
          of the main pillars, thanks to which you can achieve your goals much more easily.
        </p>
      </div>
    </section>
  )
}
