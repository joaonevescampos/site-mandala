document.querySelector(".menu-toggle").addEventListener("click", function() { document.querySelector(".menu").classList.toggle("open");
});

var traducoes = {
    'pt': {
     'tecnica': 'Técnica: Pintura digital',
     'dimensoes': 'Dimensões recomendadas: 50 x 50cm',
     'formato': 'Formato: JPEG/ TIFF',
     'valor': 'Valor: R$50,00',

     'nome' : 'Nome* :',
     'email' : 'e-mail* :',
     'cor1' : 'Cor 1:',
     'cor2' : 'Cor 2:',
     'mensagem' : 'Mensagem:',
     'comprar' : 'Comprar',
     'selecione': 'Selecione',
     'personalizar': 'Personalizar',
     'titulo-formulario' : 'Crie sua própria mandala',


    'titulo-sobre': 'Sobre',
    'menu-sobre': 'Sobre',

    'menu-contato': 'Contato',

    'descricao-sobre': 
    'Nascido em 1989 em Petrolina, Pernambuco, Daniel Aldano é arquiteto (UNIPE), artista digital, empreendedor e designer gráfico,  especializado em apresentações digitais desde 2015, com foco em arquitetura e design “ArchViz” (Modelagem Tridimensional - 3D, Renderização, Desenvolvimento de apresentações e animações 3D) voltados para o mercado imobiliário, arquitetos, construtoras e incorporadoras, fornecendo imagens, videos, pinturas digitais e artes conceituais. Sempre foi apaixonado por música, tecnologia e formas geométricas e um forte adepto aos estudos da geométrica sagrada e símbolos místicos/étnicos. Em sua trajetória já residiu em São Paulo, Ceará e Paraíba. Atualmente reside em João Pessoa - PB. De forma intuitiva, suas obras e estudos englobam os estilos: futurista, minimalista, surrealismo, conceitual.',

    'descricao-mandala': 
    'A arte da mandala é uma prática antiga que envolve a criação de desenhos simétricos e intrincados. Originada de tradições espirituais, como o budismo e o hinduísmo, as mandalas são consideradas representações simbólicas do universo, com significado espiritual e terapêutico. A prática de desenhar/colorir e admirar as mandalas é conhecida por promover a concentração, a calma e a harmonia interior. Faço uso desta ferramenta como uma forma de expressão pessoal, incorporando a música como inspiração, para explorar o subconsciente e proporcionar sentimentos como além sentidos e visões como jamais vistas. A arte da mandala nos convida a entrar em um estado de contemplação e apreciação da harmonia e da interconectividade do mundo ao nosso redor.',

    'rodape': 'Copyright &copy 2023 - Daniel Aldano - Todos os direitos reservados',
    },

    'en': {
    

    'tecnica': 'Technique: Digital painting',
     'dimensoes': 'Recommended dimensions: 50 x 50cm',
     'formato': 'Format: JPEG/ TIFF',
     'valor': 'Price: R$50,00',

     'nome' : 'Name* :',
     'email' : 'e-mail* :',
     'cor1' : 'Color 1:',
     'cor2' : 'Color 2:',
     'mensagem' : 'Message:',
     'comprar' : 'Buy',
     'selecione': 'Select an option',
     'personalizar': 'Customize',
     'titulo-formulario' : 'Create your own mandala',
    

    'titulo-sobre': 'About',

    'menu-sobre': 'About',

    'menu-contato': 'Contact',

    'descricao-sobre': 
    'Born in 1989 in Petrolina, Pernambuco, Daniel Aldano is an architect (UNIPE), digital artist, entrepreneur, and graphic designer specializing in digital presentations since 2015, with a focus on architecture and design "ArchViz" (3D modeling, rendering, development of presentations, and 3D animations) for the real estate market, architects, construction companies, and developers, providing images, videos, digital paintings, and conceptual arts. He has always been passionate about music, technology, and geometric shapes, with a strong interest in the study of sacred geometry and mystical/ethnic symbols. Throughout his journey, he has lived in São Paulo, Ceará, and Paraíba. He currently resides in João Pessoa - PB. Intuitively, his works and studies encompass the styles of futurism, minimalism, surrealism, and conceptual art.',

    'descricao-mandala': 
    'The art of the mandala is an ancient practice that involves creating symmetrical and intricate designs. Originating from spiritual traditions such as Buddhism and Hinduism, mandalas are considered symbolic representations of the universe, with spiritual and therapeutic significance. The practice of drawing/coloring and admiring mandalas is known to promote concentration, calmness, and inner harmony. I use this tool as a form of personal expression, incorporating music as inspiration, to explore the subconscious and evoke feelings beyond senses and visions never seen before. The art of the mandala invites us to enter a state of contemplation and appreciation for the harmony and interconnectedness of the world around us.',

    'rodape': 'Copyright &copy 2023 - Daniel Aldano - All rights reserved',
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

//FORMULÁRIO COMPRAR MANDALA

// Captura o botão e o formulário sobreposto pelo ID
const botaoFormularioComprar = document.querySelectorAll(".button-comprar");
const formularioContainer = document.getElementById("containerFormularioComprar");
const botaoFecharFormularioComprar = document.getElementById("fecharFormularioComprar");
const formularioComprar = document.getElementById("formularioComprar");

// Adiciona um evento de clique ao botão para mostrar o formulário com animação
botaoFormularioComprar.forEach(function(botaoComprar) {
    botaoComprar.addEventListener("click", function() {
        formularioContainer.style.display = "block";
        setTimeout(function() {
          formularioContainer.style.opacity = "1";
        }, 10); // Aguarda 10 milissegundos para iniciar a transição de opacidade
      });

});


// Adiciona um evento de clique ao botão "X" para fechar o formulário com animação
botaoFecharFormularioComprar.addEventListener("click", function() {
  formularioContainer.style.opacity = "0";
  setTimeout(function() {
    formularioContainer.style.display = "none";
  }, 300); // Aguarda 300 milissegundos (tempo da transição) para ocultar o formulário
});

// Adiciona um evento de envio ao formulário para enviar mensagem no WhatsApp
formularioComprar.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  
  const selecaoMandala = document.querySelector('#selecao-mandala').value;
  const nomeComprar = document.getElementById("nome-comprar").value;
  const emailComprar = document.getElementById("email-comprar").value;

  
  // Adicione aqui o código para obter os valores dos outros campos do formulário, se houverem
  
  enviarMensagemNoWhatsAppComprar(nomeComprar, emailComprar, selecaoMandala);
});

function enviarMensagemNoWhatsAppComprar(nomeComprar, emailComprar, selecaoMandala) {
  // Substitua o número de telefone com o número para o qual você deseja enviar a mensagem no WhatsApp
  const numeroWhatsapp1 = "5583988448324";
  
  const mensagem1 = `*Nova Solicitação*

  *Opção:* ${selecaoMandala}
  *Nome:* ${nomeComprar}
  *E-mail:* ${emailComprar}`;
  
  // Use a API do WhatsApp ou um serviço de terceiros para enviar a mensagem
  // Neste exemplo, usamos a sintaxe "https://wa.me/numero?text=mensagem" para redirecionar para o WhatsApp
  window.location.href = `https://wa.me/${numeroWhatsapp1}?text=${encodeURIComponent(mensagem1)}`;
}

//FORMULÁRIO PERSONALIZAR

// Captura o botão e o formulário sobreposto pelo ID
const botaoMostrarFormulario = document.getElementById("personalizar");
const formularioSobreposto = document.getElementById("formularioSobreposto");
const botaoFecharFormulario = document.getElementById("fecharFormulario");
const formulario = document.getElementById("meuFormulario");

// Adiciona um evento de clique ao botão para mostrar o formulário com animação
botaoMostrarFormulario.addEventListener("click", function() {
  formularioSobreposto.style.display = "block";
  setTimeout(function() {
    formularioSobreposto.style.opacity = "1";
  }, 10); // Aguarda 10 milissegundos para iniciar a transição de opacidade
});

// Adiciona um evento de clique ao botão "X" para fechar o formulário com animação
botaoFecharFormulario.addEventListener("click", function() {
  formularioSobreposto.style.opacity = "0";
  setTimeout(function() {
    formularioSobreposto.style.display = "none";
  }, 300); // Aguarda 300 milissegundos (tempo da transição) para ocultar o formulário
});

// Adiciona um evento de envio ao formulário para enviar mensagem no WhatsApp
formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const cor1 = document.getElementById("cor1").value;
  const cor2 = document.getElementById("cor2").value;
  const descricaoMandala = document.getElementById("mensagem").value;
  // Adicione aqui o código para obter os valores dos outros campos do formulário, se houverem
  
  enviarMensagemNoWhatsApp(nome, email, cor1, cor2, descricaoMandala);
});

function enviarMensagemNoWhatsApp(nome, email, cor1, cor2, descricaoMandala) {
  // Substitua o número de telefone com o número para o qual você deseja enviar a mensagem no WhatsApp
  const numeroWhatsapp = "5583988448324";
  
  const mensagem = `*Nova Solicitação*
  
  *Nome:* ${nome}
  *E-mail:* ${email}
  *Cor 1:* ${cor1}
  *Cor 2:* ${cor2}
  *Mensagem:* ${descricaoMandala}`;
  
  // Use a API do WhatsApp ou um serviço de terceiros para enviar a mensagem
  // Neste exemplo, usamos a sintaxe "https://wa.me/numero?text=mensagem" para redirecionar para o WhatsApp
  window.location.href = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
}
