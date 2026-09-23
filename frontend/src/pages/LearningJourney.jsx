function LearningJourney({
  studentData = {},
  careerEvaluation = null,
  completedSkills = [],
  onToggleSkill,
  onComplete,
  onBack,
}) {
  const primary = careerEvaluation?.primary || {
    title: studentData?.careerGoal || 'Software Developer',
    icon: '💻',
    roadmap: [],
  }

  const skills = (primary.roadmap && primary.roadmap.length > 0)
    ? primary.roadmap
    : [
        { id: 1, name: 'Core Programming', icon: '💻', duration: '3 weeks', description: 'Core programming logic and problem solving.' },
        { id: 2, name: 'Data Structures', icon: '⚡', duration: '4 weeks', description: 'Arrays, Lists, Trees, and Algorithms.' },
        { id: 3, name: 'Databases & SQL', icon: '🗄️', duration: '2 weeks', description: 'Database design and querying.' },
        { id: 4, name: 'Git & GitHub', icon: '🔧', duration: '1 week', description: 'Version control and collaboration.' },
        { id: 5, name: 'API Development', icon: '📐', duration: '3 weeks', description: 'REST APIs and client-server architecture.' },
        { id: 6, name: 'System Architecture', icon: '🏗️', duration: '2 weeks', description: 'Scalability and clean code.' },
        { id: 7, name: 'Testing & QA', icon: '🧪', duration: '2 weeks', description: 'Unit testing and debugging.' },
        { id: 8, name: 'Capstone Project', icon: '🚀', duration: '4 weeks', description: 'Production-ready software project.' },
      ]

  const activeCompletedSkills = skills.filter((skill) =>
    completedSkills.includes(skill.name)
  )
  const completedCount = Math.min(activeCompletedSkills.length, skills.length)
  const progress = Math.min(
    100,
    Math.round((completedCount / skills.length) * 100)
  )

  const handleToggle = (skillName) => {
    if (onToggleSkill) {
      onToggleSkill(skillName)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6">

      <div className="max-w-5xl mx-auto">

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
            Step 3 of 3 • Practical Skill Roadmap
          </p>

          <div className="flex items-center gap-3">
            <span className="text-3xl">{primary.icon || '📚'}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
              {primary.title} Learning Journey
            </h1>
          </div>

          <p className="text-slate-600 mt-3 text-lg">
            Complete the curated skills step by step. Toggling items updates your live match score and resume in real-time.
          </p>

        </div>

        {/* Progress Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-sm">

          <div className="flex items-center justify-between mb-4">

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Roadmap Completion Progress
              </h2>

              <p className="text-slate-500 text-sm mt-1">
                {completedCount} of {skills.length} skills completed for {primary.title}
              </p>
            </div>

            <div className="text-3xl font-bold text-indigo-600">
              {progress}%
            </div>

          </div>

          <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">

            <div
              className="h-full bg-indigo-600 rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* Skills List */}
        <div className="space-y-4">

          {skills.map((skill, index) => {
            const completed = completedSkills.includes(skill.name)

            return (
              <div
                key={skill.id || skill.name}
                className={`rounded-2xl border p-6 transition-all ${
                  completed
                    ? 'border-emerald-300 bg-emerald-50/70 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-indigo-200 shadow-sm'
                }`}
              >

                <div className="flex flex-col md:flex-row md:items-center gap-5">

                  {/* Number + Icon */}
                  <div className="flex items-center gap-4">

                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        completed
                          ? 'bg-emerald-600 text-white'
                          : 'bg-indigo-100 text-indigo-700'
                      }`}
                    >
                      {completed ? '✓' : index + 1}
                    </div>

                    <div className="text-4xl">
                      {skill.icon || '📌'}
                    </div>

                  </div>

                  {/* Information */}
                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-3">

                      <h3 className="text-xl font-bold text-slate-900">
                        {skill.name}
                      </h3>

                      {completed ? (
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
                          ✓ Completed
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                          Month {index + 1}
                        </span>
                      )}

                    </div>

                    <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                      {skill.description}
                    </p>

                    {skill.duration && (
                      <p className="text-xs text-indigo-600 font-medium mt-2">
                        ⏱ Estimated time: {skill.duration}
                      </p>
                    )}

                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    onClick={() => handleToggle(skill.name)}
                    className={`px-5 py-3 rounded-xl font-semibold transition whitespace-nowrap text-sm ${
                      completed
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    {completed ? '✓ Completed' : 'Mark as Completed'}
                  </button>

                </div>

              </div>
            )
          })}

        </div>

        {/* Completion Celebration Card */}
        {progress === 100 && (
          <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center shadow-md">

            <div className="text-5xl mb-4">
              🎉
            </div>

            <h2 className="text-2xl font-bold text-emerald-900">
              Outstanding Achievement!
            </h2>

            <p className="text-emerald-700 mt-2 max-w-xl mx-auto">
              You have completed all 8 recommended skills in your {primary.title} learning roadmap! You are now industry ready.
            </p>

            <button
              type="button"
              onClick={onComplete}
              className="mt-6 px-8 py-4 rounded-xl bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 transition shadow-lg inline-flex items-center gap-2"
            >
              Build & Download My Resume →
            </button>

          </div>
        )}

        {/* Footer */}
        <footer className="text-center text-slate-500 text-sm mt-10">
          © 2026 CareerPath AI • Learn • Build • Grow 🚀
        </footer>

      </div>

    </div>
  )
}

export default LearningJourney