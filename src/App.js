import "./App.css";
import { useState, useEffect } from "react";
import { Loader } from "./components/loader/loader";
// import { useFetchBikes } from "./hooks/useFetchBikes";
import { MachinerysList } from "./components/machinerysList/machinerysList";
import { FormAddMachine } from "./components/formAddMachine/formAddMachine";
import { Statistic } from "./components/statistic/statistic";
import { getAllMachines, addMachines } from "./service/machineServiceAPI";

function App() {
  // const { bikesList, isLoading, error, deleteBikes } = useFetchBikes();

  const [machinerysList, setMaghinerysList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [statistic, setStatistic] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const fetchedMaghinery = await getAllMachines(controller);
        setStatistic(fetchedMaghinery.statistic);
        setMaghinerysList(fetchedMaghinery.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    };
    fetchData();
  }, []);

  const newMachine = async (newBike) => {
    const controller = new AbortController();
    try {
      const addedNewMachinery = await addMachines(controller, newBike);
      if (addedNewMachinery) {
        setError(null);
        setIsLoading(true);
        const fetchedMaghinery = await getAllMachines(controller);
        setStatistic(fetchedMaghinery.statistic);
        setMaghinerysList(fetchedMaghinery.data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      controller.abort();
    }
  };

  return (
    <>
      <header className="App-header"> Machinerys booking service</header>
      <main>
        <section className="section-main">
          <div className="bike-list-div">
            {isLoading && <Loader />}
            {error && <h2>{error}</h2>}
            {machinerysList.length && (
              <MachinerysList machinerys={machinerysList} />
            )}
          </div>
          <div className="bike-service-div">
            <FormAddMachine newMachine={newMachine} />
            <Statistic statistic={statistic} />
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Machinerys Booking Service</p>
        <h3 className="author">
          Developer: <span className="author-name">Teslyuk Yuriy</span>
        </h3>
      </footer>
    </>
  );
}

export default App;
