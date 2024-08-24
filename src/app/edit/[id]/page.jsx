import axios from "axios";


import FormTareas from "@/components/FormTareas";

const fetchDatos = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/tasks/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const EditPage = async ({ params }) => {

  const { id } = params;

  const info = await fetchDatos(id);

  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-6">
          <FormTareas opcion={false} id={id} initTask={info}/>
          
        </div>
      </div>
    </div>
  );
};

export default EditPage;
