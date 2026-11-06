import test from 'node:test';
import assert from 'node:assert/strict';
import {filterCatalog,nextStatus} from '../assets/logic.js';
const items=[{id:1,name:'Учебный товар 1',category:'Книги',price:575},{id:2,name:'Учебный товар 2',category:'Курсы',price:660}];
test('Search combines with category and handles whitespace/case',()=>{assert.deepEqual(filterCatalog(items,'  УЧЕБНЫЙ  ','Курсы').map(x=>x.id),[2]);assert.equal(filterCatalog(items,'нет').length,0);});
test('Price sort does not mutate source',()=>{assert.deepEqual(filterCatalog(items,'','','desc').map(x=>x.id),[2,1]);assert.equal(items[0].id,1);});
test('Operation lifecycle terminates at ready',()=>{assert.equal(nextStatus('Новая'),'В работе');assert.equal(nextStatus('В работе'),'Готово');assert.equal(nextStatus('Готово'),'Готово');});
