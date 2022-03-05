export const user = {
    email: 'laume12@mailsac.com',
    password: '123456',
}

export const unregisteredUer = {
    email: 'laume10@mailsac.com',
    password: 'abcdefg',
}

// Incorect/invalid credentials
export const invalidFormatEmail = ['laume12@mail', ' laume12@mail', 'laume12@mail..com', 'lau@me12@mail..com', 'abc.lt','.email@example.com', 'a”b(c)d,e:f;gi[j\k]l@domain.com']
export const incorrectEmail = 'aume123@mailsac.com'
export const longEmail = 'a@asRr5wXlVOJYA9O0dPdrVfZFtW47Dsz39kHT35HFvp2FA3NYsk0LuWvcpAnhW4QNpTdj3H56wOKZxTvKlT9S0NpI151rXTITv5jepD4OXDqOBU5ovzATAacnGxvW4lhEC0B5AMNR1BI4vUc2SFjuw7N09bQdicjKpDN2We18ZDuOmaLPdU6dulNpXCKJZlRAJygOdm6q9tz8a8FuEoxCKXyyV8toSCqbOreDp2O3BDezhi2QW7SaYGTWI1.lt'
export const incorrectPassowrd = 'nothingiswrite'
export const shortPass = 'a2345'
export const longPass = Math.random().toString(16).repeat(10)