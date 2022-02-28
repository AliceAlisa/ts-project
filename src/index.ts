import { renderSearchFormBlock, submitForm } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { myLocalStorage, getUserData, getFavoritesAmount, User } from './localStorage.js'

window.addEventListener('DOMContentLoaded', () => {

  const localStorageDataUser: User | undefined | string[] = getUserData(myLocalStorage.user)
  const localStorageDataFavAmount: number | undefined = getFavoritesAmount(myLocalStorage.favoritesAmount)

  const today = new Date();
  const checkIn = today.setDate(today.getDate() + 1)
  const checkOut = today.setDate(today.getDate() + 3)

  if (localStorageDataUser instanceof User) {
    renderUserBlock(localStorageDataUser.userName, localStorageDataUser.userUrl, localStorageDataFavAmount)
  }

  renderSearchFormBlock(checkIn, checkOut)
  submitForm()
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
