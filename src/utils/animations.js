export const anim = (variants) => {
    return {
        initial: "initial",
        animate: "animate",
        exit: "exit",
        variants,
    };
};

// Header Component
export const expand = {
    initial: {
        height: 0,
    },
    animate: {
        height: "100%",
        transition: {
            duration: 2,
            ease: [0.68, -0.6, 0.32, 1.6],
            repeat: Infinity,
        },
    },
};

export const balanceParent = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    exit: {
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
};

export const balanceChildren = {
    initial: {
        y: "200px",
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.68, -0.6, 0.32, 1.6],
        },
    },
    exit: {
        y: "-200px",
        transition: {
            duration: 0.6,
            ease: [0.68, -0.6, 0.32, 1.6],
        },
    },
};

// Navbar Component
export const open = {
    initial: {
        width: 0,
        height: 0,
    },
    animate: {
        width: 150,
        height: 170,
        transition: {
            ease: [0.85, 0, 0.15, 1],
            duration: 0.7,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    exit: {
        width: 0,
        height: 0,
        transition: {
            ease: [0.85, 0, 0.15, 1],
            duration: 0.7,
            staggerChildren: 0.1,
        },
    },
};

export const openChild = {
    initial: {
        x: "-30px",
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: "30px",
        opacity: 0,
    },
};