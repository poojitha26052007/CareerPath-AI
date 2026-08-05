import { useState } from 'react'

function ResumeBuilder({ studentData, completedSkills = [] }) {
  const [email, setEmail] = useState('yourname@gmail.com')
  const [phone, setPhone] = useState('+91 XXXXX XXXXX')
  const [location, setLocation] = useState('Guntur, Andhra Pradesh')

  const [summary, setSummary] = useState(
    'Motivated CSE student pursuing Year 2, with a strong interest in Artificial Intelligence and Machine Learning. Currently developing technical skills through hands-on learning and project development, with a passion for building real-world technology solutions and becoming industry ready.'
  )

  const [certifications, setCertifications] = useState('')
  const [github, setGithub] = useState(
    'https://github.com/yourusername'
  )
  const [linkedin, setLinkedin] = useState(
    'https://linkedin.com/in/yourusername'
  )

  const [generated, setGenerated] = useState(false)

  const skills =
    completedSkills.length > 0
      ? completedSkills
      : [
          'Python Fundamentals',
          'SQL',
          'Git & GitHub',
          'NumPy',
          'Pandas',
          'Statistics',
          'Machine Learning',
          'AI Project',
        ]

  const name = studentData?.name || 'Your Name'
  const branch = studentData?.branch || 'CSE'
  const year = studentData?.year || '2'
  const cgpa = studentData?.cgpa || '8.42'
  const interest = studentData?.interest || 'Artificial Intelligence'

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

        {/* HEADER */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-4">
            🎉 Career Ready
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Build Your Resume 📄
          </h1>

          <p className="text-slate-600 mt-3 text-lg">
            Create a professional resume using the skills you developed
            through CareerPath AI.
          </p>
        </div>

        {/* PERSONAL INFORMATION */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
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
                Email
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
                Phone
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
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            🎓 Education
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                College / University
              </label>

              <input
                type="text"
                value="Vignan University"
                readOnly
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Branch
              </label>

              <input
                type="text"
                value={branch}
                readOnly
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Current Year
              </label>

              <input
                type="text"
                value={year}
                readOnly
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                CGPA
              </label>

              <input
                type="text"
                value={cgpa}
                readOnly
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50"
              />
            </div>

          </div>
        </div>

        {/* COMPLETED SKILLS */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            🛠️ Your Completed Skills
          </h2>

          <p className="text-slate-600 mb-6">
            These skills were completed through your CareerPath AI learning
            journey.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-50 border border-green-200"
              >
                <span className="text-green-600 font-bold">
                  ✓
                </span>

                <span className="font-medium text-slate-800">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PROFESSIONAL SUMMARY */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            📝 Professional Summary
          </h2>

          <p className="text-slate-500 text-sm mb-4">
            CareerPath AI generated this summary based on your profile.
          </p>

          <textarea
            rows="6"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
        </div>

        {/* PROJECTS */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            🚀 Projects
          </h2>

          <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-5">
            <h3 className="text-xl font-bold text-indigo-900 mb-2">
              CareerPath AI
            </h3>

            <p className="text-slate-700 leading-relaxed">
              CareerPath AI is an AI-powered student career guidance
              platform that analyzes student profiles, identifies skill
              gaps, recommends suitable career paths, provides a
              personalized learning roadmap, tracks skill completion,
              and helps students build professional resumes.
            </p>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            🏆 Certifications & Achievements
          </h2>

          <p className="text-slate-500 text-sm mb-4">
            Add certifications, hackathons, awards, workshops, etc.
          </p>

          <textarea
            rows="4"
            value={certifications}
            onChange={(e) => setCertifications(e.target.value)}
            placeholder="Example: AI Workshop, Hackathon 2026, Python Certification..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
        </div>

        {/* PROFESSIONAL LINKS */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            🔗 Professional Links
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                GitHub
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
                LinkedIn
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
            className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition shadow-lg"
          >
            Generate My Resume →
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

              <p className="text-slate-600 mt-2">
                {email} | {phone} | {location}
              </p>

              <div className="flex flex-wrap gap-4 mt-3 text-sm">
                <span className="text-indigo-600">
                  GitHub: {github}
                </span>

                <span className="text-indigo-600">
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

              <h3 className="font-bold text-slate-900">
                Vignan University
              </h3>

              <p className="text-slate-700">
                {branch}
              </p>

              <p className="text-slate-700 mt-1">
                Year: {year} | CGPA: {cgpa}
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
                    className="px-3 py-2 rounded-lg bg-slate-100 text-slate-800 font-medium"
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
                CareerPath AI
              </h3>

              <p className="text-slate-700 leading-relaxed mt-2">
                AI-powered student career guidance platform that
                analyzes student profiles, identifies skill gaps,
                recommends suitable career paths, provides a
                personalized learning roadmap, tracks skill completion,
                and helps students build professional resumes.
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
                Career Interest
              </h2>

              <p className="text-slate-700">
                Artificial Intelligence & Machine Learning
              </p>

              <p className="text-slate-500 text-sm mt-1">
                Interest: {interest}
              </p>
            </section>

            {/* Print Button */}
            <div className="text-center mt-8 print:hidden">
              <button
                type="button"
                onClick={handlePrint}
                className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition"
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