import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

const internTeam = [
  {
    name: "Saina Khadka",
    role: "Frontend Intern",
    date: "Nov 29, 2025 – Till Date",
    linkedin: "https://www.linkedin.com/in/saina-khadka-433296394/",
    // img: "https://i.postimg.cc/BQ0BQwfL/saina.png",
    img: "https://avatars.githubusercontent.com/u/149309066?v=4",
  },
  {
    name: "Nishant Bk",
    role: "Frontend Intern",
    date: "Jan 04, 2026 – Till Date",
    linkedin: "https://www.linkedin.com/in/nishant-bk/",
    // img: "https://i.postimg.cc/BQ0BQwfL/saina.png",
    img: "https://avatars.githubusercontent.com/u/125780674?v=4",
  },
  {
    name: "Jeewan Lamsal",
    role: "Fullstack Intern",
    date: "Jan 04, 2026 – Till Date",
    linkedin: "https://www.linkedin.com/in/jeewan-lamsal-210234365/",
    // img: "https://i.postimg.cc/BQ0BQwfL/saina.png",
    img: "https://avatars.githubusercontent.com/u/106655205?v=4",
  },
  {
    name: "Roshani Shrestha",
    role: "Frontend Intern",
    date: "Jan 04, 2026 – Till Date",
    linkedin: "https://www.linkedin.com/in/roshani-shrestha-083ab8298/",
    // img: "https://i.postimg.cc/BQ0BQwfL/saina.png",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQEpYG34WWKO3w/profile-displayphoto-scale_200_200/B4DZpXQX6IIMAc-/0/1762400503271?e=1770249600&v=beta&t=8hvw8IId7qFCOhB5kH9_8LDBfK1hjhOMyiULVQ4HTwo",
  },
  {
    name: "Reshmi Rajchal",
    role: "UI/UX Intern",
    date: "Jan 05, 2026 – Till Date",
    linkedin: "https://www.linkedin.com/in/reshmi-rajchal/",
    // img: "https://i.postimg.cc/BQ0BQwfL/saina.png",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQHSkya0ezQUzA/profile-displayphoto-scale_200_200/B4DZhKS7jIGsAg-/0/1753593137862?e=1770249600&v=beta&t=tjSTKfP3K52iyEdosKYGaW0u66LVE7N_0rGTQA66rcE",
  },
  //   {
  //     name: "Abhishek Kumar Sahani",
  //     role: "Data Analyst",
  //     date: "Dec 15, 2025 - Till date",
  //     linkedin: "https://www.linkedin.com/in/abhisheksahani4356/",
  //     img: "https://i.postimg.cc/sx8mT30H/abhishek.jpg",
  //   },
  // {
  //   name: "Yami Shinde",
  //   role: "Backend Intern",
  //   date: "Dec 15, 2025 - Till date",
  //   linkedin: "https://www.linkedin.com/in/geeshinde/",
  //   img: "https://media.licdn.com/dms/image/v2/D5603AQHKGBO2ZX9Hug/profile-displayphoto-scale_400_400/B56ZmoMDWgG0Ak-/0/1759463364586?e=1767225600&v=beta&t=QPqMSBjvOK25UPeQmN2oMlNurG9Y1-BzLif8MieWY2M",
  // },
  // {
  //   name: "Machel Wacht",
  //   role: "Graphic Designer",
  //   date: "Dec 15, 2025 - Till date",
  //   linkedin: "https://www.linkedin.com/in/mwacht/",
  //   img: "https://media.licdn.com/dms/image/v2/D4E03AQF7ZXfkfPDFnw/profile-displayphoto-scale_400_400/B4EZjXSWgWHEAo-/0/1755958569752?e=1767225600&v=beta&t=bYeSTaOy2S9tS32STO2UzFGqlbN2hayfH7l2Gkt5S_0",
  // },
  // {
  //   name: "Yami Shinde",
  //   role: "Backend Intern",
  //   date: "Dec 15, 2025 - Till date",
  //   linkedin: "https://www.linkedin.com/in/geeshinde/",
  //   img: "https://media.licdn.com/dms/image/v2/D5603AQHKGBO2ZX9Hug/profile-displayphoto-scale_400_400/B56ZmoMDWgG0Ak-/0/1759463364586?e=1767225600&v=beta&t=QPqMSBjvOK25UPeQmN2oMlNurG9Y1-BzLif8MieWY2M",
  // },
  // {
  //   name: "Machel Wacht",
  //   role: "Graphic Designer",
  //   date: "Dec 15, 2025 - Till date",
  //   linkedin: "https://www.linkedin.com/in/mwacht/",
  //   img: "https://media.licdn.com/dms/image/v2/D4E03AQF7ZXfkfPDFnw/profile-displayphoto-scale_400_400/B4EZjXSWgWHEAo-/0/1755958569752?e=1767225600&v=beta&t=bYeSTaOy2S9tS32STO2UzFGqlbN2hayfH7l2Gkt5S_0",
  // },
];

// Fade-in variant for individual items
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

// Container variant to stagger children
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between each child's animation
    },
  },
};

const InternshipDetails: React.FC = () => {
  return (
    <section className="pt-20 pb-20 bg-background">
      <motion.div
        className="container-padding mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Heading */}
        <motion.div className="text-center mb-16" variants={fadeIn}>
          <h1 className="text-4xl font-bold text-primary dark:text-dark md:text-5xl mb-4">
            Our Intern Team
          </h1>
          <p className="text-muted-foreground text-lg">
            The talented individuals shaping the future of Leafclutch.
          </p>
        </motion.div>

        {/* Intern Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={staggerContainer}
        >
          {internTeam.map((intern, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-accent/50 transition-all"
              variants={fadeIn}
            >
              <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-xl border-2 border-accent/10">
                <img
                  src={intern.img}
                  alt={intern.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-1">
                  {intern.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-2">
                  {intern.role}
                </p>
                <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  {intern.date}
                </p>
                <a
                  href={intern.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0077B5] hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InternshipDetails;
