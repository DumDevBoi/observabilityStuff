'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          Diddy site
        </h1>
        
        <div className="space-y-4">
          <div className="bg-slate-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">
              API Endpoints
            </h2>
            <ul className="space-y-2 text-slate-300">
              <li>
                <code className="bg-slate-800 px-2 py-1 rounded">GET /api/ping</code>
                {' '} - Service health check
              </li>
              <li>
                <code className="bg-slate-800 px-2 py-1 rounded">GET /api/metrics</code>
                {' '} - Prometheus metrics
              </li>
            </ul>
          </div>

          <div className="bg-slate-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Test
            </h2>
            <button
              onClick={async () => {
                const res = await fetch('/api/ping');
                const data = await res.json();
                alert(JSON.stringify(data, null, 2));
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Test /api/ping
            </button>
          </div>

          <div className="bg-slate-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">
              Monitoring Tools
            </h2>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href=" http://localhost:9090/targets" target="_blank" className="text-blue-400 hover:underline">
                  Prometheus (localhost:9090)
                </a>
              </li>
              <li>
                <a href="http://localhost:3001/dashboards" target="_blank" className="text-blue-400 hover:underline">
                  Grafana (localhost:3001)
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}