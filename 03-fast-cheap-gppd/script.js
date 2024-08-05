function handleCheckboxToggle(event) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const checkedCheckboxes = Array.from(checkboxes).filter(
    (checkbox) => checkbox.checked
  );

  if (checkedCheckboxes.length > 2) {
    const lastChecked = checkedCheckboxes[checkedCheckboxes.length - 1];
    checkedCheckboxes[0].checked = false;
  }
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckboxToggle);
});
