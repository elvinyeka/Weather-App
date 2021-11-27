import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';

import s from './ThisDay.module.scss';

interface Props {
  weather: Weather;
}

const ThisDay = ({ weather }: Props) => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>{Math.round(weather.main.temp)}&#176;</div>
          <div className={s.this_day_name}>Bugün</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}> Vaxt: <span>21:54</span></div>
        <div className={s.this_city}> Şəhər: <span>{weather.name}</span></div>
      </div>
    </div>
  )
}

export default ThisDay
