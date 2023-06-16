document.querySelector(".menu-toggle").addEventListener("click", function() { document.querySelector(".menu").classList.toggle("open");
});

var traducoes = {
    'pt': {
    'rodape': 'Copyright &copy 2023 - Daniel Aldano - Todos os direitos reservados',

    'titulo-sobre': 'Sobre',

    'menu-sobre': 'Sobre',

    'menu-contato': 'Contato',

    'descricao-sobre': 
    'Nascido em 1989 em Petrolina, Pernambuco, Daniel Aldano é arquiteto (UNIPE), artista digital, empreendedor e designer gráfico,  especializado em apresentações digitais desde 2015, com foco em arquitetura e design “ArchViz” (Modelagem Tridimensional - 3D, Renderização, Desenvolvimento de apresentações e animações 3D) voltados para o mercado imobiliário, arquitetos, construtoras e incorporadoras, fornecendo imagens, videos, pinturas digitais e artes conceituais.Sempre foi apaixonado por música, tecnologia e formas geométricas e um forte adepto aos estudos da geométrica sagrada e símbolos místicos/étnicos. Em sua trajetória já residiu em São Paulo, Ceará e Paraíba. Atualmente reside em João Pessoa - PB.De forma intuitiva, suas obras e estudos englobam os estilos: futurista, minimalista, surrealismo, conceitual.',

    'descricao-mandala': 
    'A arte da mandala é uma prática antiga que envolve a criação de desenhos simétricos e intrincados. Originada de tradições espirituais, como o budismo e o hinduísmo, as mandalas são consideradas representações simbólicas do universo, com significado espiritual e terapêutico.A prática de desenhar/colorir e admirar as mandalas é conhecida por promover a concentração, a calma e a harmonia interior. Faço uso desta ferramenta como uma forma de expressão pessoal, incorporando a música como inspiração, para explorar o subconsciente e proporcionar sentimentos como além sentidos e visões como jamais vistas.A arte da mandala nos convida a entrar em um estado de contemplação e apreciação da harmonia e da interconectividade do mundo ao nosso redor.'
    },

    'en': {
    'rodape': 'Copyright &copy 2023 - Daniel Aldano - All rights reserved',

    'titulo-sobre': 'About',

    'menu-sobre': 'About',

    'menu-contato': 'Contact',

    'descricao-sobre': 
    'Born in 1989 in Petrolina, Pernambuco, Daniel Aldano is an architect (UNIPE), digital artist, entrepreneur, and graphic designer specializing in digital presentations since 2015, with a focus on architecture and design "ArchViz" (3D modeling, rendering, development of presentations, and 3D animations) for the real estate market, architects, construction companies, and developers, providing images, videos, digital paintings, and conceptual arts.He has always been passionate about music, technology, and geometric shapes, with a strong interest in the study of sacred geometry and mystical/ethnic symbols. Throughout his journey, he has lived in São Paulo, Ceará, and Paraíba. He currently resides in João Pessoa - PB.Intuitively, his works and studies encompass the styles of futurism, minimalism, surrealism, and conceptual art.',

    'descricao-mandala': 
    'The art of the mandala is an ancient practice that involves creating symmetrical and intricate designs. Originating from spiritual traditions such as Buddhism and Hinduism, mandalas are considered symbolic representations of the universe, with spiritual and therapeutic significance.The practice of drawing/coloring and admiring mandalas is known to promote concentration, calmness, and inner harmony. I use this tool as a form of personal expression, incorporating music as inspiration, to explore the subconscious and evoke feelings beyond senses and visions never seen before.The art of the mandala invites us to enter a state of contemplation and appreciation for the harmony and interconnectedness of the world around us.'
    }
    
};

function traduzirElementos(idioma) {
var elementos = document.querySelectorAll('[data-traducao]');

elementos.forEach(function(elemento) {
    var chaveTraducao = elemento.getAttribute('data-traducao');
    elemento.textContent = traducoes[idioma][chaveTraducao];
});
}

function mudarIdioma(form) {
var idiomaSelecionado = form.idioma.value;
var html = document.getElementById('html');

html.setAttribute('lang', idiomaSelecionado);
traduzirElementos(idiomaSelecionado);

// Armazenar preferência de idioma em um cookie com validade de 30 dias
document.cookie = `idioma=${idiomaSelecionado}; expires=${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()}`;
}
  