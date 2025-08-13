// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];
window.onload = function (){
    mostrarPost();

    document.querySelector("#postForm").addEventListener('submit',addPost)
}

function addPost(infosdoEvento){
    infosdoEvento.preventDefault()
    const textoPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imgPost = document.querySelector("#postImage")

    const novoPost = {
        text: textoPost,
        category: categoriaPost,
        image: imgPost,
        date: new Date().toLocaleDateString()
    }
    posts.unshift(novoPost);

    mostrarPost()
}

function mostrarPost(){
    //pega elemento que tera a lista de posts no HTML
    const listaPosts = document.querySelector("#postList")
    listaPosts.innerHTML = ""
    posts.forEach(pegaItem => {
        const cardPost = document.createElement("div")

        cardPost.innerHTML = `
        <h2>${pegaItem.text}</h2>
        ${pegaItem.image? `<img src=${pegaItem.image}/>`:""}
        <p>${pegaItem.category}</p>
        <p>${pegaItem.date}</p>
        <button>Editar</button>
        <button>Apagar</button>
        `

    listaPosts.append(cardPost)
    })
}