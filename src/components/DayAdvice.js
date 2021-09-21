import { useEffect, useState } from "react";
import api from "src/api";
import { Button } from "@mui/material";


function DayAdvice({ onChangeAdvice }) {
    const [newAdvice, setNewAdvice] = useState(null)
    useEffect(() => {
        console.log("advice", newAdvice)
        getAdvices()

    }, [])

    async function getAdvices() {
        const res = await api.get(`/advice`)
        const newAdvice = await res.data.slip
        console.log("newAdvice", res.data.slip)
        setNewAdvice(newAdvice)
        return newAdvice
    }
    const handleNewAdvice = () => {
        getAdvices();
    }
    if (!newAdvice) {
        return "...Cargando Datos"
    }
    return (
        <div>
            <label>
                {newAdvice.advice}

            </label>
            <div>
                <Button variant="contained" onClick={() => onChangeAdvice(newAdvice)}> Marcar como favorito</Button>
                <Button variant="contained" onClick={handleNewAdvice}> Siguiente Consejo</Button>
            </div>
        </div>
    );
}



export default DayAdvice;
