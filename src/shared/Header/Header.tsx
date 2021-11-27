import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import { Theme } from '../../context/ThemeContext';
import { useTheme } from '../../hooks/useTheme';
import s from './Header.module.scss';

interface Props {

}

const Header = (props: Props) => {
  const theme = useTheme();
  const options = [
    { value: 'choose', label: 'Şəhər seçin' },
    { value: 'baku', label: 'Baku' },
    { value: 'ganja', label: 'Gəncə' },
    { value: 'balakan', label: 'Balakən' },
    { value: 'lankaran', label: 'Lənkəran' }
  ]

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71,147,255,0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000',

    }),
  }

  const changeTheme = () => {

    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id='header-logo' />
        </div>
        <div className={s.title}>Sunny Weather</div>
      </div>
      <div className={s.wrapper}>
        <div
          onClick={changeTheme}
          className={s.change_theme}>
          <GlobalSvgSelector id='change-theme' />
        </div>
        <Select defaultValue={options[0]} styles={colorStyles} options={options} />
      </div>
    </header>
  )
}

export default Header
