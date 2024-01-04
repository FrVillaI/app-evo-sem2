//FireBase
import { onValue, ref, remove, set, update } from "firebase/database";
import { db } from '../config/config';

//Create- set - guardar
export const guardarGastos = (id: string, monto: string, categoria: string, descripcion: string) => {
    set(ref(db, 'gastos/' + id), {
        monto: monto,
        categoria: categoria,
        descripcion: descripcion,
    });
};

//Update -uptadet -actualizar
export const updateGastos = (id: string, monto: string, categoria: string, descripcion: string) => {
    set(ref(db, 'gastos/' + id), {
        monto: monto,
        categoria: categoria,
        descripcion: descripcion,
    });
};

//Delete - Remove - Eliminar
export const deleteGastos = (id: string) => {
    remove(ref(db, 'gastos' + id))
}


