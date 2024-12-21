document.getElementById("tiket").addEventListener("click", generateTicket);
document.getElementById("remove-image").addEventListener("click", removeImage);
document.getElementById("change-image").addEventListener("click", changeImage);

document.getElementById("file-input").addEventListener("change", uploadeImage);

function uploadeImage() {
  var reader = new FileReader();
  var input = document.getElementById("file-input");
  reader.onload = function (e) {
    const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    localStorage.setItem("wallpaper", base64String);
    console.log(base64String);
    document.getElementById("image-preview").style.display = "block";
    document.getElementById("image-preview-overlay").style.display = "none";
    document.getElementById("show-image-user").src = e.target.result;
  };

  reader.readAsDataURL(input.files[0]);
}
function removeImage() {
  document.getElementById("image-preview").style.display = "none";
  document.getElementById("image-preview-overlay").style.display = "block";
  document.getElementById("file-input").value = "";
  document.getElementById("show-image-user").src = "";
}
function generateTicket() {
  var d = document.getElementById("label-file-info");
  if (!document.getElementById("file-input").files[0]) {
    console.log("Please select an image");
    document.getElementById("label-file-info").style.color = "red";
    d.innerText = "please select image";
    return;
  } else if (document.getElementById("file-input").files[0].size > 512000) {
    d.innerText = "File is larger than 500KB , please under 500kB";
    return;
  }
  if (
    !document.getElementById("fullName").value ||
    !document.getElementById("userEmail").value ||
    !document.getElementById("github").value
  ) {
    return;
  } else {
    var date = new Date();
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("userEmail").value;
    var github = document.getElementById("github").value;
    var data = {
      name: name,
      email: email,
      github: github,
      date: date.toLocaleDateString(),
    };

    localStorage.setItem("data", JSON.stringify(data));
    window.location.href = "tiket.html";
  }
}
function changeImage() {
  document.getElementById("file-input").click(); // Opens the file input dialog
}
// scrollTop = window.pageYOffset || document.documentElement.scrollTop;

// // Get the current page scroll position in the horizontal direction

// scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

// // if any scroll is attempted,
// // set this to the previous value
// window.onscroll = function () {
//   window.scrollTo(scrollLeft, scrollTop);
// };
