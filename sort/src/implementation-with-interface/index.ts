import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([6,0,74,2,3,1])
const sorter = new Sorter(numberCollection);
sorter.sort()
console.log(numberCollection.data);

const characterCollection = new CharacterCollection('iasdfxvc');
const characterSorter = new Sorter(characterCollection);
characterSorter.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(30);
linkedList.add(21);
linkedList.add(0);
linkedList.add(-123);
linkedList.add(-1000);
const linkListSorter = new Sorter(linkedList);
linkListSorter.sort();
linkedList.print();
