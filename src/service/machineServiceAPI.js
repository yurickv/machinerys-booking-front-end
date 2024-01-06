import axios from "axios";

axios.defaults.baseURL = "https://machinery-booking-back-end.onrender.com";

export const getAllMachines = async (controller) => {
  try {
    const { data } = await axios.get(`/`, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    console.error("Помилка при отриманні даних:", error);
  }
};

export const deleteMachines = async (controller, id) => {
  try {
    const { data } = await axios.delete(`/${id}`, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    console.error("Помилка при видаленні даних:", error);
  }
};

export const changeMachines = async (controller, _id, updateBike) => {
  try {
    const { data } = await axios.put(`/${_id}`, updateBike, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    console.error("Помилка при спробі зміні даних:", error);
  }
};
export const addMachines = async (controller, newBike) => {
  try {
    const { data } = await axios.post(`/`, newBike, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    console.error("Помилка при спробі додавання даних:", error);
  }
};
