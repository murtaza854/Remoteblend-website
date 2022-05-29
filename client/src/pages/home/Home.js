import React, { useEffect } from 'react';
import { GlobeBanner, Heading2, Heading3 } from '../../components';
import { ClientLogos, Engineers, Intro, Reviews, Stats } from './components';
import './Home.scss';

function Home(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Intro />
            {/* <div className='margin-global-top-3' /> */}
            <Stats />
            {/* <div className='margin-global-top-3' /> */}
            <GlobeBanner
                img="/Illustrations/RB_003.png"
                children={
                    <Heading2
                        firstLine="Lorem ipsum dolor sit amet."
                        seconeLine="sit amet."
                        thirdLine=""
                        fourthLine=""
                        className="white-color w47 margin-global-left-auto center-vertical-relative"
                    />
                }
            />
            <div className='margin-global-top-11' />
            <Engineers />
            <div className='margin-global-top-4' />
            <ClientLogos />
            <Reviews />
            <Heading3
                firstLine='Building Teams'
                secondLineColor='Beyond'
                seconeLine='Borders'
                thirdLine=''
                fourthLine=''
                className="center-horizontal-relative"
            />
        </div>
    );
}

export default Home;