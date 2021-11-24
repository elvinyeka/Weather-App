import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

import s from './ThisDay.module.scss';

interface Props {

}

const ThisDay = (props: Props) => {


  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>20&#176;</div>
          <div className={s.this_day_name}>Bugün</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}> Vaxt: <span>21:54</span></div>
        <div className={s.this_city}> Şəhər: <span>Bakı</span></div>
      </div>
    </div>
  )
}

export default ThisDay
