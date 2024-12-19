import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here...");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("Click 'Run Code' to see the output...");
  const [loading, setLoading] = useState(false);

  // Map supported languages to Piston API language names
  const languageMap = {
    javascript: "javascript",
    python: "python3",
    java: "java",
  };

  const handleRunCode = async () => {
    setOutput("Running code...");
    setLoading(true);

    try {
      // Make a POST request to Piston API
      const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language: languageMap[language],
        version: "*", // Use the latest version
        files: [
          {
            name: "code",
            content: code,
          },
        ],
      });

      // Get the output from the response
      const result = response.data.run.output;
      setOutput(result || "No output available.");
    } catch (error) {
      console.error("Error while running code:", error);
      setOutput("An error occurred while running the code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Interactive Code Editor
      </h2>

      {/* Language Selector */}
      <div className="mb-4 text-center">
        <label className="mr-2 font-semibold">Choose Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>
      </div>

      {/* Code Editor */}
      <Editor
        height="400px"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
      />

      {/* Run Code Button */}
      <div className="text-center mt-4">
        <button
          onClick={handleRunCode}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          disabled={loading}
        >
          {loading ? "Running..." : "Run Code"}
        </button>
      </div>

      {/* Output Section */}
      <div className="mt-6 p-4 bg-gray-200 rounded">
        <h3 className="text-lg font-bold mb-2">Output:</h3>
        <pre className="whitespace-pre-wrap text-gray-700">{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
