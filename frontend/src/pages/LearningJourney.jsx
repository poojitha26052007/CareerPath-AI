import { useState } from 'react'

function LearningJourney({ onComplete, onBack }) {
  const [completedSkills, setCompletedSkills] = useState([])

  const skills = [
    {
      id: 1,
      name: 'Python Fundamentals',
      icon: '🐍',
      description:
        'Learn Python basics, variables, loops, functions and problem solving.',
      duration: '3 weeks',
    },
    {
      id: 2,
      name: 'SQL',
      icon: '🗄️',
      description:
        'Learn databases, SQL queries, filtering, joins and data management.',
      duration: '2 weeks',
    },
    {
      id: 3,
      name: 'Git & GitHub',
      icon: '🔧',
      description:
        'Learn version control and how to manage your projects with GitHub.',
      duration: '1 week',
    },
    {
      id: 4,
      name: 'NumPy',
      icon: '🔢',
      description:
        'Learn numerical computing and arrays for data science.',
      duration: '1 week',
    },
    {
      id: 5,
      name: 'Pandas',
      icon: '🐼',
      description:
        'Learn data manipulation, cleaning and analysis using Pandas.',
      duration: '2 weeks',
    },
    {
      id: 6,
      name: 'Statistics',
      icon: '📊',
      description:
        'Learn probability, statistics and concepts needed for AI and data science.',
      duration: '3 weeks',
    },
    {
      id: 7,
      name: 'Machine Learning',
      icon: '🤖',
      description:
        'Learn supervised learning, unsupervised learning and model evaluation.',
      duration: '4 weeks',
    },
    {
      id: 8,
      name: 'AI Project',
      icon: '🚀',
      description:
        'Build a real-world AI project and add it to your portfolio.',
      duration: '4 weeks',
    },
  ]

  const toggleSkill = (skillId) => {
    setCompletedSkills((previousSkills) => {
      if (previousSkills.includes(skillId)) {
        return previousSkills.filter((id) => id !== skillId)
      }

      return [...previousSkills, skillId]
    })
  }

  const progress = Math.round(
    (completedSkills.length / skills.length) * 100
  )

  const handleResume = () => {
    const completedSkillNames = skills
      .filter((skill) => completedSkills.includes(skill.id))
      .map((skill) => skill.name)

    onComplete(completedSkillNames)
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
            Step 3 of 3
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Your Learning Journey 📚
          </h1>

          <p className="text-slate-600 mt-3">
            Learn the recommended skills step by step and track your progress.
          </p>

        </div>

        {/* Progress Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-sm">

          <div className="flex items-center justify-between mb-4">

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Overall Progress
              </h2>

              <p className="text-slate-500 text-sm mt-1">
                {completedSkills.length} of {skills.length} skills completed
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

        {/* Skills */}
        <div className="space-y-5">

          {skills.map((skill, index) => {

            const completed = completedSkills.includes(skill.id)

            return (
              <div
                key={skill.id}
                className={`rounded-2xl border p-6 transition ${
                  completed
                    ? 'border-green-300 bg-green-50'
                    : 'border-slate-200 bg-white'
                }`}
              >

                <div className="flex flex-col md:flex-row md:items-center gap-5">

                  {/* Number + Icon */}
                  <div className="flex items-center gap-4">

                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                        completed
                          ? 'bg-green-600 text-white'
                          : 'bg-indigo-100 text-indigo-700'
                      }`}
                    >
                      {completed ? '✓' : index + 1}
                    </div>

                    <div className="text-4xl">
                      {skill.icon}
                    </div>

                  </div>

                  {/* Information */}
                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-3">

                      <h3 className="text-xl font-bold text-slate-900">
                        {skill.name}
                      </h3>

                      {completed && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          Completed
                        </span>
                      )}

                    </div>

                    <p className="text-slate-600 mt-2">
                      {skill.description}
                    </p>

                    <p className="text-sm text-indigo-600 font-medium mt-2">
                      ⏱ Estimated time: {skill.duration}
                    </p>

                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    onClick={() => toggleSkill(skill.id)}
                    className={`px-5 py-3 rounded-xl font-semibold transition whitespace-nowrap ${
                      completed
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    {completed
                      ? '✓ Completed'
                      : 'Mark as Completed'}
                  </button>

                </div>

              </div>
            )
          })}

        </div>

        {/* Congratulations */}
        {progress === 100 && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-8 text-center">

            <div className="text-5xl mb-4">
              🎉
            </div>

            <h2 className="text-2xl font-bold text-green-800">
              Congratulations!
            </h2>

            <p className="text-green-700 mt-2">
              You have completed your recommended learning journey.
            </p>

            <button
              type="button"
              onClick={handleResume}
              className="mt-6 px-8 py-4 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Build My Resume →
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