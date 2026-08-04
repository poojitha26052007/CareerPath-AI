import { useState } from 'react'

function ResumeBuilder({ studentData, completedSkills = [] }) {
  const [generated, setGenerated] = useState(false)

  const name = studentData?.name || 'Student'
  const branch = studentData?.branch || 'Not specified'
  const year = studentData?.year || 'Not specified'
  const cgpa = studentData?.cgpa || 'Not specified'
  const interest = studentData?.interests || 'technology'

  const generatedSummary =
    `Motivated student pursuing ${branch} in Year ${year}, with an interest in ${interest}. ` +
    `Currently developing technical skills through hands-on learning and project development, ` +
    `with a strong interest in building real-world technology solutions and becoming industry ready.`

  const [resumeData, setResumeData] = useState({
    email: '',
    phone: '',
    location: '',
    college: 'Vignan University',
    summary: '',
    projects:
      'CareerPath AI – AI-powered student career guidance platform that analyzes student profiles, identifies skill gaps, recommends suitable career paths, provides a personalized learning roadmap, tracks skill completion, and helps students build professional resumes.',
    achievements: '',
    github: '',
    linkedin: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setResumeData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleGenerate = (e) => {
    e.preventDefault()
    setGenerated(true)
  }

  const handlePrint = () => {
    window.print()
  }

  if (generated) {
    return (
      <div className="min-h-screen bg-slate-100 px-6 py-10">
        <div className="max-w-4xl mx-auto">

          {/* Success Header */}
          <div className="text-center mb-8 no-print">
            <div className="text-5xl mb-3">✓</div>

            <h1 className="text-3xl font-bold text-green-700">
              Resume Generated
            </h1>

            <p className="text-slate-600 mt-2">
              Your CareerPath AI resume is ready.
            </p>
          </div>

          {/* Resume */}
          <div
            id="resume"
            className="bg-white shadow-xl rounded-xl p-10 md:p-12 text-slate-900"
          >

            {/* Header */}
            <div className="text-center border-b border-slate-300 pb-6">

              <h1 className="text-4xl font-bold uppercase tracking-wide">
                {name}
              </h1>

              <p className="text-slate-600 mt-2">
                {resumeData.email || 'Email not provided'}
                {' | '}
                {resumeData.phone || 'Phone not provided'}
                {' | '}
                {resumeData.location || 'Location not provided'}
              </p>

              {(resumeData.github || resumeData.linkedin) && (
                <div className="flex justify-center flex-wrap gap-4 mt-3 text-sm">

                  {resumeData.github && (
                    <span>
                      GitHub: {resumeData.github}
                    </span>
                  )}

                  {resumeData.linkedin && (
                    <span>
                      LinkedIn: {resumeData.linkedin}
                    </span>
                  )}

                </div>
              )}

            </div>

            {/* Professional Summary */}
            <section className="mt-7">

              <h2 className="text-lg font-bold border-b border-slate-300 pb-2">
                PROFESSIONAL SUMMARY
              </h2>

              <p className="mt-3 text-slate-700 leading-7">
                {resumeData.summary || generatedSummary}
              </p>

            </section>

            {/* Education */}
            <section className="mt-7">

              <h2 className="text-lg font-bold border-b border-slate-300 pb-2">
                EDUCATION
              </h2>

              <div className="mt-3">

                <p className="font-bold text-lg">
                  {resumeData.college || 'College / University'}
                </p>

                <p className="mt-1">
                  {branch}
                </p>

                <p className="mt-1 text-slate-700">
                  Year: {year} | CGPA: {cgpa}
                </p>

              </div>

            </section>

            {/* Technical Skills */}
            <section className="mt-7">

              <h2 className="text-lg font-bold border-b border-slate-300 pb-2">
                TECHNICAL SKILLS
              </h2>

              <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2">

                {completedSkills.length > 0 ? (
                  completedSkills.map((skill) => (
                    <p key={skill} className="text-slate-700">
                      • {skill}
                    </p>
                  ))
                ) : (
                  <p className="text-slate-500">
                    No skills added
                  </p>
                )}

              </div>

            </section>

            {/* Projects */}
            <section className="mt-7">

              <h2 className="text-lg font-bold border-b border-slate-300 pb-2">
                PROJECTS
              </h2>

              <div className="mt-3">

                <p className="font-bold">
                  CareerPath AI
                </p>

                <p className="text-slate-700 mt-1 leading-7">
                  {resumeData.projects}
                </p>

              </div>

            </section>

            {/* Achievements */}
            {resumeData.achievements.trim() && (
              <section className="mt-7">

                <h2 className="text-lg font-bold border-b border-slate-300 pb-2">
                  CERTIFICATIONS & ACHIEVEMENTS
                </h2>

                <p className="mt-3 text-slate-700 whitespace-pre-line">
                  {resumeData.achievements}
                </p>

              </section>
            )}

          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-8 no-print">

            <button
              onClick={() => setGenerated(false)}
              className="px-6 py-3 rounded-xl bg-slate-700 text-white font-semibold hover:bg-slate-800 transition"
            >
              ← Edit Resume
            </button>

            <button
              onClick={handlePrint}
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              🖨️ Print / Save as PDF
            </button>

          </div>

          {/* Print CSS */}
          <style>
            {`
              @media print {
                body {
                  background: white !important;
                }

                .no-print {
                  display: none !important;
                }

                #resume {
                  box-shadow: none !important;
                  border-radius: 0 !important;
                  margin: 0 !important;
                  padding: 30px !important;
                }
              }
            `}
          </style>

        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <p className="text-green-600 font-semibold mb-2">
            🎉 Career Ready
          </p>

          <h1 className="text-4xl font-bold text-slate-900">
            Build Your Resume 📄
          </h1>

          <p className="text-slate-600 mt-2">
            Create a professional resume using the skills you developed
            through CareerPath AI.
          </p>

        </div>

        <form
          onSubmit={handleGenerate}
          className="space-y-6"
        >

          {/* Personal Information */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <h2 className="text-xl font-bold text-slate-900 mb-5">
              👤 Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {/* Name */}
              <div>
                <label className="block font-semibold mb-2">
                  Full Name
                </label>

                <input
                  value={name}
                  readOnly
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold mb-2">
                  Email
                </label>

                <input
                  name="email"
                  value={resumeData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold mb-2">
                  Phone
                </label>

                <input
                  name="phone"
                  value={resumeData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+91 9876543210"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block font-semibold mb-2">
                  Location
                </label>

                <input
                  name="location"
                  value={resumeData.location}
                  onChange={handleChange}
                  placeholder="Guntur, Andhra Pradesh"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

            </div>
          </div>

          {/* Education */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <h2 className="text-xl font-bold text-slate-900 mb-5">
              🎓 Education
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {/* College */}
              <div>
                <label className="block font-semibold mb-2">
                  College / University
                </label>

                <input
                  name="college"
                  value={resumeData.college}
                  onChange={handleChange}
                  placeholder="Your college name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Branch */}
              <div>
                <label className="block font-semibold mb-2">
                  Branch
                </label>

                <input
                  value={branch}
                  readOnly
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50"
                />
              </div>

              {/* Year */}
              <div>
                <label className="block font-semibold mb-2">
                  Current Year
                </label>

                <input
                  value={year}
                  readOnly
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50"
                />
              </div>

              {/* CGPA */}
              <div>
                <label className="block font-semibold mb-2">
                  CGPA
                </label>

                <input
                  value={cgpa}
                  readOnly
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50"
                />
              </div>

            </div>
          </div>

          {/* Completed Skills */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <h2 className="text-xl font-bold text-slate-900 mb-4">
              🛠️ Your Completed Skills
            </h2>

            <p className="text-slate-600 mb-4">
              These skills were completed through your CareerPath AI
              learning journey.
            </p>

            {completedSkills.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-3">

                {completedSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-3"
                  >
                    <span className="text-green-600 font-bold">
                      ✓
                    </span>

                    <span className="font-semibold text-slate-800">
                      {skill}
                    </span>
                  </div>
                ))}

              </div>
            ) : (
              <p className="text-slate-500">
                No completed skills yet.
              </p>
            )}

          </div>

          {/* Professional Summary */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <h2 className="text-xl font-bold text-slate-900 mb-4">
              📝 Professional Summary
            </h2>

            <textarea
              name="summary"
              value={resumeData.summary}
              onChange={handleChange}
              placeholder={generatedSummary}
              rows="6"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <p className="text-sm text-indigo-600 mt-2">
              ✨ CareerPath AI generated this summary based on your profile.
              You can edit it if needed.
            </p>

          </div>

          {/* Projects */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <h2 className="text-xl font-bold text-slate-900 mb-4">
              🚀 Projects
            </h2>

            <textarea
              name="projects"
              value={resumeData.projects}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <p className="text-sm text-indigo-600 mt-2">
              ✨ CareerPath AI project is automatically added.
            </p>

          </div>

          {/* Certifications */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <h2 className="text-xl font-bold text-slate-900 mb-4">
              🏆 Certifications & Achievements
            </h2>

            <textarea
              name="achievements"
              value={resumeData.achievements}
              onChange={handleChange}
              placeholder="Add certifications, hackathons, awards, workshops, etc."
              rows="5"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

          </div>

          {/* Professional Links */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <h2 className="text-xl font-bold text-slate-900 mb-5">
              🔗 Professional Links
            </h2>

            <div className="space-y-5">

              {/* GitHub */}
              <div>
                <label className="block font-semibold mb-2">
                  GitHub
                </label>

                <input
                  name="github"
                  value={resumeData.github}
                  onChange={handleChange}
                  type="url"
                  placeholder="https://github.com/username"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block font-semibold mb-2">
                  LinkedIn
                </label>

                <input
                  name="linkedin"
                  value={resumeData.linkedin}
                  onChange={handleChange}
                  type="url"
                  placeholder="https://linkedin.com/in/username"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

            </div>

          </div>

          {/* Generate Resume */}
          <div className="text-center pb-10">

            <button
              type="submit"
              className="px-10 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition shadow-lg"
            >
              Generate My Resume →
            </button>

          </div>

        </form>

      </div>
    </div>
  )
}

export default ResumeBuilder