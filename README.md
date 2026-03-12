# Full Stack Portfolio Website

A modern, responsive portfolio website built with React, Vite, Express.js, and MongoDB. Features a dark/light theme toggle, project showcase, experience timeline, and contact form with backend integration.

## Features

- **React 18 + Vite** - Fast, modern frontend development
- **Tailwind CSS** - Utility-first styling with custom theme system
- **Dark/Light Theme Toggle** - Persistent theme preference with localStorage
- **Express.js Backend** - RESTful API for contact form submissions
- **MongoDB Integration** - Database storage for contact messages
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Fade and slide animations for visual appeal
- **Contact Form** - Validated form with backend submission
- **Resume Download** - PDF download from public folder

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ThemeToggle.tsx
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── utils/
│   │   ├── api-client.ts
│   │   └── constants.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── server/
│   ├── server.js
│   ├── models/
│   │   └── Contact.js
│   └── routes/
│       └── contact.js
├── public/
│   └── resume.pdf
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm
- MongoDB (local or MongoDB Atlas connection string)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your configuration:
   ```
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   PORT=5000
   ```

### Development

**Run both frontend and backend together:**
```bash
npm run dev:all
```

This will start:
- Frontend at `http://localhost:5173` (Vite dev server)
- Backend at `http://localhost:5000` (Express server)

**Or run separately:**

Frontend only:
```bash
npm run dev
```

Backend only:
```bash
npm run server
```

### Building

Build the frontend for production:
```bash
npm run build
```

### Testing

The contact form is fully functional. Test it by:
1. Navigating to the Contact section
2. Filling in the form with valid data
3. Submitting the form
4. Check MongoDB to verify the message was saved

## Customization

### Update Portfolio Content

Edit `/src/utils/constants.ts` to customize:
- Projects
- Experience timeline
- Skills
- Social media links

### Modify Theme Colors

Edit `/src/index.css` and `/tailwind.config.js` to customize the color scheme. The theme uses CSS variables for easy customization.

### Change Social Links

Update the `SOCIAL_LINKS` in `/src/utils/constants.ts` with your actual social media URLs.

### Add Email Notifications

To receive email notifications when someone submits the contact form:
1. Install an email service (e.g., nodemailer, SendGrid)
2. Update `/server/routes/contact.js` with your email logic

## Deployment

### Frontend (Vercel/Netlify)

1. Push to GitHub
2. Connect your repository to Vercel or Netlify
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Backend (Railway/Render/Heroku)

1. Deploy the Node.js application
2. Set environment variables in the deployment platform
3. Ensure MongoDB is accessible
4. Update API URL in frontend Vite config if needed

## Technologies Used

- **Frontend:**
  - React 18
  - Vite
  - TypeScript
  - Tailwind CSS
  - Axios

- **Backend:**
  - Express.js
  - Node.js
  - MongoDB
  - Mongoose
  - CORS

## License

MIT License - feel free to use this template for your portfolio.

## Support

For issues or questions, please open an issue in the repository.
