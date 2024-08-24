"use client"

import { useRouter } from "next/navigation";
import React from "react";

const CardTask = ({ task }) => {


  const router = useRouter();
  
  return (
    <div className="card mt-3" onClick={() => router.push(`/edit/${task.id}`)}>
      <div className="card-header">{task.task}</div>
      <div className="card-body">
        <div className="">{task.descripcion}</div>
      </div>
      <div className="card-footer text-body-secondary d-flex justify-content-between">
        <div className="">{task.fecha}</div>
        <div className="">{task.hora}</div>
      </div>
    </div>
  );
};

export default CardTask;
