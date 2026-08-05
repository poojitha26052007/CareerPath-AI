import { useState } from 'react'

function ResumeBuilder({ studentData, completedSkills }) {
  const [resumeGenerated, setResumeGenerated] = useState(false)

  const [resumeData, setResumeData] = useState({
    email: '',
    phone: '',
    location: 'Guntur, Andhra Pradesh',
    certifications: '',
    github: '',
    linkedin: '',
  })

  const updateField = (field, value) => {
    setResumeData((previous) => ({
      ...previous,
      [field]: value,
    }))
  }

  const generateResume = () => {
    setResumeGenerated(true)

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 100)
  }

  const printResume = () => {
    window.print()
  }

  const branch = studentData?.branch || 'AIML'
  const year = studentData?.year || '2'
  const cgpa = studentData?.cgpa || '8.42'
  const name = studentData?.name || 'Student'
  const interest = studentData?.interests || 'Artificial Intelligence'

  const professionalSummary = `Motivated ${branch} student pursuing Year ${year}, with a strong interest in Artificial Intelligence and Machine Learning. Currently developing technical skills through hands-on learning and project development, with a passion for building real-world technology solutions and becoming industry ready.`

  const projectDescription =
    'CareerPath AI is an AI-powered student career guidance platform that analyzes student profiles, identifies skill gaps, recommends suitable career paths, provides a personalized learning roadmap, tracks skill completion, and helps students build professional resumes.'

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 md:px-6">

      <div className="max-w-5xl mx-auto">

        {!resumeGenerated ? (
          <>
            {/* Header */}
            <div className="mb-8">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="mb-5 text-indigo-600 font-semibold hover:text-indigo-800"
              >
                ← Back to Dashboard
              </button>

              <div className="text-center">
                <div className="text-5xl mb-3">🎉</div>

                <h1 className="text-4xl font-bold text-slate-900">
                  Career Ready
                </h1>

                <p className="text-slate-600 mt-2 text-lg">
                  Build Your Resume 📄
                </p>

                <p className="text-slate-500 mt-1">
                  Create a professional resume using the skills you developed
                  through CareerPath AI.
                </p>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-900 mb-5">
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-100 text-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={resumeData.email}
                    onChange={(e) =>
                      updateField('email', e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={resumeData.phone}
                    onChange={(e) =>
                      updateField('phone', e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Location
                  </label>

                  <input
                    type="text"
                    value={resumeData.location}
                    onChange={(e) =>
                      updateField('location', e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-900 mb-5">
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-100"
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-100"
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-100"
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-100"
                  />
                </div>

              </div>
            </div>

            {/* Completed Skills */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                🛠️ Your Completed Skills
              </h2>

              <p className="text-slate-500 mb-5">
                These skills were completed through your CareerPath AI
                learning journey.
              </p>

              <div className="grid md:grid-cols-2 gap-3">

                {completedSkills.length > 0 ? (
                  completedSkills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl"
                    >
                      <span className="text-green-600 font-bold">
                        ✓
                      </span>

                      <span className="font-semibold text-slate-800">
                        {skill}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-500">
                    No completed skills yet.
                  </p>
                )}

              </div>
            </div>

            {/* Professional Summary */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                📝 Professional Summary
              </h2>

              <p className="text-slate-700 leading-7 bg-slate-50 rounded-xl p-5">
                {professionalSummary}
              </p>

              <p className="text-sm text-indigo-600 mt-3">
                ✨ CareerPath AI generated this summary based on your
                profile.
              </p>

            </div>

            {/* Projects */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                🚀 Projects
              </h2>

              <div className="border border-indigo-200 bg-indigo-50 rounded-xl p-5">

                <h3 className="text-xl font-bold text-indigo-900">
                  CareerPath AI
                </h3>

                <p className="text-slate-700 mt-3 leading-7">
                  {projectDescription}
                </p>

              </div>

            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                🏆 Certifications & Achievements
              </h2>

              <textarea
                rows="4"
                placeholder="Example: AI Workshop, Hackathon 2026, Python Certification..."
                value={resumeData.certifications}
                onChange={(e) =>
                  updateField('certifications', e.target.value)
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

            {/* Professional Links */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                🔗 Professional Links
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    GitHub
                  </label>

                  <input
                    type="url"
                    placeholder="https://github.com/yourusername"
                    value={resumeData.github}
                    onChange={(e) =>
                      updateField('github', e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    LinkedIn
                  </label>

                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourusername"
                    value={resumeData.linkedin}
                    onChange={(e) =>
                      updateField('linkedin', e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

              </div>
            </div>

            {/* Generate */}
            <div className="text-center pb-10">

              <button
                type="button"
                onClick={generateResume}
                className="px-10 py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition shadow-lg"
              >
                Generate My Resume →
              </button>

            </div>
          </>
        ) : (
          <>
            {/* Generated Resume */}
            <div className="flex justify-between items-center mb-6 print:hidden">

              <button
                type="button"
                onClick={() => setResumeGenerated(false)}
                className="text-indigo-600 font-semibold hover:text-indigo-800"
              >
                ← Edit Resume
              </button>

              <button
                type="button"
                onClick={printResume}
                className="px-5 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800"
              >
                🖨️ Print / Save as PDF
              </button>

            </div>

            <div
              id="resume"
              className="bg-white rounded-none md:rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12 print:shadow-none print:border-none"
            >

              {/* Name */}
              <div className="text-center border-b border-slate-300 pb-6">

                <h1 className="text-4xl font-bold text-slate-900">
                  {name}
                </h1>

                <div className="flex flex-wrap justify-center gap-2 text-slate-600 mt-3">

                  {resumeData.email && (
                    <span>{resumeData.email}</span>
                  )}

                  {resumeData.phone && (
                    <>
                      <span>•</span>
                      <span>{resumeData.phone}</span>
                    </>
                  )}

                  {resumeData.location && (
                    <>
                      <span>•</span>
                      <span>{resumeData.location}</span>
                    </>
                  )}

                </div>

                {(resumeData.github || resumeData.linkedin) && (
                  <div className="flex flex-wrap justify-center gap-4 mt-3 text-sm">

                    {resumeData.github && (
                      <span className="text-indigo-600">
                        GitHub: {resumeData.github}
                      </span>
                    )}

                    {resumeData.linkedin && (
                      <span className="text-indigo-600">
                        LinkedIn: {resumeData.linkedin}
                      </span>
                    )}

                  </div>
                )}

              </div>

              {/* Summary */}
              <section className="mt-7">

                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-300 pb-2">
                  PROFESSIONAL SUMMARY
                </h2>

                <p className="text-slate-700 leading-7 mt-3">
                  {professionalSummary}
                </p>

              </section>

              {/* Education */}
              <section className="mt-7">

                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-300 pb-2">
                  EDUCATION
                </h2>

                <div className="mt-3">

                  <h3 className="font-bold text-slate-900">
                    Vignan University
                  </h3>

                  <p className="text-slate-700">
                    {branch}
                  </p>

                  <p className="text-slate-600">
                    Year: {year} | CGPA: {cgpa}
                  </p>

                </div>

              </section>

              {/* Skills */}
              <section className="mt-7">

                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-300 pb-2">
                  TECHNICAL SKILLS
                </h2>

                <div className="grid md:grid-cols-2 gap-2 mt-3">

                  {completedSkills.map((skill) => (
                    <div
                      key={skill}
                      className="text-slate-700"
                    >
                      • {skill}
                    </div>
                  ))}

                </div>

              </section>

              {/* Projects */}
              <section className="mt-7">

                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-300 pb-2">
                  PROJECTS
                </h2>

                <div className="mt-3">

                  <h3 className="font-bold text-slate-900">
                    CareerPath AI
                  </h3>

                  <p className="text-slate-700 leading-7 mt-1">
                    {projectDescription}
                  </p>

                </div>

              </section>

              {/* Certifications */}
              {resumeData.certifications.trim() && (
                <section className="mt-7">

                  <h2 className="text-xl font-bold text-slate-900 border-b border-slate-300 pb-2">
                    CERTIFICATIONS & ACHIEVEMENTS
                  </h2>

                  <p className="text-slate-700 whitespace-pre-line mt-3">
                    {resumeData.certifications}
                  </p>

                </section>
              )}

            </div>
          </>
        )}

      </div>

      {/* Print CSS */}
      <style>
        {`
          @media print {
            body {
              background: white !important;
            }

            #resume {
              width: 100%;
              margin: 0;
              padding: 20px;
            }

            .print\\:hidden {
              display: none !important;
            }
          }
        `}
      </style>

    </div>
  )
}

export default ResumeBuilder