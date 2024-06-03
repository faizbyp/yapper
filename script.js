$(document).ready(function () {
  function loadYaps() {
    $.ajax({
      url: "get_yap.php",
      method: "GET",
      success: function (response) {
        const yaps = JSON.parse(response);
        $("#yapList").empty();
        yaps.forEach(function (yap) {
          $("#yapList").append(`
            <li>${yap.yap}</li>
          `);
        });
      },
    });
  }
  loadYaps();
});
