"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FormTareas = ({ opcion, id = 0, initTask }) => {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { task: initTask.task, descripcion: initTask.descripcion },
  });

  const onSubmit = handleSubmit(async (values) => {
    const res = opcion
      ? await axios.post("/api/tasks", values)
      : await axios.put(`/api/tasks/${id}`, values);

    reset();

    // **
    router.push("/");
    router.refresh();
  });

  // Eliminar registro
  const eliminar = async (id) => {
    const res = await axios.delete(`/api/tasks/${id}`);
    reset();


    // **
    router.push("/");
    router.refresh();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-3">
          <input
            type="text"
            className="form-control form-control-lg "
            autoComplete="off"
            placeholder="Tarea"
            {...register("task", { required: true })}
          />
        </div>

        <div className="mt-3">
          <textarea
            rows={3}
            className="form-control form-control-lg "
            autoComplete="off"
            placeholder="Descripcion"
            {...register("descripcion", { required: true })}
          />
        </div>

        <div className="mt-3">
          <button className="btn btn-primary">Guardar</button>
        </div>
      </form>
      <div className="">
        {opcion || (
          <button
            className="btn btn-danger mt-3"
            onClick={() => eliminar(initTask.id)}
          >
            Eliminar
          </button>
        )}
      </div>
    </>
  );
};

export default FormTareas;
