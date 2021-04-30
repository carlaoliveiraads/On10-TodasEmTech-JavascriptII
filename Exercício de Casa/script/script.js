let books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        published: "2014-02-01T00:00:00.000Z",
    },
    {
        isbn: "9781491950296",
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        published: "2014-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
    },
    {
        isbn: "9781491904244",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        published: "2015-12-27T00:00:00.000Z",
    },
    {
        isbn: "9781449325862",
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        published: "2013-08-02T00:00:00.000Z",
    },
    {
        isbn: "9781449337711",
        title: "Designing Evolvable Web APIs with ASP.NET",
        author: "Glenn Block, et al.",
        published: "2014-04-07T00:00:00.000Z",
    }
]

function addLivros() {

    books.map((book) => {
        const parseData = new Date(book.published);
        const data = parseData.setDate(parseData.getDate() + 1);
        const dataFormatada = parseData.toLocaleDateString('pt-br');
    
        document.getElementById('texto').innerHTML +=
            `
        <tr >
        <td> ${book.title} </td>
        <td> ${book.author}</td>
        <td> ${dataFormatada}</td>
        <td> ${book.isbn}</td>
        <td class="btn"><a href="#" class="delete">Remover</a></td> 
        </tr>
        `
    })
    }
    
    addLivros();
    
    
    
    function exibirDados(event) {
    event.preventDefault();
    
    let pegaTitulo = document.getElementById('title').value;
    let pegaAuthor = document.getElementById('author').value;
    let pegaDate = document.getElementById('date-p').value;
    let pegaIsbn = document.getElementById('isbn').value;
    

    if (pegaAuthor ===""){
        alert("Digite o nome do Autor.")
    }else if (pegaTitulo ===""){
        alert ("Digite o título do livro.")
    }else if (pegaIsbn === ""){
        alert ("Digite o ISBN.")
    }else if (pegaDate ===""){
        alert("Digite a data de Publicação")
    } else{
            books.push({
                author: pegaAuthor,
                title: pegaTitulo,
                isbn: pegaIsbn,
                published: pegaDate
            });

     
            limparDados ();
            addLivros();
    }
    

}

function limparDados (){
    document.getElementById('author').value = "";
    document.getElementById('title').value = "";
    document.getElementById('isbn').value = "";
    document.getElementById('date-p').value = "";
 
}

document.getElementById('texto').addEventListener('click', function removerLinha(event) {
    if (event.target.className === "delete") {
        let botao = event.target.parentElement;
        botao.parentElement.remove();
    }
})

