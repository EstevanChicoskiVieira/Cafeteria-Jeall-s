const header = document.querySelector('header');

function scrollOnHeader(){
    header.classList.toggle('ativo', scrollY > 0);
}

window.addEventListener('scroll', scrollOnHeader)

//Sistema de cardápio

const cardapio = document.getElementById('cardapio2')
const lista = document.getElementById('itens')

document.getElementById('cafes').addEventListener('click', () => {
    cardapio.style.background = '#b89073'

    lista.innerHTML = `
        <span>
            <p>Café preto</p>
            <p>----------</p>
            <p>R$13,50</p>
        </span>
        <span>
            <p>Café ao leite</p>
            <p>----------</p>
            <p>R$15,00</p>
        </span>
        <span>
            <p>Cappuccino</p>
            <p>----------</p>
            <p>R$20,00</p>
        </span>
        <span>
            <p>Café Espresso</p>
            <p>----------</p>
            <p>R$10,00</p>
        </span>
        <span>
            <p>Café Latte</p>
            <p>----------</p>
            <p>R$18,00</p>
        </span>
        <span>
            <p>Macchiato</p>
            <p>----------</p>
            <p>R$17,00</p>
        </span>
        <span>
            <p>Mocha</p>
            <p>----------</p>
            <p>R$18,00</p>
        </span>
        <span>
            <p>Frappuccino</p>
            <p>----------</p>
            <p>R$22,00</p>
        </span>
        <span>
            <p>Café Irish</p>
            <p>----------</p>
            <p>R$25,00</p>
        </span>
    `
})

document.getElementById('vinhos').addEventListener('click', () => {
    cardapio.style.background = '#b89073'

    lista.innerHTML = `
        <span>
            <p>Château Margaux</p>
            <p>----------</p>
            <p>R$700,00</p>
        </span>
        <span>
            <p>Opus One</p>
            <p>----------</p>
            <p>R$500,00</p>
        </span>
        <span>
            <p>Dom Pérignon</p>
            <p>----------</p>
            <p>R$350,00</p>
        </span>
        <span>
            <p>Sassicaia</p>
            <p>----------</p>
            <p>R$350,00</p>
        </span>
        <span>
            <p>Vega Sicilia</p>
            <p>----------</p>
            <p>R$500,00</p>
        </span>
        <span>
            <p>Penfolds Grange</p>
            <p>----------</p>
            <p>R$800,00</p>
        </span>
        <span>
            <p>Krug Grand Cuvée</p>
            <p>----------</p>
            <p>R$200,00</p>
        </span>
        <span>
            <p>Ornellaia</p>
            <p>----------</p>
            <p>R$250,00</p>
        </span>
        <span>
            <p>Caymus Vineyards Special Selection</p>
            <p>----------</p>
            <p>R$160,00</p>
        </span>
    `
})

document.getElementById('cervejas').addEventListener('click', () => {
    cardapio.style.background = '#b89073'

    lista.innerHTML = `
        <span>
            <p>Skol</p>
            <p>----------</p>
            <p>R$3,50</p>
        </span>
        <span>
            <p>Brahma</p>
            <p>----------</p>
            <p>R$4,50</p>
        </span>
        <span>
            <p>Antarctica Origina</p>
            <p>----------</p>
            <p>R$5,00</p>
        </span>
        <span>
            <p>Bohemia</p>
            <p>----------</p>
            <p>R$7,00</p>
        </span>
        <span>
            <p>Heineken</p>
            <p>----------</p>
            <p>R$8,00</p>
        </span>
        <span>
            <p>Eisenbahn</p>
            <p>----------</p>
            <p>R$10,00</p>
        </span>
        <span>
            <p>Colorado</p>
            <p>----------</p>
            <p>R$12,00</p>
        </span>
        <span>
            <p>Schornstein</p>
            <p>----------</p>
            <p>R$15,00</p>
        </span>
        <span>
            <p>Wäls</p>
            <p>----------</p>
            <p>R$18,00</p>
        </span>
    `
})

document.getElementById('bebidas').addEventListener('click', () => {
    cardapio.style.background = '#b89073'

    lista.innerHTML = `
        <span>
            <p>Licor de café</p>
            <p>----------</p>
            <p>R$12,50</p>
        </span>
        <span>
            <p>Chá de Camomila</p>
            <p>----------</p>
            <p>R$5,00</p>
        </span>
        <span>
            <p>Vinho Quente - Caneca</p>
            <p>----------</p>
            <p>R$10,00</p>
        </span>
        <span>
            <p>Quentão</p>
            <p>----------</p>
            <p>R$8,00</p>
        </span>
        <span>
            <p>Chá de Erva-Cidreira</p>
            <p>----------</p>
            <p>R$5,00</p>
        </span>
        <span>
            <p>Chá de Hibisco com Gengibre</p>
            <p>----------</p>
            <p>R$6,00</p>
        </span>
        <span>
            <p>Licor de Canela</p>
            <p>----------</p>
            <p>R$12,00</p>
        </span>
        <span>
            <p>Cidra Quente</p>
            <p>----------</p>
            <p>R$8,00</p>
        </span>
        <span>
            <p>Canela Cream</p>
            <p>----------</p>
            <p>R$10,00</p>
        </span>
    `
})

document.getElementById('paes').addEventListener('click', () => {
    cardapio.style.background = '#b89073'

    lista.innerHTML = `
        <span>
            <p>Pão Francês</p>
            <p>----------</p>
            <p>R$1,00</p>
        </span>
        <span>
            <p>Pão Integral</p>
            <p>----------</p>
            <p>R$2,00</p>
        </span>
        <span>
            <p>Pão de Forma</p>
            <p>----------</p>
            <p>R$5,00</p>
        </span>
        <span>
            <p>Broa de Milho </p>
            <p>----------</p>
            <p>R$4,50</p>
        </span>
        <span>
            <p>Pão Australiano</p>
            <p>----------</p>
            <p>R$7,00</p>
        </span>
        <span>
            <p>Baguete</p>
            <p>----------</p>
            <p>R$6,00</p>
        </span>
        <span>
            <p>Pão de Queijo</p>
            <p>----------</p>
            <p>R$3,50</p>
        </span>
        <span>
            <p>Ciabatta</p>
            <p>----------</p>
            <p>R$6,00</p>
        </span>
        <span>
            <p>Pão de Mandioca</p>
            <p>----------</p>
            <p>R$5,00</p>
        </span>
    `
})

document.getElementById('bolos').addEventListener('click', () => {
    cardapio.style.background = '#b89073'

    lista.innerHTML = `
        <span>
            <p>Bolo de Chocolate</p>
            <p>----------</p>
            <p>R$5,00</p>
        </span>
        <span>
            <p>Bolo de Cenoura</p>
            <p>----------</p>
            <p>R$4,00</p>
        </span>
        <span>
            <p>Bolo de Limão</p>
            <p>----------</p>
            <p>R$6,00</p>
        </span>
        <span>
            <p>Bolo Red Velvet/p>
            <p>----------</p>
            <p>R$7,00</p>
        </span>
        <span>
            <p>Bolo de Coco</p>
            <p>----------</p>
            <p>R$5,00</p>
        </span>
        <span>
            <p>Bolo de Morango</p>
            <p>----------</p>
            <p>R$7,00</p>
        </span>
        <span>
            <p>Bolo de Fubá</p>
            <p>----------</p>
            <p>R$4,00</p>
        </span>
        <span>
            <p>Bolo Prestígio</p>
            <p>----------</p>
            <p>R$8,00</p>
        </span>
        <span>
            <p>Bolo de Nozes</p>
            <p>----------</p>
            <p>R$10,00</p>
        </span>
    `
})

document.getElementById('salgados').addEventListener('click', () => {
    cardapio.style.background = '#b89073'

    lista.innerHTML = `
        <span>
            <p>Coxinha</p>
            <p>----------</p>
            <p>R$4,50</p>
        </span>
        <span>
            <p>Pastes de Carne</p>
            <p>----------</p>
            <p>R$5,00</p>
        </span>
        <span>
            <p>Bolinha de Queijo</p>
            <p>----------</p>
            <p>R$2,50</p>
        </span>
        <span>
            <p>Esfirra de Carne</p>
            <p>----------</p>
            <p>R$4,50</p>
        </span>
        <span>
            <p>Quibe</p>
            <p>----------</p>
            <p>R$4,00</p>
        </span>
        <span>
            <p>Enroladinho de salsicha</p>
            <p>----------</p>
            <p>R$2,50</p>
        </span>
        <span>
            <p>Empada de frengo</p>
            <p>----------</p>
            <p>R$4,00</p>
        </span>
        <span>
            <p>Pastel de Queijo com Presunto</p>
            <p>----------</p>
            <p>R$6,00</p>
        </span>
        <span>
            <p>Risole de camarão</p>
            <p>----------</p>
            <p>R$12,00</p>
        </span>
    `
})

document.getElementById('saladas').addEventListener('click', () => {
    cardapio.style.background = '#b89073'

    lista.innerHTML = `
        <span>
            <p>Salada Caesar</p>
            <p>----------</p>
            <p>R$15,00</p>
        </span>
        <span>
            <p>Salada Caprese</p>
            <p>----------</p>
            <p>R$12,00</p>
        </span>
        <span>
            <p>Salada Grega</p>
            <p>----------</p>
            <p>R$14,00</p>
        </span>
        <span>
            <p>Salada de Tomates</p>
            <p>----------</p>
            <p>R$10,00</p>
        </span>
        <span>
            <p>Salada Waldorf</p>
            <p>----------</p>
            <p>R$16,00</p>
        </span>
        <span>
            <p>Salada de Quinoa</p>
            <p>----------</p>
            <p>R$20,00</p>
        </span>
        <span>
            <p>Salada Verde com Nozes</p>
            <p>----------</p>
            <p>R$18,00</p>
        </span>
        <span>
            <p>Salada de Frango Grelhado</p>
            <p>----------</p>
            <p>R$22,00</p>
        </span>
        <span>
            <p>Salada de Atum com Legumes</p>
            <p>----------</p>
            <p>R$20,00</p>
        </span>
    `
})

document.getElementById('sobremesas').addEventListener('click', () => {
    cardapio.style.background = '#b89073'

    lista.innerHTML = `
        <span>
            <p>Brigadeiro Gourmet</p>
            <p>----------</p>
            <p>R$8,50</p>
        </span>
        <span>
            <p>Beijinho de Coco</p>
            <p>----------</p>
            <p>R$8,00</p>
        </span>
        <span>
            <p>Mousse de Maracuja</p>
            <p>----------</p>
            <p>R$12,00</p>
        </span>
        <span>
            <p>Pudim de Leite</p>
            <p>----------</p>
            <p>R$10,00</p>
        </span>
        <span>
            <p>Torta Holandesa</p>
            <p>----------</p>
            <p>R$15,00</p>
        </span>
        <span>
            <p>Pavê de Chocolate</p>
            <p>----------</p>
            <p>R$12,00</p>
        </span>
        <span>
            <p>Quindim</p>
            <p>----------</p>
            <p>R$10,00</p>
        </span>
        <span>
            <p>Creme de Papaya</p>
            <p>----------</p>
            <p>R12,00</p>
        </span>
        <span>
            <p>Sorvete Artesanal</p>
            <p>----------</p>
            <p>R$8,00</p>
        </span>
    `
})

document.getElementById('especiais').addEventListener('click', () => {
    cardapio.style.background = '#b89073'

    lista.innerHTML = `
        <span>
            <p>Croissant de Chocolate</p>
            <p>----------</p>
            <p>R$6,50</p>
        </span>
        <span>
            <p>Muffin de Bluebarry</p>
            <p>----------</p>
            <p>R$8,00</p>
        </span>
        <span>
            <p>Quinche de Queijo e Espinafre</p>
            <p>----------</p>
            <p>R$10,00</p>
        </span>
        <span>
            <p>Torta de Maçã</p>
            <p>----------</p>
            <p>R$8,00</p>
        </span>
        <span>
            <p>Sanduíche de Frango com Abacate</p>
            <p>----------</p>
            <p>R$15,00</p>
        </span>
        <span>
            <p>Salada de Quiona com Vegetais</p>
            <p>----------</p>
            <p>R$12,00</p>
        </span>
        <span>
            <p>Bruschetta de Tomate e Manjericão</p>
            <p>----------</p>
            <p>R$9,00</p>
        </span>
        <span>
            <p>Mocha de Amêndoas</p>
            <p>----------</p>
            <p>R$10,00</p>
        </span>
        <span>
            <p>Suco Detox de Abacaxi com Hortelã</p>
            <p>----------</p>
            <p>R$7,00</p>
        </span>
    `
})

//Evento de scroll 

const menuItems = document.querySelectorAll('.header-div2 nav a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 800;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time ** 4 + from;
    return -distance / 2 * ((time -= 2) * time ** 3 - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
};