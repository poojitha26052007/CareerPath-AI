function CareerAnalysis({ studentData, onContinue, onBack }) {
  const careers = [
    {
      title: 'AI / ML Engineer',
      match: 82,
      description:
        'Build intelligent systems using Artificial Intelligence and Machine Learning.',
      skills: [
        'Python',
        'SQL',
        'NumPy',
        'Pandas',
        'Statistics',
        'Machine Learning',
      ],
    },
    {
      title: 'Data Scientist',
      match: 74,
      description:
        'Analyze data and build machine learning models to solve real-world problems.',
      skills: [
        'Python',
        'SQL',
        'Statistics',
        'Pandas',
        'Machine Learning',
      ],
    },
    {
      title: 'Data Analyst',
      match: 68,
      description:
        'Analyze data and create useful business insights using analytics and visualization.',
      skills: [
        'SQL',
        'Excel',
        'Python',
        'Power BI',
        'Statistics',
      ],
    },
  ]

  const requiredSkills = [
    'Python',
    'SQL',
    'NumPy',
    'Pandas',
    'Statistics',
    'Machine Learning',
    'Git & GitHub',
  ]

  const currentSkills = studentData?.skills
    ? studentData.skills
        .split(',')
        .map((skill) => skill.trim().toLowerCase())
        .filter(Boolean)
    : []

  const missingSkills = requiredSkills.filter(
    (skill) => !currentSkills.includes(skill.toLowerCase())
  )

  const displayName = studentData?.name || 'Student'
  const branch = studentData?.branch || 'AIML'
  const year = studentData?.year || '2nd Year'
  const interest = studentData?.interests || 'AI'

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6">

      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          type="button"
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-semibold transition"
        >
          ← Back to Dashboard
        </button>

        {/* Header */}
        <div className="mb-8">

          <p className="text-indigo-600 font-semibold mb-2">
            Step 2 of 3
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Your Career Analysis 🎯
          </h1>

          <p className="text-slate-600 mt-3 max-w-2xl">
            We analyzed your profile and identified career paths and skills
            that can help you become industry ready.
          </p>

        </div>

        {/* Profile Summary */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8 shadow-sm">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl">
              {displayName
                .split(' ')
                .map((word) => word[0])
                .slice(0, 2)
                .join('')
                .toUpperCase()}
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {displayName}
              </h2>

              <p className="text-slate-500">
                Your personalized career analysis
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">
                Branch
              </p>

              <p className="font-bold text-slate-900 mt-1">
                {branch}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">
                Current Year
              </p>

              <p className="font-bold text-slate-900 mt-1">
                {year}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">
                Interest
              </p>

              <p className="font-bold text-slate-900 mt-1 capitalize">
                {interest}
              </p>
            </div>

          </div>

        </div>

        {/* Career Paths */}
        <section className="mb-10">

          <div className="flex items-center justify-between mb-5">

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                🎯 Recommended Career Paths
              </h2>

              <p className="text-slate-500 mt-1">
                Based on your profile and interests
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {careers.map((career, index) => (

              <div
                key={career.title}
                className={`bg-white rounded-2xl border p-6 shadow-sm ${
                  index === 0
                    ? 'border-indigo-300 ring-1 ring-indigo-100'
                    : 'border-slate-200'
                }`}
              >

                {index === 0 && (
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-4">
                    BEST MATCH
                  </span>
                )}

                <div className="flex items-start justify-between gap-3">

                  <h3 className="text-xl font-bold text-slate-900">
                    {career.title}
                  </h3>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-indigo-600">
                      {career.match}%
                    </p>

                    <p className="text-xs text-slate-500">
                      Match
                    </p>
                  </div>

                </div>

                <div className="mt-4 w-full h-2 bg-slate-200 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{
                      width: `${career.match}%`,
                    }}
                  />

                </div>

                <p className="text-slate-600 mt-5 leading-relaxed">
                  {career.description}
                </p>

                <div className="mt-5">

                  <p className="font-semibold text-slate-900 mb-3">
                    Required Skills
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {career.skills.map((skill) => (

                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Missing Skills */}
        <section className="mb-10">

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-2xl">
                ❌
              </div>

              <div className="flex-1">

                <h2 className="text-2xl font-bold text-slate-900">
                  Skills You Need to Learn
                </h2>

                <p className="text-slate-500 mt-1">
                  These skills can help you move from your current level
                  toward your recommended career path.
                </p>

              </div>

            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

              {missingSkills.map((skill) => (

                <div
                  key={skill}
                  className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3"
                >
                  <span className="text-red-500">
                    ●
                  </span>

                  <span className="font-medium text-slate-800">
                    {skill}
                  </span>

                  <span className="ml-auto text-xs text-red-600 font-semibold">
                    Not learned
                  </span>
                </div>

              ))}

            </div>

            {missingSkills.length === 0 && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 font-semibold">
                🎉 Great! You have already learned all the recommended skills.
              </div>
            )}

          </div>

        </section>

        {/* Learning Roadmap */}
        <section className="mb-10">

          <h2 className="text-2xl font-bold text-slate-900">
            📚 Your Learning Roadmap
          </h2>

          <p className="text-slate-500 mt-1 mb-5">
            Follow this roadmap step by step to become career ready.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {[
              ['Month 1', 'Python Fundamentals'],
              ['Month 2', 'SQL'],
              ['Month 3', 'Git & GitHub'],
              ['Month 4', 'NumPy'],
              ['Month 5', 'Pandas'],
              ['Month 6', 'Statistics'],
              ['Month 7', 'Machine Learning'],
              ['Month 8', 'Build a Real-World Project'],
            ].map(([month, skill], index) => (

              <div
                key={month}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
              >

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <p className="text-sm font-semibold text-indigo-600">
                    {month}
                  </p>

                </div>

                <h3 className="font-bold text-slate-900 mt-4">
                  {skill}
                </h3>

              </div>

            ))}

          </div>

        </section>

        {/* Continue Button */}
        <div className="bg-indigo-600 rounded-2xl p-6 sm:p-8 text-white">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <h2 className="text-2xl font-bold">
                Ready to start learning? 🚀
              </h2>

              <p className="text-indigo-100 mt-2">
                Follow your personalized roadmap and track your progress.
              </p>

            </div>

            <button
              type="button"
              onClick={onContinue}
              className="bg-white text-indigo-700 px-7 py-3.5 rounded-xl font-bold hover:bg-indigo-50 transition whitespace-nowrap"
            >
              Start My Learning Journey →
            </button>

          </div>

        </div>

        {/* Footer */}
        <footer className="text-center text-slate-500 text-sm mt-10">
          © 2026 CareerPath AI • Learn • Build • Grow 🚀
        </footer>

      </div>

    </div>
  )
}

export default CareerAnalysis