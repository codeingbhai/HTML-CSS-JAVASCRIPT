const profilePic = document.getElementById("profile-pic");
const inputFile = document.getElementById("imageUpload"); // Use the new ID

inputFile.onchange = function(){
  profilePic.src= URL.createObjectURL(inputFile.files[0]);
}

