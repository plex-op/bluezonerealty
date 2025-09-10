import { motion } from "motion/react";
import { Building } from "lucide-react";
import { Link } from "react-router-dom";
import { brandLogo } from "../../assets/images";
const Brand = () => {
  const MotionLink = motion.create(Link);
  return (
    <MotionLink
      to={"/"}
      className="flex items-center space-x-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <img src={brandLogo} alt="Brand Logo" className="block w-50 h-24" />
      <div className="flex items-center space-x-1 ">
        {/* <div>
          <div className="font-bold text-xl text-slate-100">NU</div>
          <div className="text-xs text-slate-500 -mt-1">Homes & Developers</div>
        </div> */}
      </div>
    </MotionLink>
  );
};

export default Brand;
