import React from 'react'

const sectionCssClasses = `
  min-h-screen
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
    <h3>{title}</h3>
  </section>
)

export default React.forwardRef((props, ref) => <Section {...props} forwardRef={ref} />)
