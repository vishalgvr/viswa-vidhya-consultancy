/**
 * Courses Catalog, Dynamic Search & Category Filtering
 * Viswa Vidhya Educational Consultancy
 */

const COURSES_DATA = [
  {
    id: 'mbbs-medicine',
    title: 'MBBS / General Medicine',
    category: 'MBBS',
    duration: '5 - 6 Years',
    popularDestinations: ['Mauritius', 'Hungary'],
    eligibility: '10+2 with PCB & NEET qualification',
    description: 'Premier medical degree programs with world-class clinical hospital rotations, English-taught curriculums, and strong preparation for medical licensing exams like FMGE / NExT.',
    highlights: ['Hospital Bedside Training', 'No IELTS for Mauritius', 'High FMGE Track Record', 'Separate Hostels']
  },
  {
    id: 'ug-engineering',
    title: 'Bachelor of Engineering & Technology (B.Eng / B.Sc)',
    category: 'UG',
    duration: '3 - 4 Years',
    popularDestinations: ['Germany', 'Hungary'],
    eligibility: '10+2 with Physics, Chemistry & Mathematics (PCM)',
    description: 'Hands-on undergraduate engineering programs in Mechanical, Automotive, Computer Science, Electrical, and Mechatronics at top European universities.',
    highlights: ['Industry Internships', 'Cutting-Edge Labs', 'Low/Zero Tuition in Germany', 'Post-Study Work Options']
  },
  {
    id: 'ug-business',
    title: 'Bachelor of Business Administration & Management',
    category: 'UG',
    duration: '3 Years',
    popularDestinations: ['Germany', 'Hungary', 'Mauritius'],
    eligibility: '10+2 in any stream (Commerce, Science, or Arts)',
    description: 'Foundational degree in international business, marketing, finance, and global trade with international student networking.',
    highlights: ['Global Case Studies', 'Cross-Border Networking', 'Modern Curriculum', 'Career Placement Guidance']
  },
  {
    id: 'pg-datascience-ai',
    title: 'Master of Science in Data Science & Artificial Intelligence',
    category: 'PG',
    duration: '1.5 - 2 Years',
    popularDestinations: ['Germany', 'Hungary'],
    eligibility: 'Bachelor’s degree in CS, IT, Math, or related STEM field',
    description: 'Advanced postgraduate specialization in machine learning, deep neural networks, big data analytics, and cloud computing architectures.',
    highlights: ['High Industry Demand', 'Tech Hub Ecosystems', 'European Research Facilities', '18-Month Job Search Visa in Germany']
  },
  {
    id: 'pg-management-mba',
    title: 'Master of Business Administration (MBA & International Management)',
    category: 'PG',
    duration: '1 - 2 Years',
    popularDestinations: ['Germany', 'Hungary', 'Mauritius'],
    eligibility: 'Bachelor’s degree in any discipline',
    description: 'Strategic leadership, financial modeling, and global operations management designed for emerging business leaders and entrepreneurs.',
    highlights: ['Leadership Workshops', 'Executive Seminars', 'Corporate Projects', 'Global Alumni Network']
  },
  {
    id: 'diploma-hospitality',
    title: 'International Diploma in Hospitality & Tourism Management',
    category: 'Diploma',
    duration: '1 - 2 Years',
    popularDestinations: ['Mauritius', 'Hungary'],
    eligibility: '10+2 from a recognized board',
    description: 'Practical training in luxury resort management, culinary operations, customer experience, and international tourism logistics.',
    highlights: ['Paid Resort Internships', 'Hands-on Service Training', 'Global Hospitality Careers', 'Island Resort Exposure']
  },
  {
    id: 'diploma-it-computing',
    title: 'Diploma in Applied Information Technology & Web Development',
    category: 'Diploma',
    duration: '1 - 2 Years',
    popularDestinations: ['Mauritius', 'Germany'],
    eligibility: '10+2 with basic computer proficiency',
    description: 'Fast-track practical diploma covering full-stack web applications, database administration, software testing, and cybersecurity fundamentals.',
    highlights: ['Project-Centric Learning', 'Portfolio Development', 'Industry-Relevant Tools', 'Direct Career Entryway']
  },
  {
    id: 'prof-biotech',
    title: 'Professional Studies in Biotechnology & Pharmacy',
    category: 'Professional Courses',
    duration: '3 - 5 Years',
    popularDestinations: ['Hungary', 'Germany'],
    eligibility: '10+2 with Biology & Chemistry or relevant Bachelor degree',
    description: 'Specialized scientific training in pharmaceuticals, genetic engineering, clinical trials, and healthcare product development.',
    highlights: ['Advanced Laboratories', 'European Pharma Hubs', 'Research Fellowships', 'High Clinical Relevance']
  },
  {
    id: 'other-opportunities',
    title: 'Preparatory Pathways & International Foundation Programs',
    category: 'Other Opportunities',
    duration: '6 - 12 Months',
    popularDestinations: ['Germany', 'Hungary', 'Mauritius'],
    eligibility: 'High School completion or undergraduate transition requirements',
    description: 'Bridge programs designed to strengthen language proficiency, foundational sciences, and academic adjustment before entering main degree programs.',
    highlights: ['Guaranteed University Progression', 'Language Immersion', 'Academic Soft Skills', 'Smooth Cultural Onboarding']
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('coursesGridContainer');
  const searchInput = document.getElementById('courseSearchInput');
  const filterPills = document.querySelectorAll('.filter-btn');

  if (!container) return;

  let activeCategory = 'All';
  let searchQuery = '';

  function renderCourses() {
    const filtered = COURSES_DATA.filter(course => {
      const matchCat = activeCategory === 'All' || course.category.toLowerCase() === activeCategory.toLowerCase();
      const q = searchQuery.toLowerCase();
      const matchQuery = !q || 
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.popularDestinations.some(d => d.toLowerCase().includes(q)) ||
        course.category.toLowerCase().includes(q);

      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem;" class="glass-panel">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🔍</div>
          <h3 style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem;">No Matching Courses Found</h3>
          <p style="color: #475569; font-size: 0.9rem; max-width: 460px; margin: 0 auto 1.5rem auto;">
            Looking for a custom discipline, specific university eligibility, or tuition details? Speak directly with our lead counsellor.
          </p>
          <button data-open-guidance class="btn btn-primary btn-sm">
            <span>Ask Our Career Counsellor</span>
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(course => {
      let badgeClass = 'badge-blue';
      if (course.category === 'MBBS') badgeClass = 'badge-amber';
      else if (course.category === 'UG') badgeClass = 'badge-teal';
      else if (course.category === 'PG') badgeClass = 'badge-blue';
      else if (course.category === 'Diploma') badgeClass = 'badge-emerald';

      const destBadges = course.popularDestinations.map(d => {
        let flag = '🌍';
        if (d === 'Mauritius') flag = '🇲🇺';
        else if (d === 'Germany') flag = '🇩🇪';
        else if (d === 'Hungary') flag = '🇭🇺';
        return `<span style="font-size: 0.75rem; color: #0f172a; font-weight: 600;">${flag} ${d}</span>`;
      }).join(' • ');

      const highlightsList = course.highlights.map(h => `
        <li>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${h}</span>
        </li>
      `).join('');

      return `
        <div class="course-card glass-card-hover">
          <div class="course-card-top">
            <span class="badge ${badgeClass}">${course.category}</span>
            <span style="font-size: 0.75rem; color: #64748b; font-weight: 600;">⏱ ${course.duration}</span>
          </div>

          <h3 class="course-card-title">${course.title}</h3>
          <p class="course-card-desc">${course.description}</p>

          <div class="course-meta-grid">
            <div>
              <div class="course-meta-lbl">Destinations</div>
              <div class="course-meta-val">${destBadges}</div>
            </div>
            <div>
              <div class="course-meta-lbl">Eligibility</div>
              <div class="course-meta-val" style="font-size: 0.75rem; color: #475569;">${course.eligibility}</div>
            </div>
          </div>

          <ul class="course-highlights">
            ${highlightsList}
          </ul>

          <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;">
            <button 
              data-open-guidance 
              data-dest="${course.popularDestinations[0]}" 
              data-course="${course.title}" 
              class="btn btn-outline-amber btn-sm w-full"
            >
              <span>Get Course Guidance</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Initial render
  renderCourses();

  // Search input handler
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderCourses();
  });

  // Filter button clicks
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category') || 'All';
      renderCourses();
    });
  });
});
