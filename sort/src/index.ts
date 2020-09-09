import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([6,0,74,2,3,-23,1])
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharacterCollection('AiasdfCxvAjc');
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(30);
linkedList.add(21);
linkedList.add(0);
linkedList.add(11);
linkedList.add(-123);
linkedList.add(-1000);
linkedList.sort();
linkedList.print();
