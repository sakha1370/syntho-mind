import React, {useEffect, useRef, useState} from 'react';

const Counter = ({ value }) => {
    const [counted, setCounted] = useState(false);
    const [currentValue, setCurrentValue] = useState(0);
    const counterRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust the threshold as needed
        };

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setCounted(true);
                setCurrentValue(value);
                observer.unobserve(observerCounterRef.current); // Use the local variable
            }
        }, options);

        const observerCounterRef = counterRef.current; // Store the current counterRef.current
        if (observerCounterRef) {
            observer.observe(observerCounterRef); // Use the stored reference
        }

        return () => {
            if (observerCounterRef) {
                observer.unobserve(observerCounterRef); // Use the stored reference in cleanup
            }
        };
    }, [value]);

    return (
        <div ref={counterRef}>
            {counted ? <span>{currentValue}</span> : <span>0</span>}
        </div>
    );
};

export default Counter;
