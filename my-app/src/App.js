import React, { useCallback, useEffect, useMemo } from 'react';
import './App.css';
import Section from './component/Section';
import RootLayout from './layout/RootLayout';

function App() {
  const homeRef = React.createRef()
  const aboutUsRef = React.createRef()
  const contactRef = React.createRef()
  const socialRef = React.createRef()
  const feedbackRef = React.createRef()

  const refMapping = useMemo(
    () => ({
      "app-home": homeRef,
      "app-about-us": aboutUsRef,
      "app-contact": contactRef,
      "app-social": socialRef,
      "app-feedback": feedbackRef,
    }),
    [aboutUsRef, contactRef, feedbackRef, homeRef, socialRef],
  )

  const onNavClick = useCallback(
    (id) => {
      const ref = refMapping[id]
      if (ref) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
      }
    },
    [refMapping],
  )

  return (
    <RootLayout onNavClick={onNavClick}>
      <Section id="app-home" title='Home' ref={homeRef} />
      <Section id="app-about-us" title="About Us" isOdd ref={aboutUsRef} />
      <Section id="app-contact" title="Contact" ref={contactRef} />
      <Section id="app-social" title="Social" isOdd ref={socialRef} />
      <Section id="app-feedback" title="Feedback" ref={feedbackRef} />
    </RootLayout>
  );
}

export default App;
