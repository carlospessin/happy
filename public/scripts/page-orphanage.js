const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// get values from html
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

// creat map
const map = L.map("mapid", options).setView([lat, lng], 14);

// create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker

L.marker([lat, lng], { icon }).addTo(map);

/* image galery */

function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar o container de image
  imageContainer.src = image.src;

  // adicionar a classe .active para este botão
  button.classList.add("active");
}

function deleteOrphanage() {
  // pegar o valor do id
  var query = location.search.slice(1);
  var partes = query.split("&");
  var data = {};
  partes.forEach(function (parte) {
    var chaveValor = parte.split("=");
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
  });

  bootbox.confirm({
    message: "Confirma a exclusão do registro?",
    callback: function (confirmacao) {
      if (confirmacao) {
        var dialog = bootbox.dialog({
          // title: 'A custom dialog with init',
          message: "<p> Excluindo registro...</p>",
        });

        dialog.init(function () {
          setTimeout(function () {
            dialog.find(".bootbox-body").html("Registro excluído com sucesso!");
          }, 2000);
        });

        setTimeout(function () {
          window.location.href = "/orphanages";
        }, 3000);
      } else bootbox.alert("Operação cancelada.");
    },
    buttons: {
      cancel: { label: "Cancelar", className: "btn-default" },
      confirm: { label: "EXCLUIR", className: "btn-danger" },
    },
  });

  // excluir
  console.log("cheguei aqui");
}
