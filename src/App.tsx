import React, {useRef} from 'react';
import Schedule from "./Components/Schedule/Schedule";
import Intro from "./Components/Intro/Intro";
import Info from "./Components/Info/Info";
import './scss/Layout.module.scss'
import Menu from "./Components/Menu/Menu";
import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
import Modals from "./Components/UIKIT/Modals";

const App = () => {
    const IntroRef = useRef<any>(null)
    const InformationRef = useRef<any>(null)
    const ScheduleRef = useRef<any>(null)
    const GalleryRef = useRef<any>(null)


    const IntroScroll = () => IntroRef.current.scrollIntoView({block:'start'})
    const InformationScroll = () => InformationRef.current.scrollIntoView(true)
    const ScheduleScroll = () => ScheduleRef.current.scrollIntoView(true)
    const GalleryScroll = () => GalleryRef.current.scrollIntoView(true)

    return (
        <div>
            <Menu
                IntroScroll={IntroScroll}
                InformationScroll={InformationScroll}
                ScheduleScroll={ScheduleScroll}
                GalleryScroll={GalleryScroll}
            />
            <Intro
                refProp={IntroRef}
            />
            <Info
                refProp={InformationRef}
            />
            <Schedule
                refProp={ScheduleRef}
            />
            <Events
                refProp={GalleryRef}
            />
            <Footer
                IntroScroll={IntroScroll}
                InformationScroll={InformationScroll}
                ScheduleScroll={ScheduleScroll}
                GalleryScroll={GalleryScroll}
            />
            <Modals/>
        </div>
    );
};

export default App;