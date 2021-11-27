import React from 'react';
import { Day } from './Days';

import s from './Days.module.scss';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

interface CardProps {
  dayData: Day
}

const Card = ({ dayData }: CardProps) => {
  const { day, day_info, icon_id, info, temp_day, temp_night } = dayData;

  return (
    <div className={s.card}>
      <div className={s.day}>{day}</div>
      <div className={s.day_info}>{day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={s.temp_day}>{temp_day}</div>
      <div className={s.temp_night}>{temp_night}</div>
      <div className={s.info}>{info}</div>

    </div>
  )
}

export default Card
