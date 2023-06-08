import React, { useCallback, useMemo } from 'react';
import './App.css';
import Section from './component/Section';
import RootLayout from './layout/RootLayout';
import { navBarItems } from './data/navBar';

function App() {
  const refMapping = useMemo(
    () => navBarItems.reduce(
      (acc, item) => {
        return {
          ...acc,
          [item.id]: React.createRef(),
        }
      },
      {},
    ),
    [],
  )

  const onNavClick = useCallback(
    (id) => {
      const ref = refMapping[id]
      if (ref) {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
      }
    },
    [refMapping],
  )

  return (
    <RootLayout onNavClick={onNavClick}>
      {navBarItems.map((item, index) => (
        <Section
          key={item.id}
          id={item.id}
          title={item.name}
          ref={refMapping[item.id]}
          isOdd={index % 2 !== 0}
        />
      ))}
    </RootLayout>
  );
}

export default App;
