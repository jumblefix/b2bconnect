import { addAll } from '@b2bconnect/common';

console.log('Welcome to web client');

const result = addAll(1, 2, 3, 4, 5);

const getLength = (str: string) => str.length;

console.log(result);

console.log(getLength('Hello'));
