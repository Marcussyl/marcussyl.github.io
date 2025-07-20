import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const TechStackGrid = ({ techStackItems }) => {
  return (
    <motion.div
      className="grid w-full grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-4 lg:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {techStackItems.map((item, idx) => {
        if (!item) return <div key={idx}></div>;

        if (item.imgPath === "") {
          return (
            <div
              key={idx}
              className="h-10 w-10 rounded-sm bg-transparent"
            ></div>
          );
        }

        return (
          <motion.div
            key={idx}
            variants={itemVariants}
            transition={{ duration: 0.5, type: "spring" }}
            style={{ justifySelf: "center" }}
          >
            <div className="h-25 w-25 p-7">
              <img
                src={item.imgPath}
                alt={item.imgAlt}
                className="rounded-sm"
              />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TechStackGrid;
