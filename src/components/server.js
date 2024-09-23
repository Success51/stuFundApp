const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/saveDonation', async (req, res) => {
    const { transactionHash, amount, comment, campaignId, donorAddress } = req.body;

    // Save the donation to the database (MySQL, MongoDB, etc.)
    try {
        // Assuming you're using MySQL, adjust this part accordingly
        const query = 'INSERT INTO donations (transactionHash, amount, comment, campaignId, donorAddress) VALUES (?, ?, ?, ?, ?)';
        await db.query(query, [transactionHash, amount, comment, campaignId, donorAddress]);

        res.status(200).send('Donation saved successfully');
    } catch (error) {
        console.error('Error saving donation:', error);
        res.status(500).send('Error saving donation');
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
