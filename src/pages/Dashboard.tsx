import DocPreviewWithContextMenu from "@/components/my-ui/DocPreviewWithContextMenu";
import NavBar from "@/components/my-ui/NavBar";
import DocumentHeader from "@/components/my-ui/DocumentHeader";
import DocumentCard from "@/components/DocumentCard";
import { PlusIcon } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />

      {/* Body */}
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-6">
        <DocPreviewWithContextMenu />
        {/* Recent Documents */}
        <section>
          <DocumentHeader />
          <div className="p-8 sm:px-20 lg:px-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="relative w-full h-[20rem] bg-gray-400 border border-gray-300"
                  style={{ maxWidth: "100%" }}
                >
                  <DocumentCard />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-white flex items-center justify-center">
        <PlusIcon className="w-10 h-10 text-gray-600 hover:text-orange-400 hover:w-12 hover:h-12 hover:animate-ease" />
      </div>
    </div>
  );
};

export default Dashboard;
