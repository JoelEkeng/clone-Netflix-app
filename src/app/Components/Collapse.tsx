'use client';

import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Collapse, ConfigProvider } from 'antd';
import type { CollapseProps } from 'antd';
import type { CSSProperties, Children } from 'react';

const { Panel } = Collapse;

const getItems: (panelStyle: CSSProperties) => { size: string, key: string, label: string, children: JSX.Element, style: CSSProperties }[] = (panelStyle) => [
  {
    size: 'large',
    key: '1',
    label: 'What is Netflix?',
    children: (
      <p className='text-sm md:text-xl'>
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
        <br />
        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
      </p>
    ),
    style: panelStyle,
  },
  {
    size: 'large',
    key: '2',
    label: 'How much does Netflix cost?',
    children: (
      <p className='text-sm md:text-xl'>
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.
      </p>
    ),
    style: panelStyle,
  },
  {
    size: 'large',
    key: '3',
    label: 'Where can I watch?',
    children: (
      <p className='text-sm md:text-xl'>
        Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.
      </p>
    ),
    style: panelStyle,
  },
  {
    size: 'large',
    key: '4',
    label: 'How do I cancel?',
    children: (
      <p className='text-sm md:text-xl'>
        Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
      </p>
    ),
    style: panelStyle,
  },
  {
    size: 'large',
    key: '5',
    label: 'What can I watch on Netflix?',
    children: (
      <p className='text-sm md:text-xl'>
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
      </p>
    ),
    style: panelStyle,
  },
  {
    size: 'large',
    key: '6',
    label: 'Is Netflix good for kids?',
    children: (
      <p className='text-sm md:text-xl'>
        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
      </p>
    ),
    style: panelStyle,
  },
];

const App: React.FC = () => {
  const panelStyle: React.CSSProperties = {
    fontSize: 24,
    border: 'none',
    width: '70%',
    height: '100%',
    backgroundColor: '#27272a',
    display: 'block',
    margin: 'auto',
    marginBottom: 10,
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
              colorText: '#fffff',
              algorithm: true, // Enable algorithm
          },
        },
      }}
    >
    <Collapse
      accordion={true}
      bordered={false}
      expandIconPosition="end"
      destroyInactivePanel={true}
      expandIcon = {({ isActive }: { isActive?: boolean }) => (
        <PlusOutlined rotate={isActive ? 50 : 0} style={{ fontSize: '24px', color: 'white' }} />
      )}
      
    >
      {getItems(panelStyle).map((item) => (
        <Panel header={item.label} key={item.key} style={item.style}>
          {item.children}
        </Panel>
      ))}
    </Collapse>
    </ConfigProvider>
  );
};

export default App;
