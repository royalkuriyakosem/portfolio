import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';
import Image from 'next/image';

const TimelineSection = () => {

    //     const [isDesktop, setIsDesktop] = useState(false)

    //   useEffect(() => {
    //     const mediaQuery = window.matchMedia("(min-width: 1536px)");

    //     // Set initial value
    //     setIsDesktop(mediaQuery.matches);

    //     // Update on change
    //     const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    //     mediaQuery.addEventListener("change", handler);

    //     // Cleanup
    //     return () => {
    //       mediaQuery.removeEventListener("change", handler);
    //     };
    //   }, []);

    useGSAP(() => {


        const pulses = gsap
            .timeline({
                defaults: {
                    duration: 0.05,
                    autoAlpha: 1,
                    scale: 2,
                    transformOrigin: "center",
                    ease: "elastic(2.5, 1)"
                }
            })
            .to(".ball02, .text01, #text-2020 ", {}, 0.04)
            .to(".ball03, .text02, #text-2022 , #uoft", {}, 0.07)
            .to(".ball04, .text03, #text-2022-july, #fisat", {}, 0.13)
            .to(".ball06, .text05, #text-2024-dec, #chair, #haircut", {}, 0.2)
            .to(".ball07, #text-barbering-great, #competition, #pompodour, #combover", {}, 0.23)
            .to(".ball08, .text06, #text-2025-feb", {}, 0.42)
            .to(".ball09, .text07, #text-2025-mar, #camera-op, #still-1, #still-2, #still-3", {}, 0.54)
            .to(".ball10, .text08, #text-2025-grad", {}, 0.62)

        gsap
            .timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: "#svg-stage",
                    scrub: true,
                    start: "top 10% ",
                    end: "bottom top",
                }
            })
            .to(".ball01", { duration: 0.01, autoAlpha: 1 })
            .from(".theLine", { drawSVG: 0 }, 0)
            .to(
                ".ball01",
                {
                    motionPath: {
                        path: ".theLine",
                        align: ".theLine",
                        alignOrigin: [0.5, 0.5]
                    }
                },
                0
            )
            .add(pulses, 0);

    }, [])


    return (
        <div className='timeline  w-dvw relative pb-40 h-full  '>

            <Image
                id='uoft'
                src='/uoft.jpg'
                width={150}
                height={150}
                alt='university-of-toronto'
                className='timeline-pic w-[50px] lg:w-[100px] 2xl:w-[150px] absolute top-[30%] left-[79%] md:top-[31%] md:left-[85%] lg:left-[73%] xl:top-[30%] xl:left-[70%] 2xl:top-[15%]  2xl:left-[65%] opacity-0 rotate-6'
            />
            <Image
                id='fisat'
                src='/fisat.jpg'
                width={150}
                height={150}
                alt='fisat'
                className='timeline-pic w-[50px] lg:w-[100px] 2xl:w-[150px] absolute top-[38%] left-[74%] md:top-[38%] md:left-[82%] lg:top-[37%] lg:left-[75%] xl:top-[37%] xl:left-[69%] 2xl:top-[29%] 2xl:left-[64%] opacity-0 -rotate-3'
            />
            <Image
                id='chair'
                src='/chair.jpg'
                width={120}
                height={120}
                alt='barber-chair'
                className='timeline-pic  w-[45px] lg:w-[100px] 2xl:w-[120px] absolute top-[46.5%] left-[68%] md:top-[45%] md:left-[80%] lg:top-[44%] lg:left-[76%] xl:top-[45%] xl:left-[68%] 2xl:left-[63%] 2xl:top-[43%] opacity-0 -rotate-3'
            />
            <Image
                id='haircut'
                src='/haircut.jpg'
                width={120}
                height={120}
                alt='haircut-1'
                className='timeline-pic w-[40px] lg:w-[90px] 2xl:w-[120px] absolute top-[47%] left-[80%] md:top-[47.5%] md:left-[85%] lg:top-[49%] lg:left-[85%] xl:left-[78%] 2xl:left-[75%]  opacity-0 rotate-3'
            />

            <Image
                id='pompodour'
                src='/pompodour.jpg'
                width={120}
                height={120}
                alt='haircut-2'
                className='timeline-pic hidden 2xl:flex absolute top-[1520px] left-[800px] opacity-0'
            />
            <Image
                id='combover'
                src='/combover.jpg'
                width={120}
                height={120}
                alt='haircut-3'
                className='timeline-pic hidden 2xl:flex  absolute top-[1530px] left-[1000px] opacity-0 -rotate-5'
            />
            <Image
                id='competition'
                src='/competition.jpg'
                width={120}
                height={120}
                alt='competition'
                className='timeline-pic  hidden 2xl:flex absolute top-[1500px] left-[1200px] opacity-0 rotate-5'
            />
            <Image
                id='camera-op'
                src='/camera-operating.jpg'
                width={120}
                height={120}
                alt='camera-operating'
                className='timeline-pic w-[45px] md:w-[70px] lg:w-[90px]  absolute top-[65%] left-[15%] 2xl:top-[72%] 2xl:left-[62%] opacity-0 -rotate-5'
            />
            <Image
                id='still-1'
                src='/still-5.jpg'
                width={180}
                height={180}
                alt='film-still-1'
                className='timeline-pic  w-[80px] md:w-[120px] lg:w-[150px] xl:w-[180px]  absolute top-[70%] left-[29%] md:top-[70%] 2xl:top-[80%] 2xl:left-[35%] opacity-0 rotate-6'
            />
            <Image
                id='still-2'
                src='/still-6.jpg'
                width={180}
                height={180}
                alt='film-still-2'
                className='timeline-pic hidden md:block md:w-[120px] lg:w-[140px] xl:w-[180px]  absolute top-[70%] left-[45%] md:top-[70%] md:left-[40%] 2xl:top-[79%] 2xl:left-[50%] opacity-0 rotate-6'
            />
            <Image
                id='still-3'
                src='/best-cine.png'
                width={250}
                height={250}
                alt='film-still-3'
                className='timeline-pic w-[90px] md:w-[140px] lg:w-[200px] xl:w-[250px] absolute top-[69%] left-[60%] md:top-[68%] md:left-[65%] 2xl:top-[78%] 2xl:left-[70%] opacity-0 -rotate-3'
            />


            <svg id="svg-stage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 2526.3" className='scale-50 2xl:scale-100 origin-left'>
                <path className='theLine' d="M-5,0c303.3,153.3,405,303.3,305,450s-156.7,246.7-170,300c-20,66.7,36.7,150,170,250,133.3,100,117.4,455-115.9,488.4-88.3,15.5,121,58.8,158.6,80.1s-116.1,19.6-143.8,52.3,90.2,8.2,114.6,32.7-104.8,31.1-77,63.8c27.8,32.7,196.2-1.6,241.9,93.2s-336.7,14-294.2,94.8c45.8,87,287.7,148.8,243.6,299.1S-12.1,2506.7-12.1,2506.7" fill="none" stroke="#000" strokeWidth="10" />
                <circle className="ball ball01" cx="50" cy="100" r="20" />
                <circle className="ball ball02" cx="278" cy="201" r="20" />
                <circle className="ball ball03" cx="327" cy="401" r="20" />
                <circle className="ball ball04" cx="130.3" cy="799" r="20" />
                <circle className="ball ball05" cx="303.3" cy="1000" r="20" />
                <circle className="ball ball06" cx="384" cy="1192.2" r="20" />
                <circle className="ball ball07" cx="333.4" cy="1392.2" r="20" />
                <circle className="ball ball08" cx="468.1" cy="1792.2" r="20" />
                <circle className="ball ball09" cx="281.8" cy="1992.2" r="20" />
                <circle className="ball ball10" cx="430" cy="2191.1" r="20" />
                <text className="text01" x="50" y="194.11">2020</text>
                <text className="text02" x="50" y="394.11">2022</text>
                <text className="text03" x="50" y="724.11">2022</text>
                <text className="text04" x="50" y="994.11">2024</text>
                <text className="text05" x="50" y="1186.31">2024</text>
                <text className="text06" x="50" y="1786.31">2025</text>
                <text className="text07" x="50" y="1986.31">2025</text>
                <text className="text08" x="50" y="2186.81">2025</text>
            </svg>

            <div id='text-2020' className='timeline-text  absolute top-[26%] left-[42%] md:top-[27%] md:left-[40%] lg:left-[40%] xl:top-[27%] xl:left-[30%] 2xl:top-[7%] 2xl:left-[35%] ' >
                <p>Completed Higher Secondary Education (10th) at St. Joseph's School with 90.80%</p>
            </div>
            <div id='text-2022' className='timeline-text absolute top-[30%] left-[45%] md:top-[31%] md:left-[42%] lg:left-[33%] xl:top-[31%] xl:left-[30%] 2xl:top-[15%] 2xl:left-[37%]'>
                <p>Completed Higher Secondary Education (12th) at St. Joseph's School with 92.20%</p>
            </div>
            <div id='text-2022-july' className='timeline-text absolute top-[36%] left-[33%] md:top-[38%] md:left-[30%] lg:left-[23%] xl:top-[38%] xl:left-[25%] 2xl:top-[29%] 2xl:left-[22%]'>
                <p>July:Started my Bachelors in Computer Science at FISAT</p>
            </div>
            <div id='text-2024-sep' className='timeline-text absolute top-[41%] left-[47%] md:top-[42%] md:left-[42%] lg:left-[33%] lg:top-[42%] xl:top-[42%] xl:left-[28%] 2xl:top-[36%] 2xl:left-[31%]'>
                <p>Sep: Front-End Developer (Freelance) for Eventorgs - Built UI with React</p>
            </div>
            <div id='text-2024-dec' className='timeline-text absolute top-[45%] left-[50%] md:top-[45%] md:left-[46%] lg:left-[35%] lg:top-[45%] xl:top-[45%] xl:left-[32%] 2xl:top-[44%] 2xl:left-[40%]'>
                <p>Dec: Front-End Intern at Nest Digital  </p>
            </div>
            <div id='text-barbering-great' className='timeline-text absolute top-[50%] left-[43%] md:top-[49%]  md:left-[40%] lg:left-[35%] lg:top-[48%] xl:top-[49%] xl:left-[28%] 2xl:top-[50%] 2xl:left-[40%]'>
                <p>Maintained a high CGPA (8.71) while gaining practical industry experience</p>
            </div>
            <div id='text-2025-feb' className='timeline-text absolute top-[56%] left-[57%] md:top-[56%]  md:left-[48%] lg:left-[35%] lg:top-[53%] xl:top-[56%] xl:left-[32%] 2xl:top-[67%] 2xl:left-[40%]'>
                <p>Feb: ICEFOSS Finalist - Presented emergency-alert network project</p>
            </div>
            <div id='text-2025-mar' className='timeline-text absolute top-[62%] left-[57%] md:top-[62%] md:left-[46%] 2xl:top-[73%] 2xl:left-[35%] '>
                <p>Mar: HackS’US Edition IV & CodEdge Finalist - Developed ReVogue & Aidify</p>
            </div>
            <div id='text-2025-grad' className='timeline-text absolute  top-[78%] left-[57%] xl:top-[80%] 2xl:top-[91%] 2xl:left-[35%]'>
                <p>Graduating with a strong foundation in AI/ML and full-stack development. I have built impactful projects like Aidify and ReVogue, and I am now looking to apply my skills in a challenging role.</p>
            </div>

        </div>
    )
}

export default TimelineSection