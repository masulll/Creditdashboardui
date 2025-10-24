import { useState } from 'react';
import { Home, UserCircle, TrendingUp, Award, FileText, Settings, X, ChevronDown, ChevronRight, FilePlus } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  icon: any;
  label: string;
  active?: boolean;
  submenu?: { label: string; active?: boolean }[];
}

const menuItems: MenuItem[] = [
  { icon: Home, label: 'Dashboard', active: true },
  {
    icon: UserCircle,
    label: 'Profil Skoring',
    submenu: [
      { label: 'Profil Diri' },
      { label: 'Profil Usaha' },
    ],
  },
  { icon: TrendingUp, label: 'Kinerja Keuangan' },
  { icon: Award, label: 'Karakter Kewirausahaan' },
  { icon: FileText, label: 'Resume Skoring' },
  {
    icon: FilePlus,
    label: 'Pengajuan',
    submenu: [
      { label: 'Pengajuan Kredit' },
      { label: 'Pengajuan Cash Loan' },
      { label: 'Pengajuan Non Cash Loan' },
    ],
  },
  { icon: Settings, label: 'Settings' },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>('Profil Skoring');

  const toggleSubmenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-0
          w-64
        `}
      >
        <div className="flex flex-col h-full">
          {/* Mobile close button */}
          <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0d6efd] flex items-center justify-center">
                <span className="text-white">C</span>
              </div>
              <span className="text-gray-900">Menu</span>
            </div>
            <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1 p-4 mt-16 lg:mt-4 overflow-y-auto">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5" />
                          <span>{item.label}</span>
                        </div>
                        {expandedMenu === item.label ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                      {expandedMenu === item.label && (
                        <ul className="mt-1 ml-8 space-y-1">
                          {item.submenu.map((subitem) => (
                            <li key={subitem.label}>
                              <a
                                href="#"
                                className={`
                                  block px-4 py-2 rounded-lg transition-colors text-sm
                                  ${
                                    subitem.active
                                      ? 'bg-blue-50 text-[#0d6efd]'
                                      : 'text-gray-600 hover:bg-gray-100'
                                  }
                                `}
                              >
                                {subitem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href="#"
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                        ${
                          item.active
                            ? 'bg-[#0d6efd] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }
                      `}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-gray-500 text-sm">
              <p>Version 1.0.0</p>
              <p className="text-gray-400">© 2025 Credit Dashboard</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
