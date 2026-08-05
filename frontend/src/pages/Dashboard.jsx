function Dashboard({
  studentData = {},
  completedSkills = [],
  onCareerAnalysis,
  onLearningJourney,
  onResume,
}) {
  const name = studentData?.name || 'Student'
  const branch = studentData?.branch || 'AIML'
  const year = studentData?.year || '2'
  const cgpa = studentData?.cgpa || 'N/A'

  const interest =
    studentData?.interests ||
    studentData?.interest ||
    'AI'

  const careerGoal =
    studentData?.careerGoal &&
    studentData.careerGoal !== "I don't know yet" &&
    studentData.careerGoal !== 'Not Sure'
      ? studentData.careerGoal
      : 'AI / ML Engineer'

  const totalSkills = 8

  const completedCount = Array.isArray(completedSkills)
    ? completedSkills.length
    : 0

  const remainingSkills = totalSkills - completedCount

  const progress = Math.round(
    (completedCount / totalSkills) * 100
  )

  const skills = [
    'Python Fundamentals',
    'SQL',
    'Git & GitHub',
    'NumPy',
    'Pandas',
    'Statistics',
    'Machine Learning',
    'AI Project',
  ]

  const currentLearning =
    skills.find(
      (skill) => !completedSkills.includes(skill)
    ) || 'AI Project'

  const formatBranch = (value) => {
    if (
      value === 'Computer Science & Engineering' ||
      value === 'Computer Science'
    ) {
      return 'CSE'
    }

    return value
  }

  const formatInterest = (value) => {
    return String(value)
      .replace(/\b\w/g, (char) => char.toUpperCase())
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-xl font-bold">
              CAREERPATH AI
            </h1>

            <p className="text-xs text-slate-500 mt-1">
              Your personalized career journey
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">
            {name
              .split(' ')
              .map((word) => word[0])
              .join('')
              .slice(0, 2)
              .toUpperCase()}
          </div>

        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-8">

        {/* WELCOME */}
        <section className="mb-8">

          <h2 className="text-3xl font-bold">
            Welcome back, {name} 👋
          </h2>

          <p className="text-slate-500 mt-2">
            Continue your journey toward becoming industry ready.
          </p>

        </section>

        {/* CAREER GOAL */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-7 mb-6">

          <p className="text-indigo-100 text-sm uppercase font-semibold">
            Your Career Goal
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <h3 className="text-3xl font-bold mt-2">
                {careerGoal}
              </h3>

              <p className="text-indigo-100 mt-2">
                Your top recommended career path based on your profile.
              </p>

            </div>

            <div className="bg-white/15 rounded-2xl px-7 py-5 text-center">

              <div className="text-4xl font-bold">
                82%
              </div>

              <div className="text-sm text-indigo-100">
                Match
              </div>

            </div>

          </div>

        </section>

        {/* STATS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          {/* Career Match */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <div className="text-3xl">
              🎯
            </div>

            <p className="text-sm text-slate-500 mt-4">
              Career Match
            </p>

            <h3 className="text-2xl font-bold mt-1">
              82%
            </h3>

            <p className="text-sm text-slate-600 mt-1">
              {careerGoal}
            </p>

          </div>

          {/* Skills */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <div className="text-3xl">
              📚
            </div>

            <p className="text-sm text-slate-500 mt-4">
              Skills Completed
            </p>

            <h3 className="text-2xl font-bold mt-1">
              {completedCount} / {totalSkills}
            </h3>

            <p className="text-sm text-slate-600 mt-1">
              {remainingSkills === 0
                ? 'All skills completed!'
                : `${remainingSkills} skills remaining`}
            </p>

          </div>

          {/* Progress */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <div className="text-3xl">
              🚀
            </div>

            <p className="text-sm text-slate-500 mt-4">
              Learning Progress
            </p>

            <h3 className="text-2xl font-bold mt-1">
              {progress}%
            </h3>

            <p className="text-sm text-slate-600 mt-1">
              {progress === 100
                ? 'Career ready!'
                : 'Keep going!'}
            </p>

          </div>

        </section>

        {/* OVERALL PROGRESS */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">

          <div className="flex justify-between mb-3">

            <div>
              <h3 className="text-xl font-bold">
                Overall Learning Progress
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                {completedCount} of {totalSkills} skills completed
              </p>
            </div>

            <span className="text-indigo-600 font-bold">
              {progress}%
            </span>

          </div>

          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">

            <div
              className="h-full bg-indigo-600 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </section>

        {/* CURRENT LEARNING */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-sm text-indigo-600 font-semibold uppercase">
                Current Learning
              </p>

              <h3 className="text-2xl font-bold mt-1">
                Continue Learning 📚
              </h3>

            </div>

            <div className="text-3xl">
              🤖
            </div>

          </div>

          <div className="bg-slate-50 rounded-xl p-5 mt-6">

            <h4 className="text-xl font-bold">
              {currentLearning}
            </h4>

            <p className="text-slate-600 mt-2">
              Complete your {currentLearning} skills and move one
              step closer to your career goal.
            </p>

            <div className="mt-5">

              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>

                <span className="font-semibold">
                  {progress}%
                </span>
              </div>

              <div className="w-full h-2 bg-slate-200 rounded-full">

                <div
                  className="h-full bg-indigo-600 rounded-full transition-all"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>

            <button
              onClick={onLearningJourney}
              className="mt-5 px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
            >
              Continue →
            </button>

          </div>

        </section>

        {/* QUICK ACTIONS */}
        <section className="mb-8">

          <h3 className="text-xl font-bold mb-5">
            Quick Actions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Career Analysis */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6">

              <div className="text-3xl">
                🎯
              </div>

              <h4 className="text-xl font-bold mt-4">
                Career Analysis
              </h4>

              <p className="text-sm text-slate-500 mt-2">
                Explore your recommended career paths, match scores
                and required skills.
              </p>

              <button
                onClick={onCareerAnalysis}
                className="mt-5 text-indigo-600 font-semibold"
              >
                Explore →
              </button>

            </div>

            {/* Learning */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6">

              <div className="text-3xl">
                📚
              </div>

              <h4 className="text-xl font-bold mt-4">
                Learning Journey
              </h4>

              <p className="text-sm text-slate-500 mt-2">
                Follow your personalized roadmap and complete
                important skills.
              </p>

              <button
                onClick={onLearningJourney}
                className="mt-5 text-indigo-600 font-semibold"
              >
                Continue →
              </button>

            </div>

            {/* Resume */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6">

              <div className="text-3xl">
                📄
              </div>

              <h4 className="text-xl font-bold mt-4">
                Build Resume
              </h4>

              <p className="text-sm text-slate-500 mt-2">
                Create a professional resume using your completed
                skills and projects.
              </p>

              <button
                onClick={onResume}
                className="mt-5 text-indigo-600 font-semibold"
              >
                View Resume →
              </button>

            </div>

          </div>

        </section>

        {/* CAREER READY */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">

          <div className="flex gap-4">

            <div className="text-3xl">
              🎉
            </div>

            <div>

              <p className="text-sm font-bold text-emerald-700 uppercase">
                Career Ready
              </p>

              <h3 className="text-xl font-bold mt-1">
                Your Resume is Ready
              </h3>

              <p className="text-sm text-slate-600 mt-2">
                Your skills and CareerPath AI project have been
                added to your professional resume.
              </p>

              <button
                onClick={onResume}
                className="mt-4 px-5 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700"
              >
                View Resume →
              </button>

            </div>

          </div>

        </section>

        {/* PROFILE */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6">

          <h3 className="text-xl font-bold mb-6">
            Your Profile
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-slate-500">
                Name
              </p>

              <p className="font-semibold mt-1">
                {name}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Branch
              </p>

              <p className="font-semibold mt-1">
                {formatBranch(branch)}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Year
              </p>

              <p className="font-semibold mt-1">
                {year}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Interest
              </p>

              <p className="font-semibold mt-1">
                {formatInterest(interest)}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                CGPA
              </p>

              <p className="font-semibold mt-1">
                {cgpa}
              </p>
            </div>

          </div>

        </section>

      </main>

      <footer className="text-center py-8 text-sm text-slate-500">
        © 2026 CareerPath AI
        <br />
        Learn • Build • Grow 🚀
      </footer>

    </div>
  )
}

export default Dashboard