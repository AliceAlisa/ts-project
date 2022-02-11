export class User {
    userName: string
    userUrl: string

    constructor(userName: string, userUrl: string) {
        this.userName = userName
        this.userUrl = userUrl
    }
}

const currentUser = new User('Wade Warren', './img/avatar.png')

export const myLocalStorage = {
    user: currentUser,
    favoritesAmount: 3,
}

export const getUserData = (value: unknown) => {

    if (value == null) {
        return [value + '']
    }
    if (value instanceof User) {
        return [value.userName, value.userUrl]
    }
}

export const getFavoritesAmount = (value: unknown) => {

    if (value == null) {
        return 0
    }
    if (typeof value == 'number') {
        return value
    }
}