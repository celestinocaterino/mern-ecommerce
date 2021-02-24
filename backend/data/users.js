import bcrypt from 'bcrypt';
const users=[
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('password',10),
        isAdmin: true
    },
    {
        name: 'john Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('password',10),

    },
    {
        name: 'jane doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('password',10),

    },
   
]
export default users
