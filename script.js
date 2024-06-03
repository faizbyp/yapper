$(document).ready(function () {
  // GET YAPS
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

  // ADD YAP
  $("#yapForm").on("submit", function (e) {
    e.preventDefault();
    let yapInput = $("#yapInput").val();

    $.ajax({
      url: "add_yap.php",
      method: "POST",
      data: { yap: yapInput },
      success: function (response) {
        $("#yapInput").val("");
        loadYaps();
      },
    });
  });
});
