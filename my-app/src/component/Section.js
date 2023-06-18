import React from 'react'
import AboutMe from './AboutMe';
import SectionTitle from './SectionTitle';
import Home from './Home';

const sectionCssClasses = `
  flex justify-center items-center
  text-sky-950
`

const SectionContentMapping = {
  'about-me': AboutMe,
  'app-home': Home,
};

const SectionWrapper = ({
  id="app-section",
  title = 'App Section',
  forwardRef,
}) => {
  const Section = SectionContentMapping[id] || SectionTitle

  return (
    <div ref={forwardRef} className={sectionCssClasses} id={id}>
      {!!Section && <Section title={title} />}
    </div>
  )
}

export default React.forwardRef((props, ref) => <SectionWrapper {...props} forwardRef={ref} />)
