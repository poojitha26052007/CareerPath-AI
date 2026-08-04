function Welcome({ onStart }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-2xl text-center">

        <div className="mb-6 text-6xl">
          🎓
        </div>

        <h1 className="text-5xl font-bold text-slate-900 mb-5">
          Welcome to CareerPath AI
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          Your personalized journey from learning skills
          to becoming career ready.
        </p>

        <button
          onClick={onStart}
          className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition"
        >
          Let's Get Started →
        </button>

      </div>
    </div>
  )
}

export default Welcome