import React from 'react';
import styles from './Section.module.scss'
import {SvgSelector} from "../../../common/components/svgSelector/SvgSelector";


export const Section: React.FC = (props) => {


    return (
        <div className={styles.section}>
            <div className={styles.underDevelopment}>
                <SvgSelector svgname={'underDevelopment'}/>
                <p>The project is under development. Some features may be unavailable.</p>
            </div>
            <div className={styles.news}>
                <h3>News</h3>
                <div>NASA has shared a stunning picture of Enceladus, the sixth-largest moon of Saturn known to harbor
                    oceans beneath its frozen crust. In the color-enhanced image, snapped by the Cassini spacecraft,
                    pale blue fractures—possibly rivers—cut through the surface of the moon and deep craters have also
                    been spotted. The planet is not completely visible since it's obscured by the moon's shadow.
                </div>
                <div>American tech giant Apple has acknowledged a display bug in its iPhone 14 Pro smartphone after a
                    growing number of users reported a strange display issue when booting up or unlocking their devices.
                    According to GSM Arena, a tech-news-related website, green and yellow horizontal lines appear on the
                    screen that disappears later on during the startup process, so it's not damaging the user experience
                    completely, if at all.
                </div>
                <div>
                    Scientists have reported the first evidence of the presence of solitary waves or distinct electric
                    field fluctuations in the Mars' magnetosphere. The study of these waves is crucial as they directly
                    control particle energisation, plasma loss, transport etc. through wave-particle interactions.
                    According to the Ministry of Science and Technology, Earth is a giant magnet, and its magnetic field
                    protects us from high-speed charged particles that are continuously emitted from the Sun.
                </div>
            </div>
        </div>
    );
};

