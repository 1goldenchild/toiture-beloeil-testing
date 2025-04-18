
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EntretienToiture from "./pages/EntretienToiture";
import InspectionToiture from "./pages/InspectionToiture";
import InstallationToiture from "./pages/InstallationToiture";
import RemplacementToiture from "./pages/RemplacementToiture";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services-de-couvreur/entretien-toiture-Beloeil/" element={<EntretienToiture />} />
          <Route path="/services-de-couvreur/inspection-toiture-Beloeil/" element={<InspectionToiture />} />
          <Route path="/services-de-couvreur/installation-toiture-Beloeil/" element={<InstallationToiture />} />
          <Route path="/services-de-couvreur/remplacement-toiture-Beloeil/" element={<RemplacementToiture />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
