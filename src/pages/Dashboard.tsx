const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-blue-600 text-3xl font-semibold">Docs</span>
            <input
              type="text"
              placeholder="Search"
              className="ml-6 bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Template gallery
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
              S
            </button>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Start a new document</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Document Templates */}
            <div className="bg-white shadow-sm p-4 rounded-md text-center">
              <div className="h-24 bg-gray-200 mb-4"></div>
              <span className="text-sm">Blank document</span>
            </div>
            <div className="bg-white shadow-sm p-4 rounded-md text-center">
              <div className="h-24 bg-gray-200 mb-4"></div>
              <span className="text-sm">Resume Spearmint</span>
            </div>
            <div className="bg-white shadow-sm p-4 rounded-md text-center">
              <div className="h-24 bg-gray-200 mb-4"></div>
              <span className="text-sm">Resume Coral</span>
            </div>
            <div className="bg-white shadow-sm p-4 rounded-md text-center">
              <div className="h-24 bg-gray-200 mb-4"></div>
              <span className="text-sm">Resume Serif</span>
            </div>
          </div>
        </section>

        {/* Recent Documents */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Recent documents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Placeholder for documents */}
            <div className="bg-white shadow-sm p-4 rounded-md">
              <div className="h-16 bg-gray-200 mb-4"></div>
              <span className="text-sm">Recent Document 1</span>
            </div>
            <div className="bg-white shadow-sm p-4 rounded-md">
              <div className="h-16 bg-gray-200 mb-4"></div>
              <span className="text-sm">Recent Document 2</span>
            </div>
            <div className="bg-white shadow-sm p-4 rounded-md">
              <div className="h-16 bg-gray-200 mb-4"></div>
              <span className="text-sm">Recent Document 3</span>
            </div>
            <div className="bg-white shadow-sm p-4 rounded-md">
              <div className="h-16 bg-gray-200 mb-4"></div>
              <span className="text-sm">Recent Document 3</span>
            </div>
            <div className="bg-white shadow-sm p-4 rounded-md">
              <div className="h-16 bg-gray-200 mb-4"></div>
              <span className="text-sm">Recent Document 3</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
