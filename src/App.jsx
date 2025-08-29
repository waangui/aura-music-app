import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import FooterPlayer from './components/FooterPlayer.jsx'; 
import { Home, Library, Search, Plus } from 'lucide-react';

function App() {

  const SideBar = () => {
    const navLinkClassName = ({ isActive }) =>
      `flex items-center gap-4 p-2 rounded-md transition-colors font-semibold no-underline ${
        isActive 
          ? 'text-[#8B7299] bg-[#8B7299]/20' 
          : 'text-[#6C6A6A] hover:bg-gray-200/50'
      }`;

    return (
    
      <nav className="w-[334px] bg-sidebar-bg p-4 flex flex-col font-sidebar ">
        <div className="mb-8 px-2">
          <h1 className="font-sidebar text-3xl font-bold text-gray-800">Aura</h1>
        </div>
        
        {/* make the mb-4 margin bottom work. I seem to be having trouble getting my tailwind to render as it should */}
        
        <div className="flex flex-col ">
          <NavLink to="/" className={navLinkClassName} >
            <Home size={30} />
            <span className="mb-4">Home</span>
          </NavLink>
          <NavLink to="/library" className={navLinkClassName}>
            <Library size={30} />
            <span className="mb-4">Library</span>
          </NavLink>
          <NavLink to="/search" className={navLinkClassName}>
            <Search size={30} />
            <span className="mb-4">Search</span>
          </NavLink>
        </div>

        <hr className="my-6" />

        <div className="px-2 font-sidebar">
          <h2 className="text-sm font-semibold text-gray-500  tracking-wider mb-4">Playlists</h2>
          <div className="flex flex-col gap-5 ">
            <a href="#" className="hover:text-black text-2xl text-[#6C6A6A] no-underline mb-4">In the shower</a>
            <a href="#" className="hover:text-black text-2xl text-[#6C6A6A] no-underline">Mas Amigas</a>
            <a href="#" className="hover:text-black text-2xl text-[#6C6A6A] no-underline">Chill</a>
            <a href="#" className="hover:text-black text-2xl text-[#6C6A6A] no-underline">Study</a>
          </div>

          <button className="flex items-center gap-3 mt-6 text-gray-600 hover:text-black">
            <div className="bg-gray-200 p-1 rounded">
              <Plus size={16} />
            </div>
            <span></span>
          </button>
        </div>
      </nav>
    );
  };

  return (
    <div className="relative flex h-full">
      <SideBar />
      <main className="flex-1 bg-custom-light min-h-screen overflow-y-auto">
        <Outlet />
      </main>
      <FooterPlayer />
    </div>
  );
}

export default App;
