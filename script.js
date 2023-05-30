function buscarDescricao() {
  var codigo = document.getElementById("codigo").value;
  var url = "https://raw.githubusercontent.com/Caicossauro/form2/main/ASD.json";

  axios.get(url)
    .then(function(response) {
      var dados = response.data;
      var descricaoEncontrada = "";

      for (var i = 0; i < dados.length; i++) {
        if (dados[i]["Código"] == codigo) {
          descricaoEncontrada = dados[i]["Descrição"];
          break;
        }
      }

      document.getElementById("descricao").textContent = "Descrição: " + descricaoEncontrada;
    })
    .catch(function(error) {
      console.log(error);
    });
}
