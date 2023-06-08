import React from 'react'
import './Section.css'

const Section = ({
  id="app-section",
  title = 'App Section',
  isOdd = false,
  forwardRef,
}) => (
  <section ref={forwardRef} className={`app-section ${isOdd ? 'odd' : ''}`} id={id}>
    <h3>{title}</h3>
  </section>
)

export default React.forwardRef((props, ref) => <Section {...props} forwardRef={ref} />)
