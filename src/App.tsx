import { Layout } from "@/components/layout/Layout";
import {
  NavigationProvider,
  useNavigation,
} from "@/contexts/NavigationContext";
import { ChatInterface } from "./components/chat";

// Create a separate component that uses the navigation context
function AppContent() {
  const { activeTab } = useNavigation();

  return (
    <Layout>
      <div className="flex h-screen w-full overflow-hidden">
        {activeTab === "chat" && <ChatInterface />}
        {activeTab === "dashboard" && (
          <div className="flex w-full items-center justify-center">
            Dashboard Content
          </div>
        )}
        {activeTab === "insights" && (
          <div className="flex w-full items-center justify-center">
            Insights Content
          </div>
        )}
        {activeTab === "transcript" && (
          <div className="flex w-full items-center justify-center">
            Transcript Content
          </div>
        )}
      </div>
    </Layout>
  );
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;
