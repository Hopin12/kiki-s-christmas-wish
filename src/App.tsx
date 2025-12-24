import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Wishes from "./pages/Wishes";
import Magic from "./pages/Magic";
import Letter from "./pages/Letter";
import Promise from "./pages/Promise";
import MusicToggle from "./components/MusicToggle";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MusicToggle />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/magic" element={<Magic />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/promise" element={<Promise />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
