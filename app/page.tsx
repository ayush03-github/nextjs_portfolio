import Hero from "@/app/component/home/hero";
import Skills from "@/app/component/home/skills";
import Myexperience from "@/app/component/home/myexperience";
import Aboutme from "@/app/component/home/aboutme";
import Projects from "@/app/component/home/projects";
import Testimonial from "@/app/component/home/testimonial";
import DownloadButton from "@/app/component/home/downloadButton";

export default function Home() {
  return (
    <div>
      <Hero />
      <DownloadButton />
      <Skills />
      <Myexperience />
      <Aboutme />
      <Projects />
      <Testimonial />
    </div>
  );
}
