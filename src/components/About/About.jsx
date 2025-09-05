import GenCards from "./about_comp/ExecBody/GenCards";
import VisionMission from "./about_comp/VisionMission";
import { execBodyData, repData } from './about_comp/ExecBody/data';
const About = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-10 tracking-tight font-serif transition-all duration-300 ease-linear hover:text-black ">
        About Us
      </h2>
      <VisionMission/>
      <h2 className="text-3xl font-bold text-center text-gray-700 mt-10 tracking-tight font-serif transition-all duration-300 ease-linear hover:text-black ">
  Our Executive Body</h2>
        <GenCards data={execBodyData}/>

         <h2 className="text-3xl font-bold text-center text-gray-700 mt-10 tracking-tight font-serif transition-all duration-300 ease-linear hover:text-black ">
  Representative Body </h2>
  <GenCards data={repData} />

    </div>
  
  );
};
export default About;
