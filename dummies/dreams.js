import { getRandomInArray } from '../utils/random.util';

export const dreamList =  [
  'Voar de balão',
  'Acampar',
  'Jogar num cassino',
  'Fazer um cruzeiro',
  'Ir em todos os parques temáticos possíveis',
  'Brincar na neve',
  'Esquiar na neve',
  'Fazer mergulho com cilindro e ver um naufrágio',
  'Viajar para o deserto do Saara + visitar uma pirâmide + montar um camelo',
  'Comer uma pizza italiana na Itália',
  'Ir a Grécia e Egito',
  'Escalar um vulcão',
  'Ver uma baleia (de um lugar bem seguro)',
  'Participar de um Flash Mob',
  'Presenciar a Aurora Boreal',
  'Nadar com Plânctons luminosos',
  'Nadar com animais marinhos grandes como baleia e tubarão (esse só o André quer fazer hahah)',
  'Pular de bungee jump',
  'Assistir um espetáculo na Broadway',
  'Voar na primeira classe',
  'Subir na Torre Eiffel, em Paris',
  'Fazer uma roadtrip',
  'Salvar o mundo',
  'Mudar o Brasil',
  'Pular de paraquedas',
  'Ser rei na minha cidade',
  'Ser youtuber',
  'Morar no mato',
  'Morar na cidade',
  'Ver o Lula presidente',
];

export const getRandomDream = () => {
  return getRandomInArray(dreamList);
}