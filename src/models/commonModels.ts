

export interface IAuthToken {
    token: string
}

export interface IProfile {
    username: string,
    chat_room: string,
    is_guest: boolean,
    is_superuser: boolean
}