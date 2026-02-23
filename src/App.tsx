import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CertifiedExcellence from "./pages/CertifiedExcellence";
import EnterpriseGradeSecurity from "./pages/EnterpriseGradeSecurity";
import LightningFastIntegration from "./pages/LightningFastIntegration";
import ExpertSupport from "./pages/ExpertSupport";
import ScalableSolutions from "./pages/ScalableSolutions";
import GlobalReach from "./pages/GlobalReach";
import Services from "./pages/Services";
import Consulting from "./pages/Consulting";
import SoftwareSolutions from "./pages/SoftwareSolutions";
import WebDevelopment from "./pages/WebDevelopment";
import SAPModules from "./pages/SAPModules";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/certified-excellence" element={<CertifiedExcellence />} />
          <Route path="/enterprise-security" element={<EnterpriseGradeSecurity />} />
          <Route path="/fast-integration" element={<LightningFastIntegration />} />
          <Route path="/expert-support" element={<ExpertSupport />} />
          <Route path="/scalable-solutions" element={<ScalableSolutions />} />
          <Route path="/global-reach" element={<GlobalReach />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/software-solutions" element={<SoftwareSolutions />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/sap" element={<SAPModules />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
