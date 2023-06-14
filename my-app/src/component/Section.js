import React from 'react'

const sectionCssClasses = `
  flex justify-evenly items-center
  text-sky-950
`

const Section = ({
  id="app-section",
  title = 'App Section',
  isOdd = false,
  forwardRef,
}) => (
  <section ref={forwardRef} className={`${sectionCssClasses} ${isOdd ? '' : 'bg-gray-50'}`} id={id}>
    <p className='text-5xl'>{title}</p>
  </section>
)

export default React.forwardRef((props, ref) => <Section {...props} forwardRef={ref} />)
