import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import ParallaxImage from "../components/ParallaxImage";
import { Camera, Clock, Award, User } from "lucide-react";

// Importing Team Images from local assets
import vishnuImg from "../assets/vishnu.jpeg";
import haneeshImg from "../assets/haneesh.png";
import johnImg from "../assets/john.png";

const AboutPage = () => {
  const stats = [
    {
      icon: <Camera className="h-6 w-6" />,
      value: "1,500+",
      label: "Projects Completed",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "10+",
      label: "Years Experience",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "25",
      label: "Awards Won",
    },
    {
      icon: <User className="h-6 w-6" />,
      value: "300+",
      label: "Happy Clients",
    },
  ];

  const teamMembers = [
    {
      name: "Vishnu Vardhan",
      role: "Lead Photographer",
      bio: "With over 15 years of experience, Vishnu specializes in landscape and architectural photography.",
      image: vishnuImg,
    },
    {
      name: "Haneesh",
      role: "Portrait Specialist",
      bio: "Haneesh has a unique ability to capture the essence of his subjects through innovative portrait techniques.",
      image: haneeshImg,
    },
    {
      name: "Mr John",
      role: "Creative Director",
      bio: "John oversees the creative vision of our projects, ensuring each photo tells a compelling story.",
      image: johnImg,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We begin with understanding your vision, requirements, and the story you want to tell through your photographs.",
    },
    {
      step: "02",
      title: "Planning & Preparation",
      description:
        "We plan the shoot meticulously, considering lighting, composition, and technical requirements for creating immersive 3D effects.",
    },
    {
      step: "03",
      title: "The Shoot",
      description:
        "Using specialized equipment and techniques, we capture multiple perspectives to create depth and dimension in your images.",
    },
    {
      step: "04",
      title: "Post-Processing",
      description:
        "Our editing process enhances the natural depth and brings out the 3D effect while maintaining the authenticity of the moment.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="Bringing Moments to Life — Beyond the Lens"
      />

      {/* Journey Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif font-semibold mb-6">
            Our Journey
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              At Visionary Photography, our story began in 2022 with a simple yet powerful idea: to transform ordinary photographs into extraordinary visual experiences. What started as a curiosity for innovative imaging quickly evolved into a passion for pushing the boundaries of traditional photography.
            </p>
            <p>
              Specializing in 3D and immersive photography, our mission is to create visuals that do more than capture a moment — they invite you to live it. We blend cutting-edge technology with an artist's eye for detail, ensuring every shot tells a deeper, more vivid story.
            </p>
            <p>
              Our team is a collective of creative minds and technical experts, united by the belief that photography is not just about taking pictures but about crafting experiences. Over the years, our unique approach has gained recognition in both commercial and artistic spaces, setting us apart in a crowded visual world.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ParallaxImage
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Our photography team collaborating"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-10 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-serif font-semibold mb-10 text-center">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ParallaxImage
                src={member.image}
                alt={member.name}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.03}
                className="h-72"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Process Section */}
      <div>
        <h2 className="text-3xl font-serif font-semibold mb-10 text-center">
          Our Process
        </h2>

        <div className="space-y-12">
          {processSteps.map((process, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gray-900 dark:bg-gray-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                {process.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {process.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
