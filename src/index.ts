import { renderSearchFormBlock, submitForm } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { myLocalStorage, getUserData, getFavoritesAmount } from './localStorage.js'

window.addEventListener('DOMContentLoaded', () => {

  const localStorageDataUser: string[] = getUserData(myLocalStorage.user)
  const localStorageDataFavAmount: number = getFavoritesAmount(myLocalStorage.favoritesAmount)

  const today = new Date();
  const checkIn = today.setDate(today.getDate() + 1)
  const checkOut = today.setDate(today.getDate() + 3)

  renderUserBlock(localStorageDataUser[0], localStorageDataUser[1], localStorageDataFavAmount)
  renderSearchFormBlock(checkIn, checkOut)
  submitForm()
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
