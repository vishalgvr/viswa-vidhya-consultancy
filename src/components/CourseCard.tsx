import { Clock, Globe, Check, Sparkles } from 'lucide-react';
import type { CourseItem } from '../types';

interface CourseCardProps {
  course: CourseItem;
  onSelectCourse?: (courseTitle: string) => void;
}

export default function CourseCard({ course, onSelectCourse }: CourseCardProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'MBBS':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
      case 'UG':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'PG':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Diploma':
        return 'bg-teal-500/20 text-teal-300 border-teal-500/30';
      case 'Professional Courses':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
      
      <div>
        {/* Badges row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getCategoryColor(course.category)}`}>
            {course.category}
          </span>
          
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-white font-heading group-hover:text-amber-400 transition-colors mb-2">
          {course.title}
        </h4>

        {/* Description */}
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          {course.description}
        </p>

        {/* Eligibility box */}
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-4">
          <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-1">
            Eligibility Baseline:
          </div>
          <p className="text-xs text-slate-300">
            {course.eligibility}
          </p>
        </div>

        {/* Highlights */}
        <div className="space-y-1.5 mb-4">
          {course.highlights.map((hl, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>{hl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Destinations & CTA */}
      <div className="pt-4 border-t border-slate-800/80 space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Globe className="w-3.5 h-3.5 text-blue-400" />
          <span>Available in:</span>
          <span className="font-semibold text-slate-200">
            {course.popularDestinations.join(', ')}
          </span>
        </div>

        {onSelectCourse && (
          <button
            onClick={() => onSelectCourse(course.title)}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 hover:text-slate-950 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Check Eligibility & Pathways</span>
          </button>
        )}
      </div>

    </div>
  );
}
