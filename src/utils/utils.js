import { formatMoney } from 'csssr-school-utils';

export default function formatPrice (number) {
  return formatMoney(number, 0, '.', ' ') + ' ₽';
}
