export default function Skills() {
    return (
      <div className="min-h-screen py-16">
        <h1 className="text-[30px] underline border-dotted uppercase text-[#5A2848] text-center mb-6">
          My Skills
        </h1>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6">
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="w-20 h-20 mb-4">
              <img src="/html.logo.png" alt="HTML" className="rounded-full" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">HTML</h2>
            <p className="text-gray-600 mt-2">
              Markup language for structuring web content.
            </p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="w-20 h-20 mb-4">
              <img src="/css2.png" alt="CSS" className="rounded-full" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">CSS</h2>
            <p className="text-gray-600 mt-2">
              Style sheet language for designing the web.
            </p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="w-20 h-20 mb-4">
              <img src="/javacript.png" alt="JavaScript" className="rounded-full" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">JavaScript</h2>
            <p className="text-gray-600 mt-2">
              Programming language for web development.
            </p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="w-20 h-20 mb-4">
              <img src="/ts.png" alt="TypeScript" className="rounded-full" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">TypeScript</h2>
            <p className="text-gray-600 mt-2">JavaScript with static typing.</p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="w-20 h-20 mb-4">
              <img src="/figma.png" alt="Figma" className="rounded-full" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">Figma</h2>
            <p className="text-gray-600 mt-2">
              Collaborative interface design tool.
            </p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="w-20 h-20 mb-4">
              <img src="/github.png" alt="GitHub" className="rounded-full" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">GitHub</h2>
            <p className="text-gray-600 mt-2">
              Platform for version control and collaboration.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
