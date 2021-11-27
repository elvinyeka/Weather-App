import React from 'react';
import Card from './Card';

import s from './Days.module.scss';
import Tabs from './Tabs';

interface DaysProps {

}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

const Days = (props: DaysProps) => {
  const days: Day[] = [
    {
      day: 'Bugün',
      day_info: '26 noy',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Buludlu',
    },
    {
      day: 'Sabah',
      day_info: '27 noy',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'yüngül yağış və günəş',
    },
    {
      day: 'B.',
      day_info: '28 noy',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'kiçik yağış',
    },
    {
      day: 'B.E.',
      day_info: '28 авг',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Buludlu',
    },
    {
      day: 'Ç.A.',
      day_info: '28 авг',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Buludlu',
    },
    {
      day: 'Ç.',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Buludlu',
    },
    {
      day: 'C.A.',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Buludlu',
    },
  ]

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {
          days.map((day: Day) => (
            <Card key={day.day} dayData={day} />))
        }
      </div>
    </>
  )
}

export default Days
