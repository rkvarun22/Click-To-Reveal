function changeText(value) {
  switch (value) {
    case 1:
      var div = document.getElementById("img_1");
      div.innerHTML =
        '<img src="/image/hover_img_1.png" class="img-hover" alt="process" /> <img src="/image/visited_line.png" class="line" />';
      break;
    case 2:
      var div = document.getElementById("img_2");
      div.innerHTML =
        '<img src="/image/hover_img_2.png" class="img-hover" alt="process" /> <img src="/image/visited_line.png" class="line" />';
      break;
    case 3:
      var div = document.getElementById("img_3");
      div.innerHTML =
        '<img src="/image/hover_img_3.png" class="img-hover" alt="process" /> <img src="/image/visited_line.png" class="line" />';
      break;
    case 4:
      var div = document.getElementById("img_4");
      div.innerHTML =
        '<img src="/image/hover_img_4.png" class="img-hover" alt="process" /> <img src="/image/visited_line.png" class="line" />';
      break;
    case 5:
      var div = document.getElementById("img_5");
      div.innerHTML =
        '<img src="/image/hover_img_5.png" class="img-hover" alt="process" />';
      break;
    default:
    // code block
  }
  var div = document.getElementById("heading");
  div.style.textAlign = "left";
  let text =
    "<h3>Spill</h3><p>Having excess demand does not necessarily mean that an airline has achieved the most profitable customer mix or fare.</p><p><a>Spill</a> occurs when the airline sells too many discount seats and the flight is sold out days or weeks prior to <br> departure, forcing the airline to turn away last-minute and high-value customers.</p>";
  div.innerHTML = text;
}
