import Hero from "@/app/component/home/hero";
import Skills from "@/app/component/home/skills";
import Myexperience from "@/app/component/home/myexperience";
import Aboutme from "@/app/component/home/aboutme";
import Projects from "@/app/component/home/projects";
import Testimonial from "@/app/component/home/testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Myexperience />
      <Aboutme />
      <Projects />
      <Testimonial />
    </div>
  );
}
