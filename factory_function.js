// const user = {
//     userName: 'echo',
//     avatar: 'echo.pngs'
// }

// console.log(user.avatar)
// console.log(user['avatar'])

// const userName = 'echo';
// const avatar = 'echo.png';

// const user = {
//     userName,
//     avatar
// };

// console.log(user);

const userName = 'echo';
const avatar = 'echo.png';

const user = {
    userName,
    avatar,

    setUserName(userName) {
        this.userName = userName;
        return this;
    }
};

console.log(user.setUserName('Foo').userName);