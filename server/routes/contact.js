import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

// POST - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Validation Error',
        message: 'All fields are required',
      })
    }

    if (message.length < 10) {
      return res.status(400).json({
        error: 'Validation Error',
        message: 'Message must be at least 10 characters long',
      })
    }

    // Create contact
    const contact = new Contact({
      name,
      email,
      message,
    })

    // Save to database
    await contact.save()

    // TODO: Send email notification to admin

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      contactId: contact._id,
    })
  } catch (error) {
    console.error('Error submitting contact form:', error)

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message)
      return res.status(400).json({
        error: 'Validation Error',
        messages,
      })
    }

    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to submit contact form',
    })
  }
})

// GET - Fetch all messages (admin endpoint - should be protected)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (error) {
    console.error('Error fetching contacts:', error)
    res.status(500).json({ error: 'Failed to fetch contacts' })
  }
})

export default router
