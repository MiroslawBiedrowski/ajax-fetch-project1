const getUsers = (e) => {
    e.preventDefault();
    const url = 'https://randomuser.me/api/?results=10';

    fetch(url) //obietnica - pending

        .then(response => {
            // console.log(response);
            if (response.status !== 200) {
                throw Error('To nie jest odpowiedź 200')
            } else {
                return response.json()
            }
        })
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

document.querySelector('.generator').addEventListener('submit', getUsers)