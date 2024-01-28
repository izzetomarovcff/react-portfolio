"use client";
import React from 'react'
import { useSpring, animated } from 'react-spring';
const achievementsList = [
    {
        metric: "Projects",
        value: 20,
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Repository",
        value: 40,
    },
    {
        metric: "Achievement",
        value: 3,
    },
    {
        metric: "Years",
        value: 2,
    },
];
function AchievementsSection() {
    const AnimatedNumber = ({ value }) => {
        const props = useSpring({
            value,
            from: { value: 0 },
        });

        return <animated.span>{props.value.interpolate((val) => Math.floor(val))}</animated.span>;
    };
    return (
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                {
                    achievementsList.map((achivment,index)=>{
                        return(
                            <div key={index}className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
                                <h2 className="text-white text-4xl font-bold flex flex-row">
                                    {achivment.prefix}
                                    <AnimatedNumber value={achivment.value} className="text-white text-4xl font-bold"/>
                                    {achivment.postfix}
                                </h2>
                                <p className="text-[#ADB7BE] text-base">{achivment.metric}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AchievementsSection