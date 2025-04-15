import React, { useState } from "react";
import { plugins } from "../config/plugin-config";
import { Button } from "../ui/button";

export default function PluginDashboard() {
  const [search, setSearch] = useState("");

  const filteredPlugins = plugins.filter((plugin) =>
    plugin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">🚀 Plugins</h2>
      <input
        type="text"
        placeholder="Search plugins..."
        className="border px-3 py-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlugins.map((plugin) => (
          <div key={plugin.name} className="border p-4 rounded shadow-sm">
            <div className="text-2xl mb-2">{plugin.icon}</div>
            <h3 className="text-lg font-bold">{plugin.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{plugin.description}</p>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {plugin.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
