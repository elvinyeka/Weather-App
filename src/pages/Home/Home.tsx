import React, { useEffect } from 'react';
import Days from './components/Days/Days';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';

import s from './Home.module.scss';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fethCurrentWeather';
import { selectCurrentWeatherData } from '../../store/selectors';


interface Props {

}

const Home = (props: Props) => {
  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(selectCurrentWeatherData)

  useEffect(() => {
    dispatch(fetchCurrentWeather('baku'))
  }, [])
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}

export default Home
