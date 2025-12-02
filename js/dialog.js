"use strict";
export const dialog = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal-dialog");
const closeModalBtn = document.getElementById("close-modal-btn");

export const noModal = document.getElementById("noModal");
const noModalBtn = document.getElementById("noModalBtn");
const closeDialogBtn = document.getElementById("close-dialog-btn");

openButton.addEventListener("click", () => {
  dialog.showModal();
});
closeModalBtn.addEventListener("click", () => {
  dialog.close();
});

noModalBtn.addEventListener("click", () => {
  noModal.show();
});
closeDialogBtn.addEventListener("click", () => {
  noModal.close();
});
