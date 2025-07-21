# Contact Form Setup Guide

The contact form is currently set up with two options:

## Option 1: Formspree (Recommended)
Formspree is a free service that handles form submissions for static websites.

### Setup Steps:
1. Go to https://formspree.io
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (it looks like: `xyzabcde`)
5. Replace `YOUR_FORM_ID` in `contact.html` line 47 with your actual form ID
6. Configure your form in Formspree dashboard to send emails to any address you want

### Benefits:
- Emails are sent directly without opening email client
- Works on all devices
- Professional email delivery
- Spam protection included
- Can configure multiple email recipients

## Option 2: Current Mailto Implementation (Fallback)
If you don't set up Formspree, the form will fall back to opening the user's email client.

### Current Configuration:
- Emails go to: admin@neurosplatforms.com
- Requires user to have email client configured
- All form data is pre-filled in the email

## To Change Email Recipients:

### For Formspree:
Configure recipients in your Formspree dashboard

### For Mailto Fallback:
Edit line 240 in `assets/js/main.js`:
```javascript
const mailtoLink = `mailto:your-email@example.com?subject=...
```

## Testing:
1. Fill out the form on your website
2. Submit and verify email is received
3. Check that success message appears
4. Verify form resets after submission