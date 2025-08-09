import { FaSnowflake, FaLeaf, FaCheese, FaBox } from "react-icons/fa";
import { motion } from "framer-motion";
import Heading from "../Heading/Heading";


const tips = [
  {
    icon: <FaSnowflake className="text-green-600 text-3xl mb-4" />,
    title: "Freeze Wisely",
    desc: "Store meat in airtight bags, label dates, and never refreeze once thawed.",
  },
  {
    icon: <FaLeaf className="text-green-600 text-3xl mb-4" />,
    title: "Fresh Produce",
    desc: "Leafy greens stay fresh longer if wrapped in paper towel inside a container.",
  },
  {
    icon: <FaCheese className="text-green-600 text-3xl mb-4" />,
    title: "Dairy Care",
    desc: "Store cheese in parchment paper, not plastic. Keep milk on the fridge’s middle shelf.",
  },
  {
    icon: <FaBox className="text-green-600 text-3xl mb-4" />,
    title: "Use Containers",
    desc: "Airtight containers reduce spoilage and protect from fridge odors.",
  },
];

const PreservationTips = () => {
  return (
    <section className="bg-[#8daa91] py-12 mt-10 px-4 rounded-2xl md:px-12">
      <div className="max-w-6xl mx-auto text-center">
       <Heading text={"🧊 Preservation Tips"}  />
        <p className="text-gray-700 mb-10 max-w-xl mx-auto">
          Learn how to store your food properly and make it last longer. Reduce waste and keep your kitchen efficient!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {tip.icon}
              <h4 className="font-semibold text-lg mb-2">{tip.title}</h4>
              <p className="text-sm text-gray-600">{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreservationTips;