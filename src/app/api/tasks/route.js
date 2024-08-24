import { pool } from "@/db/db";

const { NextResponse } = require("next/server");

export const GET = async () => {
  try {
    const [res] = await pool.query(
      `SELECT t.id,t.task,t.descripcion, time(t.fecha) as 'hora', date_format(t.fecha, "%Y-%m-%d") as 'fecha' FROM tareas t`
    );


    /* No existen registros */
    if (res.length == 0)
      return NextResponse.json(
        { error: "No Existen Productos" },
        { status: 500 }
      );

    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (request) => {
  const { task, descripcion } = await request.json();

  try {
    const [res] = await pool.query(`INSERT INTO tareas values(0,?,?, NOW());`, [
      task,
      descripcion,
    ]);



    /* No existen registros */
    if (res.affectedRows == 0)
      return NextResponse.json(
        { error: "Error al agregar registro" },
        { status: 500 }
      );

    return NextResponse.json(res.affectedRows);
  } catch (error) {
    console.log(error);
  }
};
