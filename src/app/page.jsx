import CardTask from "@/components/CardTask";
import axios from "axios";

const fetchDatos = async () => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/tasks`);

    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

const HomePage = async () => {
  const task = await fetchDatos();

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h2>Lista de tareas</h2>
        </div>
      </div>

      <div className="row mt-3 mb-5">
        {task?.map((t, index) => (
          <div className="col-4" key={index}>
            <CardTask task={t} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
