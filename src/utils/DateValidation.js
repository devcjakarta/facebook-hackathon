import parse from 'date-fns/parse'
import isAfter from 'date-fns/is_after'

export default function isExceedDeadline (deadline = '2017-11-07T23:00:00') {
  return isAfter(new Date(), parse(deadline))
}