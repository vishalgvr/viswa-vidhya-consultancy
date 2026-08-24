import { useState } from 'react';
import { BookOpen, Search, GraduationCap } from 'lucide-react';
import { COURSES_DATA } from '../data/consultancyData';
import CourseCard from '../components/CourseCard';

interface CoursesProps {
  onOpenGuidanceModal: (dest?: string, course?: string) => void;
}

export default function Courses({ onOpenGuidanceModal }: CoursesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'MBBS', 'UG', 'PG', 'Diploma', 'Professional Courses', 'Other Opportunities'];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || 
      (selectedCategory === 'Other Opportunities' ? course.category === 'Other Opportunities' : course.category === selectedCategory);
    
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.popularDestinations.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-20">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
          <BookOpen className="w-3.5 h-3.5" /> Programs & Pathways
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading leading-tight">
          Courses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-300">Study Opportunities</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Explore structured educational pathways across undergraduate, postgraduate, medicine, diploma, and specialized certifications in Mauritius, Germany, and Hungary.
        </p>

        {/* Search & Filter Bar */}
        <div className="pt-6 max-w-3xl mx-auto space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by course name, domain, or destination (e.g. MBBS, Engineering, Mauritius, AI)..."
              className="w-full bg-slate-900 border border-slate-700 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 shadow-xl"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelectCourse={(title) => onOpenGuidanceModal(course.popularDestinations[0], title)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-slate-900/60 rounded-3xl border border-slate-800 space-y-4">
            <GraduationCap className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-xl font-bold text-white font-heading">No matching courses found</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Looking for a custom discipline or need specific university eligibility verification?
            </p>
            <button
              onClick={() => onOpenGuidanceModal()}
              className="px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs"
            >
              Ask Our Career Counsellor
            </button>
          </div>
        )}
      </section>

      {/* Personalized Course Advisory Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-teal-950 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Uncertain about course selection?</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Get 1-on-1 Academic Profile Assessment
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We review your 10+2 marks, graduation transcripts, or NEET scorecard to recommend verified courses and institutions matching your career ambition.
            </p>
          </div>

          <button
            onClick={() => onOpenGuidanceModal()}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-sm whitespace-nowrap shadow-xl transition-all cursor-pointer"
          >
            Get Free Profile Evaluation
          </button>
        </div>
      </section>

    </div>
  );
}
