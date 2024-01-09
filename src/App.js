import "./App.css";
import { useState, useEffect } from "react";
import { Loader } from "./components/loader/loader";
import { MachinerysList } from "./components/machinerysList/machinerysList";
import { FormAddMachine } from "./components/formAddMachine/formAddMachine";
import { Statistic } from "./components/statistic/statistic";
import { getAllMachines, addMachines } from "./service/machineServiceAPI";
import MapComponent from "./components/mapComponent/mapComponent";

function App() {
  const [machinerysList, setMaghinerysList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [statistic, setStatistic] = useState({});
  const [visibleMachine, setVisibleMachine] = useState([]);
  const [checkedMarker, setCheckedMarker] = useState({});

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
      <main className="main">
        <section className="section-main">
          <div className="bike-service-div">
            <FormAddMachine newMachine={newMachine} />
            <Statistic statistic={statistic} />
          </div>
          <div style={{ width: "1500px" }}>
            <MapComponent
              data={machinerysList}
              setVisibleMachine={setVisibleMachine}
              setCheckedMarker={setCheckedMarker}
            />
          </div>

          <div className="bike-list-div">
            {isLoading && <Loader />}
            {error && <h2>{error}</h2>}
            {machinerysList.length && (
              <MachinerysList
                machinerys={machinerysList}
                visibleMacinerys={visibleMachine}
                checkedMarker={checkedMarker}
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
