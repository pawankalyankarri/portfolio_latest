# Testing Guide

This guide helps you test all features of your portfolio website.

## Local Testing Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment**
   ```bash
   cp .env.example .env
   # Update .env with your MongoDB URI
   ```

3. **Start Both Frontend and Backend**
   ```bash
   npm run dev:all
   ```

   Or in separate terminals:
   - Frontend: `npm run dev` (runs on http://localhost:5173)
   - Backend: `npm run server` (runs on http://localhost:5000)

## Frontend Testing

### 1. Navigation & Layout

- [ ] Open http://localhost:5173
- [ ] Navigation bar appears at top
- [ ] Theme toggle button visible (top right)
- [ ] All sections scroll smoothly
- [ ] Mobile menu appears on small screens
- [ ] Navigation links work correctly

### 2. Theme Toggle

- [ ] Click theme toggle button
- [ ] Page switches to dark mode
- [ ] Theme persists on page refresh
- [ ] All text colors maintain good contrast
- [ ] Switch back to light mode
- [ ] Light mode theme is correct

### 3. Hero Section

- [ ] Title and subtitle display correctly
- [ ] All three CTA buttons visible:
  - "View My Work"
  - "Get In Touch"
  - "Download CV"
- [ ] Buttons have hover effects
- [ ] CV download works when clicked
- [ ] Mobile layout is responsive

### 4. About Section

- [ ] Section scrolls into view
- [ ] Bio text displays correctly
- [ ] Skills grid shows all 16 skills
- [ ] Skills have proper styling
- [ ] Section has background color
- [ ] Mobile layout stacks vertically

### 5. Projects Section

- [ ] 4 projects display in grid
- [ ] Project cards have proper layout:
  - Image at top
  - Title
  - Description
  - Technology badges
  - Project link
- [ ] Cards have hover effects
- [ ] Images load correctly
- [ ] Mobile displays cards in single column

### 6. Experience Section

- [ ] 3 experience entries display
- [ ] Timeline layout looks correct
- [ ] Each entry shows:
  - Position title
  - Company name
  - Period dates
  - Description
  - Technologies used
- [ ] Timeline dots align properly
- [ ] Mobile layout is readable

### 7. Contact Section

- [ ] Section displays contact form
- [ ] Form has three fields:
  - Name input
  - Email input
  - Message textarea
- [ ] Fields are properly labeled
- [ ] Mobile displays single column
- [ ] Form styling is consistent

### 8. Footer

- [ ] Footer appears at bottom
- [ ] Logo/branding visible
- [ ] Social media icons display:
  - GitHub
  - LinkedIn
  - Twitter
  - Email
- [ ] Links have hover effects
- [ ] Download Resume button works
- [ ] Copyright year is correct

### 9. Scroll to Top

- [ ] Button doesn't show when at top
- [ ] Button appears after scrolling down 300px
- [ ] Clicking button smoothly scrolls to top
- [ ] Button disappears when near top
- [ ] Button is positioned correctly

### 10. Responsive Design

Test on different screen sizes:
- [ ] Mobile (320px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px)
- [ ] Large Desktop (1440px)

Key checks:
- [ ] Text is readable at all sizes
- [ ] Navigation adapts on mobile
- [ ] No horizontal scrolling
- [ ] Touch targets are large enough
- [ ] Images scale properly

## Backend Testing

### 1. Server Setup

- [ ] Backend starts without errors: `npm run server`
- [ ] Health check endpoint works:
  ```bash
  curl http://localhost:5000/api/health
  ```
- [ ] Returns: `{"status":"OK","message":"Server is running"}`

### 2. MongoDB Connection

- [ ] Ensure MongoDB is running
- [ ] Check server logs for: "Connected to MongoDB"
- [ ] Verify connection string in .env is correct

### 3. Contact Form Submission

Test via frontend:
1. [ ] Navigate to Contact section
2. [ ] Fill in all fields with valid data:
   - Name: "John Doe"
   - Email: "john@example.com"
   - Message: "This is a test message with enough characters"
3. [ ] Click "Send Message"
4. [ ] Success message appears
5. [ ] Form fields clear

Test via API:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "message": "This is a test message for API validation with sufficient length"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "contactId": "..."
}
```

### 4. Form Validation

Test invalid inputs:

**Missing fields:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name": "John", "email": "john@example.com"}'
```
- [ ] Returns 400 error
- [ ] Error message: "All fields are required"

**Short message:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "john@example.com",
    "message": "Short"
  }'
```
- [ ] Returns 400 error
- [ ] Error message about message length

**Invalid email:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "invalid-email",
    "message": "This is a valid test message with enough content"
  }'
```
- [ ] Returns 400 error with validation message

### 5. CORS Testing

- [ ] Frontend can make requests to backend
- [ ] No CORS errors in browser console
- [ ] Verify CORS origin in server.js matches frontend URL

### 6. Fetch All Messages (Admin)

```bash
curl http://localhost:5000/api/contact
```

- [ ] Returns array of messages
- [ ] Each message has: name, email, message, timestamp, status
- [ ] Messages sorted by newest first

## Error Handling Testing

### Frontend Errors

1. **API Connection Failure**
   - [ ] Stop backend server
   - [ ] Try submitting contact form
   - [ ] Error message displays to user
   - [ ] Form remains in accessible state

2. **Invalid Email**
   - [ ] Enter invalid email format
   - [ ] HTML5 validation prevents submission
   - [ ] Visual feedback on error

3. **Empty Fields**
   - [ ] Leave required fields empty
   - [ ] HTML5 validation prevents submission
   - [ ] Visual feedback on error

### Backend Errors

1. **Database Connection Loss**
   - [ ] Check error logging in console
   - [ ] API returns 500 error appropriately

2. **Invalid JSON**
   - [ ] Send malformed JSON
   - [ ] Backend returns appropriate error

## Performance Testing

### Frontend Performance

1. **Page Load**
   - [ ] Page loads in < 3 seconds
   - [ ] No layout shifts after load
   - [ ] All images load properly

2. **Theme Toggle**
   - [ ] Theme switches instantly
   - [ ] No flash of wrong theme
   - [ ] Smooth CSS transitions

3. **Scroll Performance**
   - [ ] Smooth scrolling
   - [ ] No jank on animations
   - [ ] Scroll to top is smooth

### Backend Performance

1. **Response Time**
   - [ ] Contact submission responds in < 1 second
   - [ ] GET messages responds in < 1 second

2. **Memory Usage**
   - [ ] No memory leaks
   - [ ] Server remains stable over time

## Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Tab order is logical
- [ ] Focus indicators visible
- [ ] Color contrast passes WCAG AA
- [ ] Images have alt text (if used)
- [ ] Form labels associated with inputs
- [ ] Error messages are announced

## Cross-Browser Testing

Test on:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Device Testing

- [ ] iPhone 12/13/14
- [ ] Android phones (Samsung, Pixel)
- [ ] iPad/Tablets
- [ ] Desktop monitors (various sizes)

## Final Checklist

Before deployment:

- [ ] All tests above pass
- [ ] No console errors or warnings
- [ ] No broken links
- [ ] Resume PDF downloads correctly
- [ ] Form submissions save to database
- [ ] Theme persists on reload
- [ ] Navigation is intuitive
- [ ] Content is up to date
- [ ] Social links are correct
- [ ] Contact email is correct
- [ ] No hardcoded credentials in code
- [ ] Environment variables configured
- [ ] Git repository clean and committed

## Debugging Tips

### Frontend Debugging

1. **Check browser console**
   - Open DevTools: F12 or Cmd+Option+I
   - Look for errors in Console tab
   - Check Network tab for failed requests

2. **Check theme issues**
   ```javascript
   // In browser console
   localStorage.getItem('theme')
   document.documentElement.classList
   ```

3. **Check API calls**
   - Open Network tab
   - Look for API requests
   - Check request/response payloads

### Backend Debugging

1. **Check MongoDB connection**
   ```bash
   # In terminal where backend runs
   # Look for "Connected to MongoDB" message
   ```

2. **Check API responses**
   ```bash
   curl -v http://localhost:5000/api/health
   ```

3. **Enable more logging**
   - Update server.js to add more console.log statements
   - Track request flow

## Reporting Issues

If you find issues, include:

1. Steps to reproduce
2. Expected behavior
3. Actual behavior
4. Browser/OS information
5. Console error messages
6. Network requests (from DevTools)

Good luck with testing! 🚀
