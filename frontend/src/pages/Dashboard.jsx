function Dashboard({
  studentData = {},
  completedSkills = [],
  careerEvaluation = null,
  onNavigate,
  onEditProfile,
}) {
  // =========================
  // NAVIGATION HANDLERS
  // =========================

  const onCareerAnalysis = () => {
    onNavigate?.('careerAnalysis')
  }

  const onLearningJourney = () => {
    onNavigate?.('learningJourney')
  }

  const onResume = () => {
    onNavigate?.('resumeBuilder')
  }

  // =========================
  // STUDENT DATA
  // =========================

  const name =
    studentData?.name ||
    studentData?.fullName ||
    'Student'

  const branch =
    studentData?.branch || 'CSE'

  const year =
    studentData?.year ||
    studentData?.currentYear ||
    '2'

  const cgpa =
    studentData?.cgpa || 'N/A'

  // =========================
  // SAFE INTEREST HANDLING
  // =========================

  const rawInterest =
    studentData?.interests ??
    studentData?.interest ??
    'Technology'

  // Convert array -> string
  // Convert anything else -> string
  const interest = Array.isArray(rawInterest)
    ? rawInterest
      .map((item) => String(item ?? ''))
      .filter(Boolean)
      .join(', ')
    : String(rawInterest ?? 'Technology')

  // =========================
  // PRIMARY CAREER
  // =========================

  const primaryCareer =
    careerEvaluation?.primary || {
      title:
        studentData?.careerGoal ||
        'Software Developer',

      icon: '🎯',

      matchPercentage: 0,

      scoreBreakdown: {
        skillScore: 0,
        academicScore: 0,
        interestScore: 0,
        projectScore: 0,
      },

      roadmap: [],
    }

  const careerGoal =
    primaryCareer.title

  const matchPercentage =
    primaryCareer.matchPercentage ?? 0

  const roadmapSkills =
    (Array.isArray(primaryCareer.roadmap)
      ? primaryCareer.roadmap
      : []
    )
      .map((item) => {
        if (typeof item === 'string') {
          return item
        }

        return item?.name || ''
      })
      .filter(Boolean)

  const totalSkills =
    roadmapSkills.length > 0
      ? roadmapSkills.length
      : 8

  // =========================
  // COMPLETED SKILLS
  // =========================

  const validCompletedSkills =
    roadmapSkills.filter(
      (skillName) =>
        Array.isArray(completedSkills) &&
        completedSkills.includes(skillName)
    )

  const completedCount =
    Math.min(
      validCompletedSkills.length,
      totalSkills
    )

  const remainingSkills =
    Math.max(
      0,
      totalSkills - completedCount
    )

  // =========================
  // LEARNING PROGRESS
  // =========================

  const progress =
    totalSkills > 0
      ? Math.min(
        100,
        Math.round(
          (completedCount / totalSkills) * 100
        )
      )
      : 0

  const currentLearning =
    roadmapSkills.find(
      (skill) =>
        !validCompletedSkills.includes(skill)
    ) ||
    roadmapSkills[
    roadmapSkills.length - 1
    ] ||
    'Capstone Project'

  // =========================
  // SAFE STRING HELPER
  // =========================

  const safeLower = (value) => {
    if (Array.isArray(value)) {
      return value
        .map((item) => String(item ?? ''))
        .join(' ')
        .toLowerCase()
    }

    if (
      value !== null &&
      typeof value === 'object'
    ) {
      return String(value).toLowerCase()
    }

    return String(value ?? '').toLowerCase()
  }

  // =========================
  // FORMAT HELPERS
  // =========================

  const formatBranch = (value) => {
    if (
      value ===
      'Computer Science & Engineering' ||
      value === 'Computer Science'
    ) {
      return 'CSE'
    }

    return value
  }

  const formatInterest = (value) => {
    if (!value) {
      return 'Technology'
    }

    // IMPORTANT:
    // Handle array safely before String processing
    let str = Array.isArray(value)
      ? value
        .map((item) => String(item ?? ''))
        .filter(Boolean)
        .join(', ')
      : String(value)

    str = str.trim()

    if (!str) {
      return 'Technology'
    }

    // Handle doubled strings
    if (
      str.length >= 4 &&
      str.length % 2 === 0
    ) {
      const half =
        str.slice(
          0,
          str.length / 2
        )

      if (half + half === str) {
        str = half
      }
    }

    const parts =
      str
        .split(/[,;\n/]+/)
        .map(
          (item) =>
            item.trim()
        )
        .filter(Boolean)

    if (parts.length === 0) {
      return 'Technology'
    }

    const unique = []
    const seen = new Set()

    for (let part of parts) {
      if (
        part.length >= 4 &&
        part.length % 2 === 0
      ) {
        const half =
          part.slice(
            0,
            part.length / 2
          )

        if (half + half === part) {
          part = half
        }
      }

      const formatted =
        part.replace(
          /\b\w/g,
          (c) =>
            c.toUpperCase()
        )

      // SAFE:
      // Never directly call .toLowerCase()
      // on a possible array
      const lower =
        safeLower(formatted)

      if (!seen.has(lower)) {
        seen.add(lower)
        unique.push(formatted)
      }
    }

    return unique.join(', ')
  }

  // =========================
  // SCORE BREAKDOWN
  // =========================

  const breakdown =
    primaryCareer.scoreBreakdown || {
      skillScore: 0,
      academicScore: 0,
      interestScore: 0,
      projectScore: 0,
    }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* =========================
          HEADER
      ========================= */}

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

          <div className="flex items-center gap-3">

            {onEditProfile && (
              <button
                type="button"
                onClick={onEditProfile}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
              >
                ✏️ Edit Profile
              </button>
            )}

            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">
              {String(name)
                .split(' ')
                .filter(Boolean)
                .map(
                  (word) =>
                    word[0]
                )
                .join('')
                .slice(0, 2)
                .toUpperCase()}
            </div>

          </div>

        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-8">

        {/* =========================
            WELCOME
        ========================= */}

        <section className="mb-8">

          <h2 className="text-3xl font-bold">
            Welcome back, {name} 👋
          </h2>

          <p className="text-slate-500 mt-2">
            Continue your journey toward becoming industry ready for{' '}
            <span className="font-semibold text-slate-800">
              {careerGoal}
            </span>.
          </p>

        </section>

        {/* =========================
            CAREER GOAL CARD
        ========================= */}

        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-7 mb-6 shadow-sm">

          <div className="flex items-center justify-between mb-2">

            <p className="text-indigo-100 text-sm uppercase font-semibold">
              Your Target Career Goal
            </p>

            <span className="text-2xl">
              {primaryCareer.icon || '🎯'}
            </span>

          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <h3 className="text-3xl font-bold mt-1">
                {careerGoal}
              </h3>

              <p className="text-indigo-100 mt-2 max-w-xl">
                {primaryCareer.description ||
                  'Your top recommended career path based on your real skills, branch, and interests.'}
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-4 text-xs font-medium">

                <span className="text-indigo-200">
                  Calculated based on:
                </span>

                <span className="px-2.5 py-1 rounded-full bg-white/20 text-white">
                  ✓ Skills ({breakdown.skillScore}/60)
                </span>

                <span className="px-2.5 py-1 rounded-full bg-white/20 text-white">
                  ✓ Branch ({breakdown.academicScore}/15)
                </span>

                <span className="px-2.5 py-1 rounded-full bg-white/20 text-white">
                  ✓ Interests ({breakdown.interestScore}/15)
                </span>

                <span className="px-2.5 py-1 rounded-full bg-white/20 text-white">
                  ✓ Projects ({breakdown.projectScore}/10)
                </span>

              </div>

            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-2xl px-7 py-5 text-center min-w-[140px] border border-white/10">

              <div className="text-4xl font-bold">
                {matchPercentage}%
              </div>

              <div className="text-sm text-indigo-100 mt-0.5">
                Career Match
              </div>

              <button
                type="button"
                onClick={onCareerAnalysis}
                className="mt-3 text-xs bg-white text-indigo-700 font-bold px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition w-full"
              >
                View Analysis →
              </button>

            </div>

          </div>

        </section>

        {/* =========================
            STATS
        ========================= */}

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          {/* Career Match */}

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

            <div className="flex justify-between items-start">

              <div className="text-3xl">
                🎯
              </div>

              <span className="text-xs font-semibold px-2 py-1 rounded-md bg-indigo-50 text-indigo-700">
                Dynamic Score
              </span>

            </div>

            <p className="text-sm text-slate-500 mt-4">
              Career Match
            </p>

            <h3 className="text-2xl font-bold mt-1 text-slate-900">
              {matchPercentage}%
            </h3>

            <p className="text-sm text-slate-600 mt-1 truncate">
              {careerGoal}
            </p>

          </div>

          {/* Skills */}

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

            <div className="text-3xl">
              📚
            </div>

            <p className="text-sm text-slate-500 mt-4">
              Skills Completed
            </p>

            <h3 className="text-2xl font-bold mt-1 text-slate-900">
              {completedCount} / {totalSkills}
            </h3>

            <p className="text-sm text-slate-600 mt-1">
              {remainingSkills === 0
                ? 'All roadmap skills completed!'
                : `${remainingSkills} skills remaining`}
            </p>

          </div>

          {/* Progress */}

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

            <div className="text-3xl">
              🚀
            </div>

            <p className="text-sm text-slate-500 mt-4">
              Learning Progress
            </p>

            <h3 className="text-2xl font-bold mt-1 text-slate-900">
              {progress}%
            </h3>

            <p className="text-sm text-slate-600 mt-1">
              {progress === 100
                ? 'Ready for industry placement!'
                : 'Keep making steady progress!'}
            </p>

          </div>

        </section>

        {/* =========================
            OVERALL PROGRESS
        ========================= */}

        <section className="bg-white border border-slate-200 rounded-2xl p-6 mb-8 shadow-sm">

          <div className="flex justify-between items-center mb-3">

            <div>

              <h3 className="text-xl font-bold">
                Overall Learning Progress
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                {completedCount} of {totalSkills} roadmap skills completed for {careerGoal}
              </p>

            </div>

            <span className="text-indigo-600 font-bold text-lg">
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

        {/* =========================
            CURRENT LEARNING
        ========================= */}

        <section className="bg-white border border-slate-200 rounded-2xl p-6 mb-8 shadow-sm">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-sm text-indigo-600 font-semibold uppercase">
                Current Learning Focus
              </p>

              <h3 className="text-2xl font-bold mt-1">
                Continue Learning 📚
              </h3>

            </div>

            <div className="text-3xl">
              🤖
            </div>

          </div>

          <div className="bg-slate-50 rounded-xl p-5 mt-6 border border-slate-200/60">

            <h4 className="text-xl font-bold text-slate-900">
              {currentLearning}
            </h4>

            <p className="text-slate-600 mt-2">
              Complete your {currentLearning} skills to raise your match score and move closer to your career goal.
            </p>

            <div className="mt-5">

              <div className="flex justify-between text-sm mb-2">

                <span>
                  Journey Progress
                </span>

                <span className="font-semibold text-indigo-600">
                  {progress}%
                </span>

              </div>

              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">

                <div
                  className="h-full bg-indigo-600 rounded-full transition-all"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>

            <button
              type="button"
              onClick={onLearningJourney}
              className="mt-5 px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition inline-flex items-center gap-2"
            >
              Continue Learning Roadmap →
            </button>

          </div>

        </section>

        {/* =========================
            QUICK ACTIONS
        ========================= */}

        <section className="mb-8">

          <h3 className="text-xl font-bold mb-5">
            Quick Actions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Career Analysis */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">

              <div>

                <div className="text-3xl">
                  🎯
                </div>

                <h4 className="text-xl font-bold mt-4">
                  Career Analysis
                </h4>

                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Explore your dynamic match breakdown, identified skill gaps, and alternative career pathways.
                </p>

              </div>

              <button
                type="button"
                onClick={onCareerAnalysis}
                className="mt-5 text-indigo-600 font-semibold text-left inline-flex items-center gap-1 hover:text-indigo-800"
              >
                Explore Analysis →
              </button>

            </div>

            {/* Learning */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">

              <div>

                <div className="text-3xl">
                  📚
                </div>

                <h4 className="text-xl font-bold mt-4">
                  Learning Journey
                </h4>

                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Follow your step-by-step roadmap specifically curated for {careerGoal}.
                </p>

              </div>

              <button
                type="button"
                onClick={onLearningJourney}
                className="mt-5 text-indigo-600 font-semibold text-left inline-flex items-center gap-1 hover:text-indigo-800"
              >
                Open Roadmap →
              </button>

            </div>

            {/* Resume */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">

              <div>

                <div className="text-3xl">
                  📄
                </div>

                <h4 className="text-xl font-bold mt-4">
                  Build Resume
                </h4>

                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Generate a polished professional resume featuring your validated skills and project.
                </p>

              </div>

              <button
                type="button"
                onClick={onResume}
                className="mt-5 text-indigo-600 font-semibold text-left inline-flex items-center gap-1 hover:text-indigo-800"
              >
                View Resume →
              </button>

            </div>

          </div>

        </section>

        {/* =========================
            CAREER READY / LEARNING
        ========================= */}

        {progress === 100 ? (

          <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8 shadow-sm">

            <div className="flex gap-4">

              <div className="text-3xl">
                🎉
              </div>

              <div>

                <p className="text-sm font-bold text-emerald-700 uppercase">
                  Career Ready
                </p>

                <h3 className="text-xl font-bold mt-1 text-emerald-950">
                  Congratulations! Your Resume is Ready
                </h3>

                <p className="text-sm text-slate-600 mt-2">
                  You have completed all {totalSkills} recommended skills for {careerGoal}. Your achievements have been populated into your professional resume.
                </p>

                <button
                  type="button"
                  onClick={onResume}
                  className="mt-4 px-5 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition"
                >
                  View & Download Resume →
                </button>

              </div>

            </div>

          </section>

        ) : (

          <section className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-8 shadow-sm">

            <div className="flex gap-4">

              <div className="text-3xl">
                📈
              </div>

              <div>

                <p className="text-sm font-bold text-indigo-700 uppercase">
                  Learning In Progress
                </p>

                <h3 className="text-xl font-bold mt-1 text-slate-900">
                  {completedCount} of {totalSkills} Skills Completed
                </h3>

                <p className="text-sm text-slate-600 mt-2">
                  Complete remaining skills in your learning journey to unlock 100% Career Readiness and build an optimized resume.
                </p>

                <button
                  type="button"
                  onClick={onLearningJourney}
                  className="mt-4 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition text-sm"
                >
                  Continue Learning →
                </button>

              </div>

            </div>

          </section>

        )}

        {/* =========================
            PROFILE
        ========================= */}

        <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

          <div className="flex items-center justify-between mb-6">

            <h3 className="text-xl font-bold">
              Your Profile Overview
            </h3>

            {onEditProfile && (
              <button
                type="button"
                onClick={onEditProfile}
                className="text-sm text-indigo-600 font-semibold hover:underline"
              >
                Edit Details
              </button>
            )}

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-slate-500">
                Full Name
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

            <div>
              <p className="text-sm text-slate-500">
                Selected Goal
              </p>

              <p className="font-semibold mt-1 text-indigo-600">
                {careerGoal}
              </p>
            </div>

          </div>

        </section>

      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="text-center py-8 text-sm text-slate-500">

        © 2026 CareerPath AI

        <br />

        Learn • Build • Grow 🚀

      </footer>

    </div>
  )
}

export default Dashboard