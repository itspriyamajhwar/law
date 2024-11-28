const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000; // Use Vercel's dynamic port or fallback to 5000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas URI
const dbPassword = encodeURIComponent('Legal2000'); // Replace with your password
const dbURI = `mongodb+srv://deenisgroup2000:${dbPassword}@cluster0.vm9zo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// MongoClient instance
const client = new MongoClient(dbURI, {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
});

// Connect to the database once and reuse the connection
let db;
client.connect()
  .then(() => {
    db = client.db('bookingsDB'); // Use 'bookingsDB' database
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
    process.exit(1); // Exit if unable to connect to MongoDB
  });

// Test route
app.get('/', (req, res) => {
  res.send('Server is up and running');
});

// API endpoint to handle form submission for booking a consultant
app.post('/api/book-consultant', async (req, res) => {
  try {
    if (!db) {
      throw new Error('Database not initialized');
    }
    const bookingsCollection = db.collection('bookings'); // 'bookings' collection

    // Create a new consultation document
    const newConsultation = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      consultation: req.body.consultation,
      datetime: new Date(req.body.datetime),
      notes: req.body.notes,
    };
    const result = await bookingsCollection.insertOne(newConsultation);
    res.json({ message: 'Booking successful', data: result });
  } catch (err) {
    console.error('Error saving to MongoDB', err);
    res.status(500).json({ message: 'Error booking consultation' });
  }
});

// API endpoint for saving contact form data
app.post('/api/contact', async (req, res) => {
  try {
    if (!db) {
      throw new Error('Database not initialized');
    }
    const contactsCollection = db.collection('contacts'); // 'contacts' collection

    // Create a new contact document
    const newContact = {
      name: req.body.name,
      location: req.body.location,
      phone: req.body.phone,
      email: req.body.email,
    };
    const result = await contactsCollection.insertOne(newContact);
    res.json({ message: 'Contact saved successfully', data: result });
  } catch (err) {
    console.error('Error saving to MongoDB', err);
    res.status(500).json({ message: 'Error saving contact' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
