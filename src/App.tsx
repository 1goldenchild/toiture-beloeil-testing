
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollToTop from "./components/utils/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EntretienToiture from "./pages/EntretienToiture";
import InspectionToiture from "./pages/InspectionToiture";
import InstallationToiture from "./pages/InstallationToiture";
import RemplacementToiture from "./pages/RemplacementToiture";
import ReparationToiture from "./pages/ReparationToiture";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ConditionsUtilisation from "./pages/ConditionsUtilisation";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import Header from "./components/header/Header"; // Updated import path
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow pt-24">
            <Breadcrumbs />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services-de-couvreur/" element={<Services />} />
              <Route path="/services-de-couvreur/entretien-toiture-Beloeil/" element={<EntretienToiture />} />
              <Route path="/services-de-couvreur/inspection-toiture-Beloeil/" element={<InspectionToiture />} />
              <Route path="/services-de-couvreur/installation-toiture-Beloeil/" element={<InstallationToiture />} />
              <Route path="/services-de-couvreur/remplacement-toiture-Beloeil/" element={<RemplacementToiture />} />
              <Route path="/services-de-couvreur/réparation-toiture-Beloeil/" element={<ReparationToiture />} />
              <Route path="/contactez-nous/" element={<Contact />} />
              <Route path="/conditions-utilisation/" element={<ConditionsUtilisation />} />
              <Route path="/politique-de-confidentialité/" element={<PolitiqueConfidentialite />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
