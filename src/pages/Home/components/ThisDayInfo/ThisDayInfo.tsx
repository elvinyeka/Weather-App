import React from 'react';
import cloud from '../../../../assets/images/cloud.png';

import s from './ThisDayInfo.module.scss';
import ThisDayItem from './ThisDayItem';

interface Props {

}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Temperatur',
      value: '20° - 17° kimi hiss olunur'
    },
    {
      icon_id: 'pressure',
      name: 'Təzyiq',
      value: '765 мм civə sütunu - normal'
    },
    {
      icon_id: 'precipitation',
      name: 'Yağıntı',
      value: 'Yağıntı yoxdur'
    },
    {
      icon_id: 'wind',
      name: 'Külək',
      value: '3 m/s cənub-qərb küləyi - yüngül'
    }
  ]

  return (
    <div className={s.this_day_info}>
      <div className={s.this_day_info_items}>
        {
          items.map((item: Item) => {
            return (
              <ThisDayItem key={item.icon_id} item={item} />
            )
          })
        }
      </div>
      <img className={s.cloud_img} src={cloud} alt="cloud" />
    </div>
  )
}

export default ThisDayInfo
