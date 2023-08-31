import {useEffect, useRef, useState} from 'react';

const ScrollAnimation = ({children, order = 0}) => {
    const [animated, setAnimated] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;

            if (entry.isIntersecting && !animated) {
                setAnimated(true);
            }
        });
        const currentRef = ref.current;
        observer.observe(currentRef);


        return () => observer.unobserve(currentRef);


    }, [animated]);

    const delayStyle = {
        transitionDelay: `${order * 300}ms`,
    };

    return (
        <div
            ref={ref}
            className={`opacity-0 ${animated ? 'animate-slideInUp opacity-100 transition-all duration-1000' : ''}`}
            style={delayStyle}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;
