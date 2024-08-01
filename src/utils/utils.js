import Swal from "sweetalert2";

export const warningDialog = (message, callback = () => {}) => {
  Swal.fire({
    icon: "warning",
    title: "Warning",
    text: message,
    allowOutsideClick: false,
    confirmButtonColor: "#3aa6b9",
  }).then((result) => {
    if (result.isConfirmed) {
      callback(true);
    }
  });
};

export const showConfirmationDialog = (message, callback) => {
  Swal.fire({
    icon: "warning",
    title: "Warning",
    text: message,
    showCancelButton: true,
    allowOutsideClick: false,
    confirmButtonColor: "#3aa6b9",
    cancelButtonColor: "#d33",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      callback(true);
    }
  });
};

export const successDialog = (message, callback = () => {}) => {
  Swal.fire({
    icon: "success",
    title: "Thank You",
    text: message,
    allowOutsideClick: false,
    confirmButtonColor: "#3aa6b9",
  }).then((result) => {
    if (result.isConfirmed) {
      callback(true);
    }
  });
};

export const getCurrentTimePlusMinutes = (minutes) => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + minutes);
  return now;
};

export const isEmptyLocalStorage = () => {
  return JSON.parse(localStorage.getItem("surveyForm")) === null;
};
