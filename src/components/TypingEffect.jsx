import PropTypes from 'prop-types';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const styles = {
    opacity: 1,
    filter: 'blur(0px)',
    transform: 'translateY(-8px) translateZ(0px)',
}

export function TypingEffect({ text }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            ref={ref}
            className="sm:text-4xl font-bold tracking-tighter md:text-5xl md:leading-[4rem] mt-3 mb-5"
        >
            {text.split('').map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.2, delay: index * 0.2 }}
                    style={styles}
                >
                    {letter}
                </motion.span>
            ))}
        </div>
    );
}

TypingEffect.propTypes = {
    text: PropTypes.string.isRequired
}