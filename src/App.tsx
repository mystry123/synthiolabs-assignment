import { Layout } from "@/components/layout/Layout";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { NavigationProvider } from "@/contexts/NavigationContext";

function App() {
  return (
    <NavigationProvider>
      <Layout>
        <div className="flex h-screen overflow-hidden">
          <ChatInterface />
        </div>
      </Layout>
    </NavigationProvider>
  );
}

export default App;
