import espaguete from "../assets/img/espaguete.jpg";
import lasanha from "../assets/img/lasanha.jpg";
import ravioli from "../assets/img/ravioli.jpg";
import capeletti from "../assets/img/capeletti.jpg";
import nhoque from "../assets/img/nhoque.jpg";
import bruschetta from "../assets/img/bruschetta.jpg";
import carpaccio from "../assets/img/carpaccio.jpg";
import paella from "../assets/img/paella.jpg";
import ebiSpicy from "../assets/img/ebi-spicy.jpg";
import aligot from "../assets/img/aligot.jpg";
import fileMignon from "../assets/img/file-mignon.jpg";
import picanha from "../assets/img/picanha.png";
import bifeAncho from "../assets/img/bife-ancho.jpg";
import tomahwankSteak from "../assets/img/tomahawk-steak.jpg";
import primeRib from "../assets/img/prime-rib.jpg";
import tiramisu from "../assets/img/tiramisu.jpg";
import cheesecake from "../assets/img/cheesecake.jpg";
import banoffee from "../assets/img/banoffee.png";
import milFolhas from "../assets/img/mil-folhas.jpg";
import pudim from "../assets/img/pudim.jpg";
import cerveja from "../assets/img/cerveja.jpg";
import refrigerante from "../assets/img/refrigerante.jpg";
import suco from "../assets/img/suco.jpg";
import whiskey from "../assets/img/whiskey.jpg";
import agua from "../assets/img/agua.jpg";
import saladaCeasar from "../assets/img/salada-ceasar.jpg";
import saladaCaprese from "../assets/img/salada-caprese.jpg";
import saladaWaldorf from "../assets/img/salada-waldorf.jpg";
import saladaGrega from "../assets/img/salada-grega.jpg";
import saladaNicoise from "../assets/img/salada-nicoise.jpg";

export const produtos = [
  {
    id: 1,
    nome: "Espaguete",
    categoria: "Massas",
    preco: 20.0,
    descricao:
      "Um delicioso espaguete que pode ser combinado com diversos molhos, como bolonhesa, carbonara, alho e oleo e pesto",
    imagem: espaguete,
  },
  {
    id: 2,
    nome: "Lasanha",
    categoria: "Massas",
    preco: 25.0,
    descricao:
      "Uma maravilhosa lasanha com recheios variados como carne moída, frango, presunto e queijo, legumos e molho branco ou vermelho",
    imagem: lasanha,
  },
  {
    id: 3,
    nome: "Ravioli",
    categoria: "Massas",
    preco: 24.25,
    descricao:
      "Uma massa recheada com diferentes ingredientes como queijo, carne, espinafre ou cogumelos",
    imagem: ravioli,
  },
  {
    id: 4,
    nome: "Capeletti",
    categoria: "Massas",
    preco: 25.5,
    descricao:
      "Uma massa simples servida com diversos tipos de molhos como bolonhesa, carbonara, alfredo, pesto ou manteiga e sálvia",
    imagem: capeletti,
  },
  {
    id: 5,
    nome: "Nhoque",
    categoria: "Massas",
    preco: 8.99,
    descricao:
      "Massa feita de farinha de trigo e ovos, servida com molhos simples ou elaborados como, manteiga e parmesão, frango ao creme ou camarão alho e oleo",
    imagem: nhoque,
  },
  {
    id: 6,
    nome: "Bruschetta",
    categoria: "Entradas",
    preco: 9.2,
    descricao:
      "Prato original da Itália, que leva fatias de pão italiano torrado, tomate picado, alho, manjericão e azeite",
    imagem: bruschetta,
  },
  {
    id: 7,
    nome: "Carpaccio",
    categoria: "Entradas",
    preco: 32.0,
    descricao:
      "Prato de origem francesa, que leva fatias finas de salmão cru, alcaparras, queijo parmesão ralado e molho mostarda",
    imagem: carpaccio,
  },
  {
    id: 8,
    nome: "Paella",
    categoria: "Entradas",
    preco: 65.0,
    descricao:
      "Um prato tipico do leste da Espanha, que leva arroz e frutos do mar como mariscos, polvo, camarões, mexilhões e lulas",
    imagem: paella,
  },
  {
    id: 9,
    nome: "Ebi Spicy",
    categoria: "Entradas",
    preco: 62.0,
    descricao:
      "Prato tipico do Japão, que leva camarões empanados em massa tempurá, maionese e molho picante",
    imagem: ebiSpicy,
  },
  {
    id: 10,
    nome: "Aligot",
    categoria: "Entradas",
    preco: 18.99,
    descricao:
      "Um irrestivel purê de batata francês com queijo gruyere e meia cura",
    imagem: aligot,
  },
  {
    id: 11,
    nome: "Filé Mignon",
    categoria: "Carnes",
    preco: 41.99,
    descricao:
      "Com pouca gordura e fibras, além de muito macia, essa carne vai bem com diversos tipos de molhos",
    imagem: fileMignon,
  },
  {
    id: 12,
    nome: "Picanha",
    categoria: "Carnes",
    preco: 35.99,
    descricao:
      "Uma execelente carne que tem uma capa de gordura e fibras generosas que acentuam o sabor e a maciez do corte",
    imagem: picanha,
  },
  {
    id: 13,
    nome: "Bife Ancho",
    categoria: "Carnes",
    preco: 39.99,
    descricao:
      "Uma carne que tem um ótimo nível de marmoreio e um sabor delicado, podendendo ser feita tanto na grelha ou na frigideira",
    imagem: bifeAncho,
  },
  {
    id: 14,
    nome: "Tomahawk Steak",
    categoria: "Carnes",
    preco: 159.99,
    descricao:
      "É uma carne que combina duas texturas e sabores diferentes em uma só peça, e pode ser feita na grelha ou no forno",
    imagem: tomahwankSteak,
  },
  {
    id: 15,
    nome: "Prime Rib",
    categoria: "Carnes",
    preco: 59.99,
    descricao:
      "Parte dianteira da costela bovina, muito suculenta e saborosa, que pode ser feita na grelha ou no forno",
    imagem: primeRib,
  },
  {
    id: 16,
    nome: "Tiramisu",
    categoria: "Sobremesas",
    preco: 15.99,
    descricao:
      "Sobremesa italiana que leva pão de ló, café, queijo mascarpone, ovos, açucar e cacau em pó",
    imagem: tiramisu,
  },
  {
    id: 17,
    nome: "Cheesecake",
    categoria: "Sobremesas",
    preco: 8.99,
    descricao:
      "Típica sobremesa dos Estados Unidos, que leva bolo, cream cheese e calda de frutas",
    imagem: cheesecake,
  },
  {
    id: 18,
    nome: "Banoffee",
    categoria: "Sobremesas",
    preco: 9.99,
    descricao:
      "Uma sobremesa inglesa, feita a base de biscoito triturado com manteiga, uma camada de doce de leite, banana fatiada e chantilly",
    imagem: banoffee,
  },
  {
    id: 19,
    nome: "Mil-folhas",
    categoria: "Sobremesas",
    preco: 9.99,
    descricao:
      "Sobremesa de origem francesa, feita com massa folhada crocante e recheio cremoso de baunilha, chocolate ou frutas e açucar de confeiteiro",
    imagem: milFolhas,
  },
  {
    id: 20,
    nome: "Pudim",
    categoria: "Sobremesas",
    preco: 5.99,
    descricao:
      "Sobremesa cremosa e gelada muito popular no Brasil, feita com leite condesado, leite e ovos",
    imagem: pudim,
  },
  {
    id: 21,
    nome: "Cerveja Artesanal",
    categoria: "Bebidas",
    preco: 12.99,
    descricao:
      "Cerveja artesanal de produção alemã que leva ingredientes nobres como malte, lúpulu, água e levedura ",
    imagem: cerveja,
  },
  {
    id: 22,
    nome: "Refrigerante",
    categoria: "Bebidas",
    preco: 7.99,
    descricao:
      "Um refrescante refrigerante de cola com pequenos pedaços de limão e raspas de hortelã",
    imagem: refrigerante,
  },
  {
    id: 23,
    nome: "Suco",
    categoria: "Bebidas",
    preco: 6.99,
    descricao:
      "Mais puro suco de laranjas holandesas frescas e levemente adocicada",
    imagem: suco,
  },
  {
    id: 24,
    nome: "Whiskey",
    categoria: "Bebidas",
    preco: 17.99,
    descricao:
      "Um poderoso whiskey sabor bourbon, envelhecido em barris de carvalho branco carbonizado",
    imagem: whiskey,
  },
  {
    id: 25,
    nome: "Água",
    categoria: "Bebidas",
    preco: 4.99,
    descricao: "Água mineral saborizada com limão siciliano",
    imagem: agua,
  },
  {
    id: 26,
    nome: "Salada Ceasar",
    categoria: "Saladas",
    preco: 19.8,
    descricao:
      "Salada preparada com alface-romana, torrada, queijo parmesão e molho Ceasar",
    imagem: saladaCeasar,
  },
  {
    id: 27,
    nome: "Salada Caprese",
    categoria: "Saladas",
    preco: 22.0,
    descricao:
      "Uma salada italiana, feita com mussarela fresca, tomate e manjericão, temperada com sal e azeite",
    imagem: saladaCaprese,
  },
  {
    id: 28,
    nome: "Salada Waldorf",
    categoria: "Saladas",
    preco: 40.0,
    descricao:
      "Criada em 1893 no Waldorf Hotel, essa salada leva uma fatia de maça e aipo, nozes cortadas, maionese",
    imagem: saladaWaldorf,
  },
  {
    id: 29,
    nome: "Salada Grega",
    categoria: "Saladas",
    preco: 13.99,
    descricao:
      "Versão original da salada que leva tomate, pepino, pimentão, cebola roxa, pimenta-do-reino, orégano, azeite e queijo feta",
    imagem: saladaGrega,
  },
  {
    id: 30,
    nome: "Salada Niçoise",
    categoria: "Saladas",
    preco: 22.99,
    descricao:
      "Salada tradicional da cidade de Nice, feita com tomate, ovos cozidos, azeitona niçoise, azeite e atum",
    imagem: saladaNicoise,
  },
];
