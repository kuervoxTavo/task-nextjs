import { pool } from "@/db/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  // Obteniendo el parametr

  const { id } = params;
  try {
    const [res] = await pool.query(
      `SELECT t.id,t.task,t.descripcion, time(t.fecha) as 'hora', date_format(t.fecha, "%Y-%m-%d") as 'fecha' 
      FROM tareas t WHERE t.id = ?`,
      [id]
    );

     /* No existen registros */
    if (res.length == 0)
      return NextResponse.json({ error: "No Existen tarea" }, { status: 500 });

    return NextResponse.json(res[0]);
  } catch (error) {
    console.log(error);
  }
};

export const PUT = async (request, { params }) => {
  // Obteniendo el parametr

  const { id } = params;
  const { task, descripcion } = await request.json();

  try {
    const [res] = await pool.query(
      `update tareas t set t.task = ?, t.descripcion = ?, t.fecha = now() where t.id = ?;`,
      [task, descripcion, id]
    );


    /* No existen registros */
    if (res.affectedRows == 0)
      return NextResponse.json(
        { error: "Error al actualizar registro" },
        { status: 500 }
      );

    return NextResponse.json(res.affectedRows);
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (request, { params }) => {
  // Obteniendo el parametr

  const { id } = params;
  try {
    const [res] = await pool.query(`DELETE FROM tareas t WHERE t.id = ?`, [id]);



    /* No existen registros */
    if (res.affectedRows == 0)
      return NextResponse.json({ error: "Error al eliminar" }, { status: 500 });

    return NextResponse.json(res.affectedRows);
  } catch (error) {
    console.log(error);
  }
};
