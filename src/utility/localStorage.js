import { toast } from "react-toastify";

const addToLocalStorage = (id, name) => {
  const existingAppointments =
    JSON.parse(localStorage.getItem("appointments")) || [];

  if (existingAppointments.includes(id)) {
    toast.error("Appointment already scheduled for today!", {
      autoClose: 1500,
    });
    return false;
  } else {
    existingAppointments.push(id);
    localStorage.setItem("appointments", JSON.stringify(existingAppointments));
    toast.success(`Appointment scheduled for ${name} successfully!`, {
      autoClose: 1500,
    });
    return true;
  }
};

const removeFromLocalStorage = (id) => {
  const existingAppointments =
    JSON.parse(localStorage.getItem("appointments")) || [];

  const convertedData = existingAppointments.map((id) => parseInt(id));

  const updatedAppointments = convertedData.filter(
    (appointment) => appointment !== id
  );

  localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

  toast.error("Appointment cancelled!", {
    autoClose: 1500,
  });
};

export { addToLocalStorage, removeFromLocalStorage };
