import { motion } from 'framer-motion';

const SectionReveal = ({ children, delay = 0, width = "100%", style = {}, className = "" }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 }
            }}
            style={{ width, ...style }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SectionReveal;
