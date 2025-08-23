# SEEKON.AI Website

## 🚀 Quick Start Guide for Beginners

### Local Development (Practice Site)
1. **Start local server**: Open Terminal in this folder and run:
   ```bash
   npm run dev
   ```
   Your practice site will open at: http://localhost:3000

2. **Make changes**: Edit files in the `src/` folder:
   - `src/pages/HomePage.js` - Main page content
   - `src/pages/AboutPage.js` - About page
   - `src/pages/ServicesPage.js` - Services page
   - `public/index.html` - HTML head/title
   - Images go in `public/images/`

3. **See changes instantly**: Save files and refresh browser

### Safe Deployment to Live Site
1. **Test locally first**: Make sure everything works at http://localhost:3000
2. **Deploy with one click**:
   ```bash
   ./deploy.sh
   ```
   This script will:
   - Build your changes
   - Ask for confirmation
   - Deploy to live site safely
   - Show you the results

### Your Live Website
- **URL**: https://seekon-ai-platform.herokuapp.com
- **Admin Dashboard**: Google Sheets (check your email captures)

### Common Tasks

#### Change website text:
- Edit files in `src/pages/`
- Save → Test locally → Run `./deploy.sh`

#### Add new images:
- Put images in `public/images/`
- Reference them in code as `/images/filename.jpg`

#### View form submissions:
- Check your Google Sheets (spreadsheet ID in .env file)

### Need Help?
- Your local practice site: http://localhost:3000
- Live site: https://seekon-ai-platform.herokuapp.com
- Forms save to Google Sheets automatically

### Safety Features
- ✅ Local testing before deployment
- ✅ Automatic backups to GitHub
- ✅ Deployment confirmation prompts
- ✅ Build verification before going live