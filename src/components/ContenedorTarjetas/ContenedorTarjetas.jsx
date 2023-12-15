import "./contenedortarjeta.css"
import Tarjetas from '../Tarjetas'
import { useEffect, useState } from "react";
import axios from "axios";

const ContenedorTarjetas = () => {
    const [datos, setDatos] = useState([])
    const ts = 2;
    const key = "9653e217cbf2bd87f2af1f45fdab348b";
    const hash = "73cd6c2dfce4b559ae29e228dd7617b1";
    const categoria = "comics";
    const url = `http://gateway.marvel.com/v1/public/${categoria}?ts=${ts}&apikey=${key}&hash=${hash}`;

    useEffect(() => {
        const solicitud = async () => {
            try {
                const respuesta = await axios.get(url);
                setDatos(respuesta.data.data.results);
                console.log(datos);
            } catch (error) {
                console.log("hubo un error: ", error);
            }
        };
        solicitud();
    }, []);

    return (
        <>
            <main className='contenedor'>
                <Tarjetas
                    ruta="http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg"
                    titulo="card-title"
                    descripcion="soy una descripcion"
                />
                
               
                {/* {datos.map((item) => (
                    <Tarjetas
                    key={item.id}
                    ruta={`${item.thumbmail.path}/portrait_uncanny.${item.thumbmail.extension}`}
                    titulo={item.title}
                    />
                ))} */}
            </main>
        </>
    )
}

export default ContenedorTarjetas
