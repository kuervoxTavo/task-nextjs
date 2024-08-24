import FormTareas from "@/components/FormTareas";

const NuevaTarea = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-6">
          <FormTareas opcion={true} initTask={{ task: "", descripcion: "" }} />
        </div>
      </div>
    </div>
  );
};

export default NuevaTarea;
