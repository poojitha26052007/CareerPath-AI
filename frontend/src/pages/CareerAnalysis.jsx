import { useEffect, useState } from 'react'

function CareerAnalysis({ studentData, onContinue }) {
  const [careers, setCareers] = useState([])
  const [missingSkills, setMissingSkills] = useState([])
  const [roadmap, setRoadmap] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Fallback data
  const fallbackCareers = [
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

  const fallbackMissingSkills = [
    'Python',
    'SQL',
    'NumPy',
    'Pandas',
    'Statistics',
    'Machine Learning',
    'Git & GitHub',
  ]

  const fallbackRoadmap = [
    ['Month 1', 'Python Fundamentals'],
    ['Month 2', 'SQL'],
    ['Month 3', 'Git & GitHub'],
    ['Month 4', 'NumPy'],
    ['Month 5', 'Pandas'],
    ['Month 6', 'Statistics'],
    ['Month 7', 'Machine Learning'],
    ['Month 8', 'Build a Real-World Project'],
  ]

  // Backend API call
  useEffect(() => {
    const analyzeCareer = async () => {
      try {
        setLoading(true)
        setError('')

        console.log('Sending student data:', studentData)

        const response = await fetch(
          'http://localhost:5000/api/career/analyze',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
          }
        )

        const data = await response.json()

        console.log('Career Analysis from Backend:', data)

        if (!response.ok) {
          throw new Error(
            data.message || 'Career analysis failed'
          )
        }

        setCareers(
          data.careers?.length
            ? data.careers
            : fallbackCareers
        )

        setMissingSkills(
          data.missingSkills?.length
            ? data.missingSkills
            : fallbackMissingSkills
        )

        setRoadmap(
          data.roadmap?.length
            ? data.roadmap
            : fallbackRoadmap
        )
      } catch (err) {
        console.error('Backend Error:', err)

        setError(
          'Backend analysis unavailable. Showing default career recommendations.'
        )

        setCareers(fallbackCareers)
        setMissingSkills(fallbackMissingSkills)
        setRoadmap(fallbackRoadmap)
      } finally {
        setLoading(false)
      }
    }

    if (studentData) {
      analyzeCareer()
    } else {
      setCareers(fallbackCareers)
      setMissingSkills(fallbackMissingSkills)
      setRoadmap(fallbackRoadmap)
      setLoading(false)
    }
  }, [studentData])

  const name = studentData?.name || 'Student'
  const branch = studentData?.branch || 'Not specified'
  const year = studentData?.year || 'Not specified'
  const interest = studentData?.interests || 'Not specified'

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-indigo-600 font-semibold mb-2">
            Step 2 of 3
          </p>

          <h1 className="text-4xl font-bold text-slate-900">
            Your Career Analysis 🎯
          </h1>

          <p className="text-slate-600 mt-2">
            We analyzed your profile and identified career paths
            and skills that can help you become industry ready.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8 text-center">
            <div className="text-3xl mb-3">
              🤖
            </div>

            <p className="text-lg font-semibold text-slate-900">
              Analyzing your career profile...
            </p>

            <p className="text-slate-500 mt-1">
              Please wait while CareerPath AI prepares your recommendations.
            </p>
          </div>
        )}

        {/* Backend Warning */}
        {error && !loading && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-xl p-4 mb-8">
            ⚠️ {error}
          </div>
        )}

        {/* Student Profile */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">

          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Your Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Name */}
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">
                Student
              </p>

              <p className="font-semibold text-slate-900">
                {name}
              </p>
            </div>

            {/* Branch */}
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">
                Branch
              </p>

              <p className="font-semibold text-slate-900">
                {branch}
              </p>
            </div>

            {/* Year */}
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">
                Year
              </p>

              <p className="font-semibold text-slate-900">
                {year}
              </p>
            </div>

            {/* Interest */}
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">
                Interest
              </p>

              <p className="font-semibold text-slate-900">
                {interest}
              </p>
            </div>

          </div>
        </div>

        {!loading && (
          <>
            {/* Career Recommendations */}
            <div className="mb-8">

              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                🎯 Recommended Career Paths
              </h2>

              {careers.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <p className="text-slate-600">
                    No career recommendations available.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  {careers.map((career) => (
                    <div
                      key={career.title}
                      className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition"
                    >

                      <div className="flex justify-between items-start mb-4">

                        <h3 className="text-xl font-bold text-slate-900">
                          {career.title}
                        </h3>

                        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">
                          {career.match}%
                        </span>

                      </div>

                      <p className="text-slate-600 mb-5">
                        {career.description}
                      </p>

                      <p className="font-semibold text-slate-800 mb-2">
                        Required Skills
                      </p>

                      <div className="flex flex-wrap gap-2">

                        {career.skills?.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm"
                          >
                            {skill}
                          </span>
                        ))}

                      </div>

                    </div>
                  ))}

                </div>
              )}
            </div>

            {/* Missing Skills */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">

              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                ❌ Skills You Need to Learn
              </h2>

              <p className="text-slate-600 mb-5">
                These skills can help you move from your current
                level toward your recommended career path.
              </p>

              {missingSkills.length === 0 ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <p className="text-green-700 font-semibold">
                    🎉 Great! You already have the recommended skills.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

                  {missingSkills.map((skill) => (
                    <div
                      key={skill}
                      className="border border-red-100 bg-red-50 rounded-xl p-4"
                    >

                      <div className="flex items-center gap-2">

                        <span className="text-red-500">
                          ●
                        </span>

                        <span className="font-semibold text-slate-800">
                          {skill}
                        </span>

                      </div>

                      <p className="text-sm text-red-600 mt-1">
                        Not learned yet
                      </p>

                    </div>
                  ))}

                </div>
              )}

            </div>

            {/* Roadmap */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">

              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                📚 Your Learning Roadmap
              </h2>

              {roadmap.length === 0 ? (
                <p className="text-slate-600">
                  Learning roadmap is not available.
                </p>
              ) : (
                <div className="space-y-4">

                  {roadmap.map((item, index) => {

                    const month = Array.isArray(item)
                      ? item[0]
                      : item.month

                    const skill = Array.isArray(item)
                      ? item[1]
                      : item.skill

                    return (
                      <div
                        key={`${month}-${index}`}
                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl"
                      >

                        <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </div>

                        <div>
                          <p className="text-sm text-indigo-600 font-semibold">
                            {month}
                          </p>

                          <p className="font-bold text-slate-900">
                            {skill}
                          </p>
                        </div>

                      </div>
                    )
                  })}

                </div>
              )}

            </div>

            {/* Continue */}
            <div className="text-center">

              <button
                onClick={onContinue}
                className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition"
              >
                Start My Learning Journey →
              </button>

            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default CareerAnalysis