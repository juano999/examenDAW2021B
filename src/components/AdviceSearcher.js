import { TextField, Button } from "@mui/material";
import api from "src/api";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { Stack, Grid } from "@mui/material";
import styles from '../styles/Home.module.css'

const schema = yup.object().shape({
    text: yup.string().required(),
});
const AdviceSearcher = ({ onChangeAdvice }) => {
    const {
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm({
        resolver: yupResolver(schema),
    });
    const [queryAdvices, setQueryAdvices] = useState([])
    async function getSlips(query) {
        const res = await api.get(`/advice/search/${query}`)
        const newAdvice = await res.data.slips
        console.log("newAdvice", newAdvice)
        setQueryAdvices(newAdvice)

    }
    const onFinish = (formData) => {
        console.log(formData)
        getSlips(formData.text)

    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onFinish)}>
                    <label className={styles.label_form}> Palabra clave</label>
                    <Controller
                        name="text"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                className={styles.input}
                                label="text"
                                variant="outlined"
                                type="text"
                            />
                        )}
                    />
                    <div>
                        <Button variant="contained" type="submit">
                            Buscar
                        </Button>
                    </div>
                </form>
            </div>
            <div> Resultados de la búsqueda</div>
            <Stack spacing={2}>
                {queryAdvices.map((advice) => (
                    <Stack direction="row" key={advice.id}>
                        <Grid md={9} className={styles.advices}>

                            <label>
                                {advice.advice}

                            </label>
                        </Grid>
                        <Grid md={3}>

                            <Button variant="contained" onClick={() => onChangeAdvice(advice)}>
                                Marcar como favorito
                            </Button>
                        </Grid>

                    </Stack >
                ))}
            </Stack>
            <div></div>
        </div>
    );
}

export default AdviceSearcher;