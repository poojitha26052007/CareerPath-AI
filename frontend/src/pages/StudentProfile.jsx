import { useState } from 'react'

function StudentProfile({ onComplete }) {
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    year: '',
    cgpa: '',
    skills: '',
    interests: '',
    careerGoal: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Send student profile data to App.jsx
    onComplete({
      name: formData.name.trim(),
      branch: formData.branch,
      year: formData.year,
      cgpa: formData.cgpa,
      skills: formData.skills.trim(),
      interests: formData.interests.trim(),
      careerGoal: formData.careerGoal,
    })
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-indigo-600 font-semibold mb-2">
            Step 1 of 3
          </p>

          <h1 className="text-4xl font-bold text-slate-900">
            Tell us about yourself
          </h1>

          <p className="text-slate-600 mt-2">
            We'll use these details to personalize your career journey.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-6"
        >

          {/* Full Name */}
          <div>
            <label className="block font-semibold text-slate-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Branch */}
          <div>
            <label className="block font-semibold text-slate-700 mb-2">
              Branch
            </label>

            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">
                Select your branch
              </option>

              <option value="CSE">
                Computer Science & Engineering
              </option>

              <option value="AIML">
                Artificial Intelligence & Machine Learning
              </option>

              <option value="ECE">
                Electronics & Communication Engineering
              </option>

              <option value="EEE">
                Electrical & Electronics Engineering
              </option>

              <option value="MECH">
                Mechanical Engineering
              </option>

              <option value="CIVIL">
                Civil Engineering
              </option>

              <option value="IT">
                Information Technology
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {/* Current Year */}
          <div>
            <label className="block font-semibold text-slate-700 mb-2">
              Current Year
            </label>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">
                Select your year
              </option>

              <option value="1">
                1st Year
              </option>

              <option value="2">
                2nd Year
              </option>

              <option value="3">
                3rd Year
              </option>

              <option value="4">
                4th Year
              </option>
            </select>
          </div>

          {/* CGPA */}
          <div>
            <label className="block font-semibold text-slate-700 mb-2">
              CGPA{' '}
              <span className="text-slate-400">
                (Optional)
              </span>
            </label>

            <input
              type="number"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              placeholder="e.g. 8.42"
              min="0"
              max="10"
              step="0.01"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block font-semibold text-slate-700 mb-2">
              Current Skills
            </label>

            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g. Python, HTML, SQL (or type None)"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <p className="text-sm text-slate-500 mt-2">
              Don't have any skills yet? That's completely okay.
            </p>
          </div>

          {/* Interests */}
          <div>
            <label className="block font-semibold text-slate-700 mb-2">
              What are you interested in?
            </label>

            <input
              type="text"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="e.g. AI, Web Development, Data Science"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Career Goal */}
          <div>
            <label className="block font-semibold text-slate-700 mb-2">
              Career Goal
            </label>

            <select
              name="careerGoal"
              value={formData.careerGoal}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">
                Select your goal
              </option>

              <option value="Software Developer">
                Software Developer
              </option>

              <option value="Data Analyst">
                Data Analyst
              </option>

              <option value="Data Scientist">
                Data Scientist
              </option>

              <option value="AI/ML Engineer">
                AI / ML Engineer
              </option>

              <option value="Web Developer">
                Web Developer
              </option>

              <option value="Cloud Engineer">
                Cloud Engineer
              </option>

              <option value="Cybersecurity">
                Cybersecurity
              </option>

              <option value="UI/UX Designer">
                UI/UX Designer
              </option>

              <option value="Not Sure">
                🤷 I don't know yet
              </option>
            </select>
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition"
          >
            Continue →
          </button>

        </form>
      </div>
    </div>
  )
}

export default StudentProfile