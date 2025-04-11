import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProfileProvider } from './context/ProfileContext';
import { AuthProvider } from './context/AuthContext';
import { AudioRoomProvider } from './context/AudioRoomContext';
import Navbar from './components/Navbar';
import ExpandableSidebar from './components/ExpandableSidebar';
import DiscoverPage from './pages/DiscoverPage';
import CommunityPage from './pages/CommunityPage';
import AudioRoomsPage from './pages/AudioRoomsPage';
import MessagesPage from './pages/MessagesPage';
import WatchTogetherPage from './pages/WatchTogetherPage';
import SavedPage from './pages/SavedPage';
import HistoryPage from './pages/HistoryPage';
import TempProfileModal from './components/TempProfileModal';
import AvatarDebugger from './components/debug/AvatarDebugger';
import { supabase } from './lib/supabase';
import { useEffect } from 'react';

// App configuration

function App() {
  useEffect(() => {
    // Make supabase URL available globally for avatar URL generation
    (window as any).supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wdbcwawakmyijhbwbdkt.supabase.co';
  }, []);

  return (
    <Router>
      <AuthProvider>
        <ProfileProvider>
          <AudioRoomProvider>
              <div className="min-h-screen bg-cyber-dark text-cyber-blue">
                <Navbar />
                <ExpandableSidebar />
                <div className="ml-16">
                  <Routes>
                    <Route path="/" element={<DiscoverPage />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="/messages" element={<MessagesPage />} />
                    <Route path="/messages/:username" element={<MessagesPage />} />
                    <Route path="/audio" element={<AudioRoomsPage />} />
                    <Route path="/watch-together" element={<WatchTogetherPage />} />
                    <Route path="/saved" element={<SavedPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/debug/avatars" element={<AvatarDebugger />} />
                  </Routes>
                </div>
                <TempProfileModal />
              </div>
          </AudioRoomProvider>
        </ProfileProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;