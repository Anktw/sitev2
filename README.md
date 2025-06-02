# 🚀 Portfolio Website

My Old Personal Portfolio Website built with Next.js

## ✨ Features

- ⚡ Project Insertion in json file don't need to manually add every project
- 🎨 Build using two color variables black(#000000) and white(#ffffff)(You can change it in the tailwind config)
- 🔍 SEO optimized
- 📝 Blog section
![image](https://github.com/user-attachments/assets/124e5d95-a967-411d-81a3-5e92bb37c9ca)

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** Tailwind CSS([Tailwind CSS](https://tailwindcss.com/))
- **Deployment:** Vercel([Vercel](https://vercel.com/)) (recommended you can deploy anywhere)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or later
- npm or yarn
- Git
- Redis (Optional)
- SMTP
- A backend to fetch data from(optional)

### 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/anktw/site.git
   cd site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env.local or .env
   
   # Edit the .env.local file with your configuration
   # You'll need to set up your API keys and other environment variables here
   These are the variables you need to set
   #URLs
    FAST_URL=Your Backend url(Optional)
    NEXT_PUBLIC_BASE_URL=http://localhost:3000

    #SMTP
    SMTP_PASS=abcd efgh ijkl mnop
    SMTP_USER=example@gmail.com
    SMTP_HOST=smtp.gmail.com
    SMTP_PORT=587


    #Redis (You don't need to fill this if you don't have a redis)
    REDIS_HOST=admin
    REDIS_PORT=123456
    REDIS_PASSWORD=password
    ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see your application running.

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fyour-repo&project-name=my-portfolio&repository-name=portfolio)

1. Push your code to a GitHub repository
2. Import your project on Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy! 🚀

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [Redis](https://redis.io/)
---

Made with ❤️ by [Unkit](https://unkit.site)
