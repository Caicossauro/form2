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

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtenha os dados do formulário
  var form = event.target;
  var formData = new FormData(form);

  // Adicione a descrição ao FormData
  var descricao = document.getElementById("descricao").textContent;
  formData.append("descricao", descricao);

  // Envie os dados do formulário
  axios.post("https://api.staticforms.xyz/submit", formData)
    .then(function(response) {
      // Processar a resposta ou redirecionar para uma página de agradecimento
      window.location.href = "https://caicossauro.github.io/form2/obrigado.html";
    })
    .catch(function(error) {
      console.log(error);
    });
});
