const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Database (JSON file)
const DB_PATH = path.join(__dirname, 'db.json');

const getDb = () => {
    try {
        if (!fs.existsSync(DB_PATH) || fs.statSync(DB_PATH).size === 0) {
            const initialData = { portfolio: [] };
            fs.writeFileSync(DB_PATH, JSON.stringify(initialData));
            return initialData;
        }
        const data = fs.readFileSync(DB_PATH);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading database:', error);
        return { portfolio: [] };
    }
};

const saveDb = (data) => {
    try {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error saving database:', error);
    }
};

// Routes
app.get('/api/portfolio', (req, res) => {
    const db = getDb();
    res.json(db.portfolio);
});

app.post('/api/upload', upload.single('media'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const { title, client, type, category, subcategory } = req.body;
    const newItem = {
        id: Date.now(),
        title,
        client,
        type, // 'image' or 'video'
        category: category || 'project', // 'project' or 'photo'
        subcategory: subcategory || '', // e.g., 'Katalog', 'Logo'
        url: `/uploads/${req.file.filename}`,
        createdAt: new Date().toISOString()
    };

    const db = getDb();
    db.portfolio.push(newItem);
    saveDb(db);

    res.status(201).json(newItem);
});

app.delete('/api/portfolio/:id', (req, res) => {
    const { id } = req.params;
    const db = getDb();
    db.portfolio = db.portfolio.filter(item => item.id !== parseInt(id));
    saveDb(db);
    res.status(200).send('Item deleted.');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
