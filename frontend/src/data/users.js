/*
  USERS TABLE
    USERID        -- UNIQUE PK
    NICKNAME      -- STRING
    NAME          -- STRING
    SURNAME       -- STRING
    EMAIL         -- UNIQUE
    ROLEID        -- FK
*/

export const users = [
  {
    userId: 'user_01',
    nickname: 'Kitsu',
    name: 'Ozan',
    surname: 'Celikkol',
    email: 'kitsunethedeveloper@gmail.com',
    birthDate: '14-05-1994',
    role: 'roleId_01',
  }, {
    userId: 'user_02',
    nickname: 'Omon',
    name: 'test',
    surname: 'testUser',
    email: 'celikkolozan@gmail.com',
    birthDate: '14-05-1999',
    role: 'roleId_02',
  }, {
    userId: 'user_03',
    nickname: 'Alsheer',
    name: 'test',
    surname: 'testUser',
    email: 'ozeebuzee@gmail.com',
    birthDate: '14-05-2005',
    role: 'roleId_02',
  }
];