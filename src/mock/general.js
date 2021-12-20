import { v4 as uuid } from 'uuid';

export const user = {
  _id: '61c074d03d34cad9485d5f3d',
  index: 0,
  guid: 'a9eb5626-6d12-45b7-bce0-b60c19d80ae3',
  isActive: true,
  balance: '$2,009.89',
  picture: 'http://placehold.it/32x32',
  age: 21,
  name: 'Susanne Hopper',
  gender: 'female',
  company: 'BIOHAB',
  email: 'susannehopper@biohab.com',
  phone: '+1 (955) 412-2286',
  address: '198 Hoyt Street, Garnet, West Virginia, 1070',
  about: 'Dolor labore adipisicing minim consequat aliqua. Labore labore id in.',
  registered: '2021-03-26T05:11:20 -02:00',
};

export const getBooks = () => [{
  id: uuid(),
  title: 'The Great Gatsby',
  description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
}, {
  id: uuid(),
  title: 'The Call of Cthulhu',
  description: '"The Call of Cthulhu" is a short story by American writer H. P. Lovecraft. Written in the summer of 1926, it was first published in the pulp magazine Weird Tales in February 1928.',
}, {
  id: uuid(),
  title: 'The Stranger: The Labyrinths of Echo',
  description: 'The Stranger will appeal to a broad coalition of delighted readers. Strike a chord with readers of all stripes. Fantasy, horror, philosophy, and dark comedy are all ingredients in this amazing work in which a sharp wit and a bewildering web of clues opens up a Pandora\'s box of secrets.',
}, {
  id: uuid(),
  title: '1984',
  description: 'Nineteen Eighty-Four is a dystopian social science fiction novel and cautionary tale written by English writer George Orwell.',
}];
