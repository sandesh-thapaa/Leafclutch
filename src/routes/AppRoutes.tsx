import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../components/layouts/Layout";

import Job from "../pages/careers/Job";
import Blog from "../pages/others/Blog";
import VerifyCertificate from "../pages/others/VerifyCertificate";
import OurProjects from "../pages/others/OurProjects";
import NotFound from "../components/ui/NotFound";
import Internship from "../pages/careers/Internship";
import Home from "../pages/Home";
import AllServices from "../pages/Services/AllServices";
import Services from "../pages/Services/Services";
import { ScrollToTop } from "./ScrollToTop";
import TrainingInternship from "../pages/careers/TrainingInternship";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/careers/jobs" element={<Job />} />
          <Route path="/careers/internships" element={<Internship />} />
          <Route path="/careers/training" element={<TrainingInternship />} />
          <Route path="/others/blog" element={<Blog />} />
          <Route
            path="/others/verify-certificate"
            element={<VerifyCertificate />}
          />
          <Route path="/others/our-projects" element={<OurProjects />} />
          <Route path="/services/all-services" element={<AllServices />} />

          <Route path="/services/:slug" element={<Services />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
