import { useState, useMemo } from 'react'

function ResumeBuilder({
  studentData = {},
  completedSkills = [],
  careerEvaluation = null,
  onBack,
}) {
  const primary = careerEvaluation?.primary || {
    title: studentData?.careerGoal || 'Software Developer',
    requiredSkills: [],
    roadmap: [],
  }

  const name = studentData?.name || 'Student Name'
  const branch = studentData?.branch || 'CSE'
  const year = studentData?.year || '2'
  const cgpa = studentData?.cgpa || '8.4'
  const interest = studentData?.interests || studentData?.interest || 'Technology'
  const careerGoal = primary.title

  // Active skills derived dynamically from completed skills or required career skills
  const fallbackCareerSkills = useMemo(() => {
    if (primary.roadmap && primary.roadmap.length > 0) {
      return primary.roadmap.map((item) => item.name)
    }
    return primary.requiredSkills && primary.requiredSkills.length > 0
      ? primary.requiredSkills
      : ['Programming Fundamentals', 'Data Structures', 'Git & GitHub', 'SQL']
  }, [primary])

  const verifiedSkills = useMemo(() => {
    return fallbackCareerSkills.filter((skill) =>
      Array.isArray(completedSkills) && completedSkills.includes(skill)
    )
  }, [fallbackCareerSkills, completedSkills])

  const skills = verifiedSkills.length > 0 ? verifiedSkills : fallbackCareerSkills

  const [email, setEmail] = useState('student@careerpath.ai')
  const [phone, setPhone] = useState('+91 98765 43210')
  const [location, setLocation] = useState('Guntur, Andhra Pradesh')
  const [university, setUniversity] = useState('Vignan University')

  const defaultSummary = useMemo(() => {
    const topSkillsStr = skills.slice(0, 4).join(', ')
    return `Motivated ${branch} student pursuing Year ${year}, aiming to excel as a professional ${careerGoal}. Currently building practical technical competency in ${topSkillsStr || 'core engineering concepts'} with a proven commitment to project development, problem solving, and industry readiness.`
  }, [branch, year, careerGoal, skills])

  const [summary, setSummary] = useState(defaultSummary)
  const [certifications, setCertifications] = useState('')
  const [github, setGithub] = useState('https://github.com/yourusername')
  const [linkedin, setLinkedin] = useState('https://linkedin.com/in/yourusername')

  const [generated, setGenerated] = useState(false)

  const handleGenerateResume = () => {
    setGenerated(true)
    setTimeout(() => {
      document
        .getElementById('resume-preview')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    }, 100)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-semibold transition"
          >
            ← Back to Dashboard
          </button>
        )}

        {/* HEADER */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm mb-4">
            📄 Industry Ready Resume
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Build Your Resume 📄
          </h1>

          <p className="text-slate-600 mt-3 text-lg">
            Create an ATS-friendly professional resume populated with your verified skills and personalized for <span className="font-semibold text-indigo-600">{careerGoal}</span>.
          </p>
        </div>

        {/* PERSONAL INFORMATION */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            👤 Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                readOnly
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number
              </label>

              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Location
              </label>

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

          </div>
        </div>

        {/* EDUCATION */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            🎓 Education & Academic Profile
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                College / University
              </label>

              <input
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Branch / Discipline
              </label>

              <input
                type="text"
                value={branch}
                readOnly
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Current Academic Year
              </label>

              <input
                type="text"
                value={`Year ${year}`}
                readOnly
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Cumulative CGPA
              </label>

              <input
                type="text"
                value={cgpa || 'N/A'}
                readOnly
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 font-medium"
              />
            </div>

          </div>
        </div>

        {/* DYNAMIC VERIFIED SKILLS */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-slate-900">
              🛠️ Technical Skills for {careerGoal}
            </h2>

            <span className="text-xs font-bold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">
              {completedSkills.length > 0 ? 'Roadmap Validated' : 'Curated Track'}
            </span>
          </div>

          <p className="text-slate-600 mb-6 text-sm">
            {completedSkills.length > 0
              ? 'These skills were validated through your active CareerPath AI learning journey.'
              : `Recommended core skills curated for your ${careerGoal} career track.`}
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-sm"
              >
                <span className="text-emerald-600 font-bold">
                  ✓
                </span>

                <span className="font-semibold text-slate-800">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PROFESSIONAL SUMMARY */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-slate-900">
              📝 Professional Summary
            </h2>

            <button
              type="button"
              onClick={() => setSummary(defaultSummary)}
              className="text-xs text-indigo-600 font-semibold hover:underline"
            >
              Reset to Recommended
            </button>
          </div>

          <p className="text-slate-500 text-sm mb-4">
            Customized based on your branch ({branch}), year ({year}), and career aspiration ({careerGoal}).
          </p>

          <textarea
            rows="4"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-slate-800 leading-relaxed text-sm"
          />
        </div>

        {/* PROJECTS */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            🚀 Capstone Project
          </h2>

          <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-5">
            <h3 className="text-xl font-bold text-indigo-950 mb-2">
              CareerPath AI — Smart Career & Skill Acceleration Platform
            </h3>

            <p className="text-slate-700 leading-relaxed text-sm">
              Architected and developed CareerPath AI, an intelligent student career guidance system that analyzes multi-factor engineering profiles, identifies domain skill gaps against live industry competency matrices, provides tailored learning roadmaps, tracks milestones, and generates ATS-optimized resumes.
            </p>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            🏆 Certifications & Achievements
          </h2>

          <p className="text-slate-500 text-sm mb-4">
            Add any certifications, hackathons, awards, workshops, or academic honors.
          </p>

          <textarea
            rows="3"
            value={certifications}
            onChange={(e) => setCertifications(e.target.value)}
            placeholder="e.g. AWS Certified Cloud Practitioner, Hackathon Finalist, Python for Data Science (Coursera)..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-sm"
          />
        </div>

        {/* PROFESSIONAL LINKS */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            🔗 Professional Profiles
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                GitHub Profile URL
              </label>

              <input
                type="text"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                LinkedIn Profile URL
              </label>

              <input
                type="text"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

          </div>
        </div>

        {/* GENERATE BUTTON */}
        <div className="text-center mb-10">
          <button
            type="button"
            onClick={handleGenerateResume}
            className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition shadow-lg inline-flex items-center gap-2"
          >
            Generate My Resume Preview →
          </button>
        </div>

        {/* RESUME PREVIEW */}
        {generated && (
          <div
            id="resume-preview"
            className="bg-white border border-slate-300 shadow-xl rounded-2xl p-8 md:p-12 mb-10"
          >

            {/* Resume Header */}
            <div className="border-b-2 border-slate-800 pb-6 mb-6">
              <h1 className="text-4xl font-bold text-slate-900">
                {name}
              </h1>

              <p className="text-slate-600 mt-2 font-medium">
                {email} • {phone} • {location}
              </p>

              <div className="flex flex-wrap gap-4 mt-3 text-sm">
                <span className="text-indigo-600 font-medium">
                  GitHub: {github}
                </span>

                <span className="text-indigo-600 font-medium">
                  LinkedIn: {linkedin}
                </span>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-7">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-300 pb-2 mb-3">
                Professional Summary
              </h2>

              <p className="text-slate-700 leading-relaxed">
                {summary}
              </p>
            </section>

            {/* Education */}
            <section className="mb-7">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-300 pb-2 mb-3">
                Education
              </h2>

              <h3 className="font-bold text-slate-900 text-lg">
                {university}
              </h3>

              <p className="text-slate-700">
                Bachelor of Technology in {branch}
              </p>

              <p className="text-slate-700 mt-1">
                Year: {year} | CGPA: {cgpa || 'N/A'}
              </p>
            </section>

            {/* Skills */}
            <section className="mb-7">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-300 pb-2 mb-3">
                Technical Skills
              </h2>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-medium text-sm border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Project */}
            <section className="mb-7">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-300 pb-2 mb-3">
                Projects
              </h2>

              <h3 className="font-bold text-slate-900">
                CareerPath AI — Smart Career & Skill Acceleration Platform
              </h3>

              <p className="text-slate-700 leading-relaxed mt-2">
                Architected and developed CareerPath AI, an intelligent student career guidance system that analyzes multi-factor engineering profiles, identifies domain skill gaps against live industry competency matrices, provides tailored learning roadmaps, tracks milestones, and generates ATS-optimized resumes.
              </p>
            </section>

            {/* Certifications */}
            {certifications.trim() && (
              <section className="mb-7">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-300 pb-2 mb-3">
                  Certifications & Achievements
                </h2>

                <p className="text-slate-700 whitespace-pre-line">
                  {certifications}
                </p>
              </section>
            )}

            {/* Career Interest */}
            <section className="mb-7">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-300 pb-2 mb-3">
                Target Specialization
              </h2>

              <p className="text-slate-800 font-semibold">
                {careerGoal}
              </p>

              <p className="text-slate-500 text-sm mt-1">
                Focus Areas: {interest}
              </p>
            </section>

            {/* Print Button */}
            <div className="text-center mt-8 print:hidden">
              <button
                type="button"
                onClick={handlePrint}
                className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition shadow-md"
              >
                🖨️ Print / Save as PDF
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}

export default ResumeBuilder