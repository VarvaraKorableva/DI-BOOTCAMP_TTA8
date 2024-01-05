const handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    await postAUser(name, username, email);
};

const postAUser = async (name, username, email) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ name, username, email }),
        };

        const res = await fetch('https://users-18kl.onrender.com/userjson', options);
        const newpost = await res.json();
        console.log(newpost);

    } catch (error) {
        console.error('Error:', error);
    }
};

document.getElementById('userForm').addEventListener('submit', handleSubmit);
