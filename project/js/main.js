$(document).ready(function () {
  let currentFloor = 2;
  let modal = $(".modal");
  let counterUp = $(".counter-up");
  let floorPath = $(".home-image path");
  let counterDown = $(".counter-down");
  let closeButton = $(".modal-close-button");
  let buttonPrimary = $(".button-pimary");
  let windowWidth = $(window).width();

  //функци наведения на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-flor");
    $(".counter").text(currentFloor);
  });

  //функция раскрытия модального окна при нажатии на этиж
  floorPath.on("click", function () {
    modal.toggleClass("is-open");
    $(".modal-counter").text(currentFloor);
  });

  //функция закрытия модального окна при нажатии на крестик
  closeButton.on("click", function () {
    modal.removeClass("is-open");
  });

  //функция открытия модального окна при нажатии на кнопку выбора этажа
  buttonPrimary.on("click", function () {
    modal.toggleClass("is-open");
    $(".modal-counter").text(currentFloor);
  });

  //функци клика на кнопку вверх
  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-flor = ${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  //функци клика на кнопку вниз
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-flor = ${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  /*Dropdown Menu*/
  $(".dropdown").click(function () {
    $(this).attr("tabindex", 1).focus();
    $(this).toggleClass("active");
    $(this).find(".dropdown-menu").slideToggle(300);
  });
  $(".dropdown").focusout(function () {
    $(this).removeClass("active");
    $(this).find(".dropdown-menu").slideUp(300);
  });
  $(".dropdown .dropdown-menu li").click(function () {
    $(this).parents(".dropdown").find("span").text($(this).text());
    $(this)
      .parents(".dropdown")
      .find("input")
      .attr("value", $(this).attr("id"));
  });
  /*End Dropdown Menu*/

  $(".dropdown-menu li").click(function () {
    var input =
        "<strong>" +
        $(this).parents(".dropdown").find("input").val() +
        "</strong>",
      msg = '<span class="msg">Hidden input value: ';
    $(".msg").html(msg + input + "</span>");
  });
});
