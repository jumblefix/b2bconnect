import { reverse } from '@b2bconnect/common';
import { toUpper } from 'lodash';

const reversed = reverse(toUpper('Hello'));

console.log(reversed);
