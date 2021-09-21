import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Grid, Container } from '@mui/material'
import DayAdvice from './../components/DayAdvice'
import api from "src/api";
import FavoriteAdvice from '@/components/FavoriteAdvice'
import { useState } from 'react'
import AdviceSearcher from '@/components/AdviceSearcher'

export default function Home() {
  const [advice, setAdvice] = useState(null)
  const handleChangeAdvice = (advice) => {
    setAdvice(advice);
  }
  return (

    <Grid container className={styles.global}>
      <Grid xs={12} md={6} className={styles.container}>
        <label className={styles.titles}>
          Consejos del día
        </label>
        <DayAdvice onChangeAdvice={handleChangeAdvice} />

      </Grid >
      <Grid xs={12} md={6} className={styles.container}>
        <label className={styles.titles}>Consejos Favoritos</label>
        {advice ? <FavoriteAdvice newAdvice={advice} /> : ''}

      </Grid>
      <Grid md={12} className={styles.container}>
        <Container maxWidth="sm" >
          <label className={styles.titles}>Buscador de Consejos</label>
          <AdviceSearcher onChangeAdvice={handleChangeAdvice} />
        </Container>
      </Grid>
    </Grid>


  )
}



