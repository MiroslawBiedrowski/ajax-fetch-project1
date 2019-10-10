const getUsers = (e) => {
    e.preventDefault();

    const usersNumber = document.querySelector('[name = "users-number"]').value;
    const usersGender = document.querySelector('[name = "gender"]').value;
    const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === "both" ? "male,female" : usersGender}`;

    fetch(url) //obietnica - pending

        .then(response => {
            // console.log(response);
            if (response.status !== 200) {
                throw Error('To nie jest odpowiedź 200')
            } else {
                return response.json()
            }
        })
        .then(json => showUsers(json.results))
        .catch(err => console.log(err))
}

const showUsers = (users) => {
    const resuleArea = document.querySelector('.user-list');
    users.forEach(user => {
        // console.log(user);
        const item = document.createElement('div');
        item.className = 'user';
        item.innerHTML = `
        <div class="user__name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}}</div>
        <img class="user__image" src=${user.picture.medium}>
        `
        resuleArea.appendChild(item);
    })
}
document.querySelector('.generator').addEventListener('submit', getUsers)