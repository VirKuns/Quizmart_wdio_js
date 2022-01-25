export const user = {
    email: "laume12@mailsac.com",
    password: "123456",
}

export const invalidCredentials = {
    invalidFormatEmail: ['laume12@mail', ' laume12@mail', 'laume12@mail..com', 'lau@me12@mail..com', 'abc.lt','.email@example.com', 'a”b(c)d,e:f;gi[j\k]l@domain.com'],
    incorrectEmail: "laume123@mailsac.com",
    incorrectPassowrd: "nothingiswrite",
    passwordTooShort: "a2345",
    passwordTooLong: Math.random().toString(16).repeat(10)
}