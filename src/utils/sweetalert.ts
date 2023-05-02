import Swal from "sweetalert2";

export const smallAalert = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  background: "#ffffff",
  timer: 3000,
  timerProgressBar: true,
});

export const errorAlert = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: true,
  background: "#ffffff",
  timer: 3000,
  timerProgressBar: true,
});
