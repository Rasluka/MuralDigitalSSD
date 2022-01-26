var modal = document.getElementById("modal-1");
var btn = document.getElementById("ssd-icon-btn");

var btn_enterprise = document.getElementById("img-enterprise");
var modalEnterprise = document.getElementById("modal-enterprise");

var btn_game = document.getElementById("img-game");
var modalgame = document.getElementById("modal-game");

var btn_agile = document.getElementById("img-agile");
var modalagile = document.getElementById("modal-agile");

var btn_server = document.getElementById("img-server");
var modalserver = document.getElementById("modal-server");

var btn_ssd_regular= document.getElementById("img-ssd-regular");
var modalssd_regular = document.getElementById("modal-ssd-regular");

var btn_nvme = document.getElementById("img-ssd-nvme");
var modalnvme = document.getElementById("modal-nvme");




btn.onclick = function() {
  modal.style.display = "block";
}

btn_enterprise.onclick = function(){
  modalEnterprise.style.display = "block";
}

btn_game.onclick = function(){
  modalgame.style.display = "block";
}

btn_agile.onclick = function(){
  modalagile.style.display = "block";
}

btn_server.onclick = function(){
  modalserver.style.display = "block";
}

btn_ssd_regular.onclick = function(){
  modalssd_regular.style.display = "block";
}

btn_nvme.onclick = function() {
  modalnvme.style.display = "block";
}


window.onclick = function(event) {
  if (event.target == modal || event.target == modalEnterprise || event.target == modalgame || event.target == modalagile || event.target == modalserver || event.target == modalssd_regular || event.target == modalnvme) {
    modal.style.display = "none";
    modalEnterprise.style.display = "none";
    modalgame.style.display = "none";
    modalagile.style.display = "none";
    modalserver.style.display = "none";
    modalssd_regular.style.display = "none";
    modalnvme.style.display = "none";
  }
}

