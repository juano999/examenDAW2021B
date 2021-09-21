import { useEffect, useState } from "react";
import { Button, Grid, ListItem, Box, Stack } from "@mui/material";
import { Paper } from "@mui/material";
import styles from '../styles/Home.module.css'



const FavoriteAdvice = ({ newAdvice }) => {
    const [adviceList, setAdviceList] = useState([])
    useEffect(() => {

        setAdviceList((prevState) => {
            return [...prevState, newAdvice]
        })
    }, [newAdvice])

    useEffect(() => {
        console.log("adviceList", adviceList)
    }, [adviceList])

    const handleDeleteAdvice = (id) => {
        console.log("advicelist", adviceList)
        console.log("id", id)
        deleteAnAdvice(id)
    }
    function deleteAnAdvice(idAdvice) {
        const filterList = adviceList.filter(function (newAdvice) {
            console.log("test", newAdvice.id !== idAdvice);
            return newAdvice.id !== idAdvice;
        });
        console.log("filterList", filterList)

        setAdviceList(filterList)
    }

    return (
        <Stack spacing={2}>
            {adviceList.map((advice) => (
                <Stack direction="row" key={advice.id}>
                    <Grid md={9} className={styles.advices}>

                        {advice.advice}


                    </Grid>
                    <Grid md={3}>

                        <Button variant="contained" onClick={() => handleDeleteAdvice(advice.id)}>
                            Quitar de la Lista
                        </Button>
                    </Grid>
                </Stack>
            ))}
        </Stack>
    );
}

export default FavoriteAdvice;