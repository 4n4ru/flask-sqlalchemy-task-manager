document.addEventListener('DOMContentLoaded', function () {
  // sidenav initialization
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // datepicker initialization
  var datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: 'dd mmmm, yyyy',
    i18n: {
      done: 'Select'
    }
  });

  // dropdown
  var selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

  // colapsible
  var colapsible = document.querySelectorAll('.collapsible');
  M.Collapsible.init(colapsible);
});