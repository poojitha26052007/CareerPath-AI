function CareerAnalysis({
  studentData = {},
  careerEvaluation = null,
  onContinue,
  onBack,
}) {
  const primary = careerEvaluation?.primary || {
    title: studentData?.careerGoal || 'Software Developer',
    icon: '💻',
    matchPercentage: 0,
    description: 'Dynamic career evaluation in progress.',
    matchedSkills: [],
    missingSkills: [],
    requiredSkills: [],
    roadmap: [],
    scoreBreakdown: {
      skillScore: 0,
      academicScore: 0,
      interestScore: 0,
      projectScore: 0,
    },
  }

  const alternatives = careerEvaluation?.alternatives || []
  const displayName = studentData?.name || 'Student'
  const branch = studentData?.branch || 'CSE'
  const year = studentData?.year ? `${studentData.year} Year` : '2nd Year'
  const formatInterest = (value) => {
    if (!value) return 'Technology'
    let str = String(value).trim()
    if (str.length >= 4 && str.length % 2 === 0) {
      const half = str.slice(0, str.length / 2)
      if (half + half === str) str = half
    }
    const parts = str.split(/[,;\n/]+/).map((s) => s.trim()).filter(Boolean)
    if (parts.length === 0) return 'Technology'
    const unique = []
    const seen = new Set()
    for (let part of parts) {
      if (part.length >= 4 && part.length % 2 === 0) {
        const half = part.slice(0, part.length / 2)
        if (half + half === part) part = half
      }
      const formatted = part.replace(/\b\w/g, (c) => c.toUpperCase())
      const lower = formatted.toLowerCase()
      if (!seen.has(lower)) {
        seen.add(lower)
        unique.push(formatted)
      }
    }
    return unique.join(', ')
  }

  const interest = formatInterest(
    studentData?.interests || studentData?.interest || 'Technology'
  )

  const breakdown = primary.scoreBreakdown || {
    skillScore: 0,
    academicScore: 0,
    interestScore: 0,
    projectScore: 0,
  }

  const matchedSkills = primary.matchedSkills || []
  const missingSkills = primary.missingSkills || []
  const roadmap = primary.roadmap || []

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-rose-100 text-rose-700 border-rose-200'
      case 'Medium':
        return 'bg-amber-100 text-amber-700 border-amber-200'
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200'
    }
  }

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
            Step 2 of 3 • Career Intelligence
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Your Career Analysis 🎯
          </h1>

          <p className="text-slate-600 mt-3 max-w-2xl text-lg">
            We evaluated your profile dynamically against real industry competency models to determine your exact match score and skill gaps.
          </p>

        </div>

        {/* Profile Summary Card */}
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
                Personalized Career Assessment for <span className="text-indigo-600 font-semibold">{primary.title}</span>
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <p className="text-sm text-slate-500">
                Branch
              </p>

              <p className="font-bold text-slate-900 mt-1">
                {branch}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <p className="text-sm text-slate-500">
                Current Year
              </p>

              <p className="font-bold text-slate-900 mt-1">
                {year}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <p className="text-sm text-slate-500">
                Interest
              </p>

              <p className="font-bold text-slate-900 mt-1 capitalize">
                {interest}
              </p>
            </div>

          </div>

        </div>

        {/* SCORE EXPLANATION / "WHY THIS SCORE?" */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase mb-2">
                Dynamic Career Match Score
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {primary.title} Match: <span className="text-indigo-600">{primary.matchPercentage}%</span>
              </h2>

              <p className="text-slate-600 mt-1">
                Calculated using weighted multi-factor evaluation (Skills 60%, Academics 15%, Interests 15%, Projects 10%).
              </p>
            </div>

            <div className="text-center bg-indigo-50 border border-indigo-100 rounded-2xl px-6 py-4 min-w-[140px]">
              <span className="text-4xl font-extrabold text-indigo-600">
                {primary.matchPercentage}%
              </span>
              <p className="text-xs font-semibold text-slate-600 uppercase mt-1">
                Match Score
              </p>
            </div>

          </div>

          <div className="mt-6">

            <h3 className="text-lg font-bold text-slate-900 mb-4">
              📊 Why this score? Score Breakdown
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {/* Skills Score */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-semibold text-slate-700">Core Skills</span>
                  <span className="font-bold text-indigo-600">{breakdown.skillScore} / 60</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${(breakdown.skillScore / 60) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  {matchedSkills.length} required skill(s) verified in profile.
                </p>
              </div>

              {/* Branch / Academics Score */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-semibold text-slate-700">Branch & CGPA</span>
                  <span className="font-bold text-indigo-600">{breakdown.academicScore} / 15</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${(breakdown.academicScore / 15) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Alignment for {branch} engineering curriculum.
                </p>
              </div>

              {/* Interests Score */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-semibold text-slate-700">Interest Synergy</span>
                  <span className="font-bold text-indigo-600">{breakdown.interestScore} / 15</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${(breakdown.interestScore / 15) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Domain alignment for stated interest: "{interest}".
                </p>
              </div>

              {/* Projects & Roadmap */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-semibold text-slate-700">Projects & Experience</span>
                  <span className="font-bold text-indigo-600">{breakdown.projectScore} / 10</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${(breakdown.projectScore / 10) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Roadmap completion & applied project portfolio.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* RECOMMENDED & ALTERNATIVE CAREER PATHS */}
        <section className="mb-10">

          <div className="flex items-center justify-between mb-5">

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                🎯 Top Recommended Career Pathways
              </h2>

              <p className="text-slate-500 mt-1">
                Dynamically ranked by your current skill overlap and profile alignment
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* Primary Target Career */}
            <div className="bg-white rounded-2xl border border-indigo-300 ring-2 ring-indigo-100 p-6 shadow-sm flex flex-col justify-between">

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-4">
                  ⭐ TARGET CAREER
                </span>

                <div className="flex items-start justify-between gap-3">

                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{primary.icon || '💻'}</span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {primary.title}
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-indigo-600">
                      {primary.matchPercentage}%
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
                      width: `${primary.matchPercentage}%`,
                    }}
                  />

                </div>

                <p className="text-slate-600 mt-5 leading-relaxed text-sm">
                  {primary.description}
                </p>

                <div className="mt-5">

                  <p className="font-semibold text-slate-900 mb-3 text-sm">
                    Required Core Skills
                  </p>

                  <div className="flex flex-wrap gap-1.5">

                    {(primary.requiredSkills || []).map((skill) => (

                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                          matchedSkills.includes(skill)
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {matchedSkills.includes(skill) ? `✓ ${skill}` : skill}
                      </span>

                    ))}

                  </div>

                </div>
              </div>

            </div>

            {/* Alternative Careers */}
            {alternatives.map((altCareer) => (

              <div
                key={altCareer.careerKey}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between"
              >

                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-4">
                    ALTERNATIVE TRACK
                  </span>

                  <div className="flex items-start justify-between gap-3">

                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{altCareer.icon || '🎯'}</span>
                      <h3 className="text-xl font-bold text-slate-900">
                        {altCareer.title}
                      </h3>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold text-slate-700">
                        {altCareer.matchPercentage}%
                      </p>

                      <p className="text-xs text-slate-500">
                        Match
                      </p>
                    </div>

                  </div>

                  <div className="mt-4 w-full h-2 bg-slate-200 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-slate-600 rounded-full"
                      style={{
                        width: `${altCareer.matchPercentage}%`,
                      }}
                    />

                  </div>

                  <p className="text-slate-600 mt-5 leading-relaxed text-sm">
                    {altCareer.description}
                  </p>

                  <div className="mt-5">

                    <p className="font-semibold text-slate-900 mb-3 text-sm">
                      Key Competencies
                    </p>

                    <div className="flex flex-wrap gap-1.5">

                      {(altCareer.requiredSkills || []).slice(0, 6).map((skill) => (

                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs"
                        >
                          {skill}
                        </span>

                      ))}

                    </div>

                  </div>
                </div>

              </div>

            ))}

          </div>

        </section>

        {/* DYNAMIC SKILL GAP ANALYSIS */}
        <section className="mb-10 space-y-6">

          {/* Matched Skills */}
          {matchedSkills.length > 0 && (
            <div className="bg-white rounded-2xl border border-emerald-200 p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-xl text-emerald-700 font-bold">
                  ✓
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Validated Matched Skills
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Skills found in your profile that directly satisfy requirements for {primary.title}.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                {matchedSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3"
                  >
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="font-semibold text-slate-800 text-sm">{skill}</span>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold">
                      Matched
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Missing Skills with Priority */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-2xl">
                ⚠️
              </div>

              <div className="flex-1">

                <h2 className="text-2xl font-bold text-slate-900">
                  Identified Skill Gaps for {primary.title}
                </h2>

                <p className="text-slate-500 mt-1">
                  Master these prioritized skills to close your gap and achieve 100% industry readiness.
                </p>

              </div>

            </div>

            {missingSkills.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

                {missingSkills.map((item) => (

                  <div
                    key={item.name}
                    className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3"
                  >
                    <span className="text-amber-500">
                      ●
                    </span>

                    <span className="font-medium text-slate-800 text-sm">
                      {item.name}
                    </span>

                    <span
                      className={`ml-auto text-xs font-semibold px-2.5 py-0.5 rounded-md border ${getPriorityBadge(
                        item.priority
                      )}`}
                    >
                      {item.priority} Priority
                    </span>
                  </div>

                ))}

              </div>
            ) : (
              <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-800 font-semibold flex items-center gap-3">
                <span className="text-2xl">🎉</span>
                <span>Outstanding! You have already learned all core skills required for this career track.</span>
              </div>
            )}

          </div>

        </section>

        {/* DYNAMIC LEARNING ROADMAP */}
        <section className="mb-10">

          <h2 className="text-2xl font-bold text-slate-900">
            📚 Tailored Learning Roadmap for {primary.title}
          </h2>

          <p className="text-slate-500 mt-1 mb-5">
            Follow this progressive step-by-step roadmap to build practical industry competency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {roadmap.map((step, index) => (

              <div
                key={step.id || step.name}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between"
              >

                <div>
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>

                      <p className="text-xs font-semibold text-indigo-600 uppercase">
                        Month {index + 1}
                      </p>
                    </div>

                    <span className="text-xl">{step.icon || '📌'}</span>

                  </div>

                  <h3 className="font-bold text-slate-900 mt-3 text-base">
                    {step.name}
                  </h3>

                  {step.description && (
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  )}
                </div>

                {step.duration && (
                  <p className="text-xs font-medium text-slate-400 mt-4 pt-3 border-t border-slate-100">
                    ⏱ {step.duration}
                  </p>
                )}

              </div>

            ))}

          </div>

        </section>

        {/* Continue Button Card */}
        <div className="bg-indigo-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <h2 className="text-2xl font-bold">
                Ready to begin your personalized roadmap? 🚀
              </h2>

              <p className="text-indigo-100 mt-2">
                Launch your interactive learning journey and track your completed skills.
              </p>

            </div>

            <button
              type="button"
              onClick={onContinue}
              className="bg-white text-indigo-700 px-7 py-3.5 rounded-xl font-bold hover:bg-indigo-50 transition whitespace-nowrap shadow-sm"
            >
              Start Learning Roadmap →
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