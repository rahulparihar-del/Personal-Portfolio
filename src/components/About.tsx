import { Code2, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-lg text-gray-600">
              I am a Front-End Developer passionate about building responsive
              and user-friendly web applications. With expertise in React.js,
              JavaScript, and modern UI frameworks like Tailwind CSS, I am eager
              to craft scalable and maintainable solutions. Currently pursuing
              my MCA to further enhance my skills.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Code2 className="text-[#256c5b]" size={24} />
                <span className="text-gray-700">Front-End Development</span>
              </div>
              <div className="flex items-center space-x-4">
                <Briefcase className="text-[#256c5b]" size={24} />
                <span className="text-gray-700">Enthusiastic Learner</span>
              </div>
              <div className="flex items-center space-x-4">
                <GraduationCap className="text-[#256c5b]" size={24} />
                <span className="text-gray-700">React.js Specialist</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
