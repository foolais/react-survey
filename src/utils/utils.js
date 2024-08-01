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
