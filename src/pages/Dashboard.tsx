import DocumentCard from "@/components/DocumentCard";
import NavBar from "@/components/my-ui/NavBar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />

      {/* Body */}
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-6">
        {/* Recent Documents */}
        <section>
          <h2 className="text-xl mb-4">Recent documents</h2>
          <div className=" p-8 sm:px-20 lg:px-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="relative w-full h-[20rem]  bg-gray-400  border border-gray-300"
                  style={{ maxWidth: "100%" }}
                >
                  <DocumentCard />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
