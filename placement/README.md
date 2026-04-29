# Campus Placement Portal

A modern, responsive Angular application that helps students discover and filter companies based on their CGPA eligibility and branch specialization. The portal displays comprehensive company information including salary details, interview rounds, selection process, and job roles.

## 🌟 Features

- **CGPA-Based Filtering**: Filter companies based on your current CGPA to see which organizations you're eligible for
- **Branch Filtering**: Filter companies by your branch of study (CSE, IT, ECE, etc.)
- **Company Details**: View comprehensive information about each company including:
  - Package and salary breakdown
  - Number of interview rounds
  - Selection process details
  - Available roles
  - Eligibility criteria
  - Work locations
  - Company website links
- **Expandable Cards**: Click on any company card to view detailed information
- **Real-time Filtering**: Instant results as you update filters
- **Modern UI**: Clean, attractive design with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components (future expansion)
│   ├── models/              # TypeScript interfaces
│   │   ├── company.model.ts    # Company interface definition
│   │   └── filter.model.ts     # Filter criteria interface
│   ├── services/            # Business logic and data management
│   │   └── company.service.ts  # Company filtering and data service
│   ├── data/                # Static data files
│   │   └── company-data.ts     # Company information dataset
│   ├── app.ts               # Main component logic
│   ├── app.html             # Main component template
│   └── app.css              # Component styling
├── styles.css               # Global styles
├── main.ts                  # Application entry point
├── main.server.ts           # Server-side rendering entry
└── index.html               # Main HTML file
```

## 🛠️ Technologies Used

- **Angular 19+**: Modern web framework
- **TypeScript**: Type-safe JavaScript
- **RxJS**: Reactive programming
- **CSS3**: Modern styling with gradients and animations
- **ESBuild**: Fast module bundler

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19+)

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/campus-placement-portal.git
   cd placement
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```
   Or use the npm script:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:4200`

4. **Build for production**
   ```bash
   ng build
   ```
   Output will be in the `dist/placement` directory

## 💻 Usage

### Filtering Companies

1. **Enter Your CGPA**: Input your current CGPA in the "Your CGPA" field
2. **Select Branch** (Optional): Choose your branch from the dropdown menu
   - Default is "All Branches" - shows all eligible companies
   - Select a specific branch to narrow down results
3. **View Results**: Companies matching your eligibility will be displayed

### Viewing Company Details

1. Click on any company card to expand and view:
   - Salary breakdown (Base + Bonus)
   - Available job roles
   - Interview process details
   - Eligibility requirements
   - Company website link

2. Click again to collapse the card

### Reset Filters

Click the "Reset Filters" button to clear all filters and view all companies

## 📊 Sample Data

The application includes sample data for 6 major companies:
- **Google**: 30 LPA, Min CGPA 8.5
- **Microsoft**: 28 LPA, Min CGPA 8.0
- **Meta**: 35 LPA, Min CGPA 8.8
- **Amazon**: 32 LPA, Min CGPA 8.5
- **TCS**: 7 LPA, Min CGPA 6.5
- **Infosys**: 8 LPA, Min CGPA 6.0

## 🎨 Design Features

- **Modern Color Scheme**: Teal/Cyan gradient design (#00bcd4 → #0097a7)
- **Attractive Background**: Subtle blue-gray gradient background
- **Smooth Animations**: Card transitions and expandable details
- **Responsive Layout**: Grid-based design that adapts to all screen sizes
- **Accessibility**: Clear labels, good contrast, and intuitive navigation

## 🔧 Customization

### Adding New Companies

Edit `src/app/data/company-data.ts`:

```typescript
{
  id: 7,
  name: 'Company Name',
  package: '25 LPA',
  minPackage: '23 LPA',
  date: 'Dec 15, 2024',
  cgpa: 7.5,
  branches: 'CSE, IT',
  roles: ['Role 1', 'Role 2'],
  salary: {
    base: '20 LPA',
    bonus: '5 LPA',
    total: '25 LPA'
  },
  rounds: 3,
  selectionProcess: ['Online Test', 'Interview', 'HR Round'],
  workLocation: 'City Name',
  companyLink: 'https://company.com'
}
```

### Changing Color Scheme

Edit `src/app/app.css` and `src/styles.css` to modify the CSS variables:
```css
--primary-color: #00bcd4;    /* Change this */
--secondary-color: #0097a7;  /* And this */
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 Future Enhancements

- [ ] Add more companies to the database
- [ ] Implement backend API integration
- [ ] Add user authentication
- [ ] Save favorite companies
- [ ] Add placement statistics and analytics
- [ ] Email notifications for new placements
- [ ] Dark mode support
- [ ] Advanced search and filtering options
- [ ] Company ratings and reviews from students
- [ ] Interview experience sharing

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Campus Placement Portal - A student placement discovery platform

## 📞 Support

For support, open an issue on GitHub or contact the development team.

## 🙏 Acknowledgments

- Built with Angular 19
- Icons and design inspiration from modern web applications
- Thanks to all contributors

---

**Happy coding! Good luck with your placements! 🎓**
