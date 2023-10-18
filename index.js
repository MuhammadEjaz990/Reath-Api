const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const ImageData = require('./models/ImageData');


const app = express();
const PORT = 7779;
const ngrok = require('ngrok');
require('dotenv').config();
const bcrypt = require('bcryptjs');





// mongoose.connect('mongodb+srv://muhammadejaz:offermemorandum@offer-memorandum.67cbex1.mongodb.net/')
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB...', err));



app.use(express.json());
// Use the cors middleware
app.use(cors({
    origin: '*'  // Allow all origins
}));




const usersRoutes = require('./routes/users');



app.use('/users', usersRoutes);
// ... (Baaki ka code)





// server.js





// app.post('/changeAccountDetails', async (req, res) => {
//     const { userId, newPassword, userName, image_url } = req.body;


//     const user = await User.findById(userId);
//     if (!user) {
//         return res.status(400).send('User not found.');
//     }


//     user.userName = userName;
//     user.imagePath = image_url;

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(newPassword, salt);
//     user.password = hashedPassword;

//     await user.save();


//     user.password = undefined;

//     res.json({ message: 'Account details updated successfully.', user: user, success: true });
// });


app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend2!' });
});


















app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    ngrok.connect(PORT).then(url => {
        console.log(`ngrok tunnel established at ${url}`);
    }).catch(error => {
        console.error('Failed to establish ngrok tunnel', error);
    });
});
