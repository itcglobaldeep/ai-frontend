
import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-gray-100 p-4 h-full w-60 border-r">
      <ul>
        <li className="mb-2 font-medium">🔧 Plugins</li>
        <li className="text-sm text-gray-600">📄 Document Tools</li>
        <li className="text-sm text-gray-600">🧠 AI Assistant</li>
      </ul>
    </div>
  );
}
