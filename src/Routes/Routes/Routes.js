import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../component/Home/Home";
import Error404 from "../../Pages/Error404/Error404";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import PrivacyPolicy from "../../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfCondition from "../../Pages/TermsOfCondition/TermsOfCondition";
import CookiePolicy from "../../Pages/CookiePolicy/CookiePolicy";
import Blog from "../../Pages/Blog/Blog";
import Services from "../../Pages/Services/Services";
import Pricing from "../../Pages/Pricing/Pricing";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../../Pages/Profile/profile";
import DistributionBooks from "../../Pages/Services/DistributionBooks/DistributionBooks";
import DistributionWinterClothes from "../../Pages/Services/DistributionWinterClothes/DistributionWinterClothes";
import IftarRamadanFood from "../../Pages/Services/IftarRamadanFood/IftarRamadanFood";
import PlantationProgram from "../../Pages/Services/PlantationProgram/PlantationProgram";
import RaisingEducating from "../../Pages/Services/RaisingEducating/RaisingEducating";
import ReliefDistribution from "../../Pages/Services/ReliefDistribution/ReliefDistribution";
import SadaqahJariyah from "../../Pages/Services/SadaqahJariyah/SadaqahJariyah";
import TechnicaEducation from "../../Pages/Services/TechnicalEducation/TechnicaEducation";
export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/termsofcondition",
        element: <TermsOfCondition></TermsOfCondition>,
      },
      {
        path: "/cookiepolicy",
        element: <CookiePolicy></CookiePolicy>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/distributionbooks",
        element: <DistributionBooks></DistributionBooks>,
      },
      {
        path: "/distributionwinterclothes",
        element: <DistributionWinterClothes></DistributionWinterClothes>,
      },
      {
        path: "/iftarramadanfood",
        element: <IftarRamadanFood></IftarRamadanFood>,
      },
      {
        path: "/plantationprogram",
        element: <PlantationProgram></PlantationProgram>,
      },
      {
        path: "raisingeducating",
        element: <RaisingEducating></RaisingEducating>,
      },
      {
        path: "/reliefdistribution",
        element: <ReliefDistribution></ReliefDistribution>,
      },
      {
        path: "/sadaqahjariyah",
        element: <SadaqahJariyah></SadaqahJariyah>,
      },
      {
        path: "/technicaleducation",
        element: <TechnicaEducation></TechnicaEducation>,
      },
      {
        path: "/pricing",
        element: (
          <PrivateRoute>
            {" "}
            <Pricing></Pricing>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile></Profile>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <Error404></Error404>,
  },
]);
