const express = require('express');
const app = express();
app.use(express.json());

let musicas = [
    {id: 1, musica: "Rockstar"},
    {id: 2, musica: "NAV"},
    {id: 3, musica: "Tipo Danzo" }
]

 app.get('/musicas', (req, res) => {
     res.json(musicas);
 })


//buscar por ID
function buscarSelecaoPorId (id) {
    return musicas.filter( musica => musica.id == id)
}
app.get('/musicas/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})

//listar nome da musica 

function buscarSelecaoPorNome (id) {
    const musica = musicas.find (musica => musica.id == id);
    return musica.musica;
}

app.get('/musicas/musica/:id', (req, res) => {
    res.json(buscarSelecaoPorNome(req.params.id))
})

//inserir uma musica na lista e retornar a lista
function adicionarMusicaNaLista (musica) {
    musicas.push(musica);
    return musicas;
}

app.post('/musicas', (req, res) => {
    res.json(adicionarMusicaNaLista(req.body))
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

/////////////////////////////

// 1
app.get('/hello', (req, res) => {
    res.json({ message: "Olá Mundo!" });
});

// 2
app.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.json({ message: `Olá, ${name}!` });
});

// 3
app.get('/sum', (req, res) => {
    const { a, b } = req.query;
    const sum = Number(a) + Number(b);
    res.json({ result: sum });
});

// 4
app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const difference = Number(a) - Number(b);
    res.json({ result: difference });
});

// 5
app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const product = Number(a) * Number(b);
    res.json({ result: product });
});

// 6
app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    if (Number(b) === 0) {
        res.status(400).json({ error: "Divisão por zero não é permitida" });
    } else {
        const quotient = Number(a) / Number(b);
        res.json({ result: quotient });
    }
});

// 7
app.get('/check-parity/:number', (req, res) => {
    const { number } = req.params;
    const parity = Number(number) % 2 === 0 ? "par" : "ímpar";
    res.json({ parity });
});

// 8
app.get('/full-name', (req, res) => {
    const { first_name, last_name } = req.query;
    res.json({ full_name: `${first_name} ${last_name}` });
});

// 9
app.get('/convert-temperature', (req, res) => {
    const { celsius } = req.query;
    const fahrenheit = (Number(celsius) * 9/5) + 32;
    res.json({ fahrenheit });
});

// 10
app.get('/calculate-age/:birth_year', (req, res) => {
    const { birth_year } = req.params;
    const currentYear = new Date().getFullYear();
    const age = currentYear - Number(birth_year);
    res.json({ age });
});