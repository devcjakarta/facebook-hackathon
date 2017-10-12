import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'
import isMobilePhone from 'validator/lib/isMobilePhone'
import isURL from 'validator/lib/isURL'

export function validateRegisterData (data) {
  let errors = {}
  if (isEmpty(data.name)) errors.name = "Nama lengkap harus diisi"
  if (isEmpty(data.email)) errors.email = "E-mail harus diisi"
  if (!isEmail(data.email)) errors.email = (errors.email && errors.email.length) ? `${errors.email} dan valid` : "E-mail harus valid"
  if (isEmpty(data.phone)) errors.phone = "No telepon harus diisi"
  if (!(isMobilePhone(data.phone, 'id-ID') && (data.phone.length > 9) && (data.phone.length < 14))) errors.phone = (errors.phone && errors.phone.length) ? `${errors.phone} dan valid` : "No telepon harus valid"
  if (isEmpty(data.title)) errors.title = "Judul hackathon harus diisi"
  if (isEmpty(data.url)) errors.url = "URL harus diisi"
  if (!isURL(data.url)) errors.url = (errors.url && errors.url.length) ? `${errors.url} dan valid` : "URL harus valid"
  return errors
}
