import React from "react";
import { Toaster } from "sonner";
import VoiceMic from "./components/voicechat/VoiceMic";


function App() {
  return (
    <>
      <Toaster position="top-center" richColors />
      <VoiceMic />
    </>
  );
}

export default App;
