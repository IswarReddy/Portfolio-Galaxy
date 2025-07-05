# 🌌 Portfolio Galaxy

> An interactive 3D portfolio where projects orbit in space like planets in a galaxy

🌐 **[Live Demo](https://portfolio-galaxy-by-iswar.netlify.app)** | 

## ✨ Features

- **🌟 Interactive 3D Galaxy** - Navigate through your projects in a stunning space environment
- **🪐 Floating Planet Projects** - Each project is represented as a clickable planet
- **🔍 Zoom & Explore** - Click any planet to zoom in and explore project details
- **🎭 Pure CSS Animations** - No external libraries required
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- **🚀 Live Demo Links** - Direct access to project demos and GitHub repositories

## 🛠️ Tech Stack

- **React** - Frontend framework
- **CSS3** - Animations and styling
- **JavaScript** - Interactive functionality
- **HTML5** - Structure and semantics

## 🌟 Featured Projects

| Planet | Project | Description |
|--------|---------|-------------|
| 🌍 | RayBan Landing Page | Modern product showcase |
| 🎨 | Color Palette Studio | Creative design tool |
| ⚡ | Fenta GSAP | Advanced scroll animations |
| 🌦️ | Weather Wish | Real-time weather app |
| 👤 | Profile Card | Clean, interactive UI |
| 🎮 | Tic-Tac-Toe | Classic React game |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iswar-reddy/portfolio-galaxy.git
   cd portfolio-galaxy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

1. **Explore the Galaxy** - Use your mouse to navigate around the 3D space
2. **Click Planets** - Click on any planet to zoom in and view project details
3. **Visit Projects** - Use the links to view live demos or GitHub repositories
4. **Responsive Design** - Try it on different devices for the full experience

## 🔧 Customization

### Adding New Projects

1. Navigate to `src/data/projects.js`
2. Add your project object:
   ```javascript
   {
     id: 'your-project',
     name: 'Your Project Name',
     description: 'Project description',
     demoUrl: 'https://your-demo.com',
     githubUrl: 'https://github.com/iswar-reddy/project',
     planet: {
       size: 'medium',
       color: '#ff6b6b',
       position: { x: 100, y: 50, z: -200 }
     }
   }
   ```

### Customizing Animations

Modify the CSS animations in `src/styles/galaxy.css`:
- **Orbit Speed**: Change `animation-duration` values
- **Planet Size**: Adjust `.planet` dimensions
- **Colors**: Update planet color schemes

## 🌐 Deployment

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to Netlify

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Copyright © 2025 Iswar Reddy. All rights reserved.**

## 🎉 Acknowledgments

- Inspired by the beauty of space and the cosmos
- Built with passion for creative web experiences by **Iswar Reddy**
- Part of Iswar's #100DaysOfCode journey

## 📞 Connect with Iswar Reddy

- **🌐 Live Demo**: [Portfolio Galaxy](https://portfolio-galaxy-by-iswar.netlify.app)
- **LinkedIn**: [Iswar Reddy]([https://www.linkedin.com/in/p-iswara-reddy-02a9382a8/])



---

**Copyright © 2025 Iswar Reddy. All rights reserved.**

⭐ **Star this repository if you found it helpful!**

*Made with ❤️ and lots of ☕ by Iswar Reddy*
