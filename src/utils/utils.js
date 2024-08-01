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
