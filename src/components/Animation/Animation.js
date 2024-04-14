import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';



const AllAnimations = () => {

    const [refRotate, inViewRotate] = useInView({ threshold: 0.5 });
    const [refScale, inViewScale] = useInView({ threshold: 0.5 });
    const [refOpacity, inViewOpacity] = useInView({ threshold: 0.5 });
    const [refColor, inViewColor] = useInView({ threshold: 0.5 });


    return (

        <div>

            {/* Rotación */}

            <motion.div
                ref={refRotate}
                initial={{ rotate: 0 }}
                animate={{ rotate: inViewRotate ? 360 : 0 }}
                transition={{ duration: 0.5 }}
            >
                Elemento rotado
            </motion.div>



            {/* Escala */}

            <motion.div
                ref={refScale}
                initial={{ scale: 1 }}
                animate={{ scale: inViewScale ? 1.1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                Elemento escalado
            </motion.div>



            {/* Opacidad */}
            <motion.div
                ref={refOpacity}
                initial={{ opacity: 0 }}
                animate={{ opacity: inViewOpacity ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                Elemento con opacidad cambiante
            </motion.div>



            {/* Cambio de Color */}

            <motion.div
                ref={refColor}
                initial={{ backgroundColor: "red"}}
                animate={{ backgroundColor: inViewColor ? "blue" : "red" }}
                transition={{ duration: 0.5 }}
            >
                Elemento con cambio de color
            </motion.div>

        </div>

    );

};



export default AllAnimations;