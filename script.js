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
            <li>${yap.yap}
              <button class="delete btn btn-sm btn-outline-danger mb-2" data-id="${yap.id}">Hapus</button>
            </li>
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

  // DELETE YAP
  $("#yapList").on("click", ".delete", function () {
    let id = $(this).data("id");
    console.log("tes");

    $.ajax({
      url: "delete_yap.php",
      method: "POST",
      data: { id: id },
      success: function (response) {
        loadYaps();
      },
    });
  });
});
