import React from 'react';

import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import s from './Popup.module.scss';

interface Props {
}

const Popup = ({ }: Props) => {
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
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day_temp}>20°</div>
          <div className={s.day_name}>Cümə</div>
          <div className={s.img}>
            <GlobalSvgSelector id="small_rain_sun" />
          </div>
          <div className={s.day_time}> Vaxt: <span>21:54</span></div>
          <div className={s.day_city}> Şəhər: <span>Bakı</span></div>
        </div>
        <div className={s.this_day_info_items}>
          {
            items.map((item: Item) => {
              return (
                <ThisDayItem key={item.icon_id} item={item} />
              )
            })
          }
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  )
}

export default Popup;
