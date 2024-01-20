import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs/promises';
import path from 'path';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createUser = async (req, res) => {
  const { username, password, firstName, lastName, email} = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const filePath = path.join(__dirname, 'users.json');

  try {
    const data = await fs.readFile(filePath, 'utf8');
    let users = JSON.parse(data);

    if (users.find(user => user.username === username)) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: users.length + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: hashedPassword,
    };

    users.push(newUser);

    await fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8');

    res.json('Hello, Your account is now created!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    
    const filePath = path.join(__dirname, 'users.json');
    
    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      const users = JSON.parse(fileContent);
      const user = users.find((user) => user.username === username);
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      try {
        if (await bcrypt.compare(password, user.password)) {
          res.status(200).json({ message: 'Login successful' });
        } else {
          res.status(401).json({ error: 'Invalid username or password' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } catch (readFileError) {
      res.status(500).json({ error: 'Error reading user file' });
    }
  };

const getAllUsers = async (req, res) => {
  const filePath = path.join(__dirname, 'users.json');
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const users = JSON.parse(fileContent);

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}  

const getUserById = async (req, res) => {
  const userId = parseInt(req.params.id)
  const filePath = path.join(__dirname, 'users.json')
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const users = JSON.parse(fileContent);

    const user = users.find((user) => user.id === userId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const upDateUser = async (req, res) => {
  const userId = parseInt(req.params.id);
  const { firstName, lastName, email, username } = req.body;
  const filePath = path.join(__dirname, 'users.json');
  
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    let users = JSON.parse(fileContent);
    const user = users.find((user) => user.id === userId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.username = username;

      await fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8');
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export { createUser, login, getAllUsers, getUserById, upDateUser};