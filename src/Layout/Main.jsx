import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import OurServices from "../Pages/Our Services/OurServices";
import WhatWeDo from "../Pages/WhatWeDo/WhatWeDo";
import WhatCard from "../Pages/WhatWeDo/WhatCard";
import Consult from "../Pages/Consult/Consult";
import ConsultBox from "../Pages/Consult/ConsultBox";
import Implement from "../Pages/Implement/Implement";
import ImpleCart from "../Pages/Implement/ImpleCart";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <OurServices></OurServices>
            <WhatWeDo></WhatWeDo>
            <WhatCard></WhatCard>
            <Consult></Consult>
            <ConsultBox></ConsultBox>
            <Implement></Implement>
            <ImpleCart></ImpleCart>
        </div>
    );
};

export default Main;