async function fetchProdutos(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    console.log(response);
}

const requisicao = fetchProdutos("https://ranekapi.origamid.dev/wp-json/api/produto");

requisicao.then(response =>{
    console.log(response);
});