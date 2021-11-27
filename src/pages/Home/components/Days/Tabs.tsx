import React from 'react';

import s from './Days.module.scss';

interface TabsProps {

}
export interface Tab {
  value: string
}

const Tabs = (props: TabsProps) => {
  const tabs = [
    { value: 'Həftəlik', },
    { value: '10 günlük', },
    { value: 'Aylıq', },

  ]

  return (
    <div className={s.tabs}>
      <div className={s.tabs_wrapper}>
        {
          tabs.map((tab: Tab) => (
            <div
              key={tab.value}
              className={s.tab}>{tab.value}</div>
          ))
        }
      </div>
      <div className={s.cancel}>Ləğv et</div>
    </div>
  )
}

export default Tabs
