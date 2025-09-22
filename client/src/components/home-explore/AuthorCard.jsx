import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function AuthorCard() {
  return (
    <article className="bg-background p-4 border rounded-lg  border-muted">
      <div className="flex justify-center">
        <img
          src="https://res.cloudinary.com/dnlrzhdcs/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1758540900/PORTOFOLIO/avatar-ahmad-fiqri-oemry.webp"
          alt="author"
          height={96}
          width={96}
          className="w-24 h-24 rounded-full border border-muted object-cover"
        />
      </div>
      <div className="text-center mt-4">
        <h4>Ahmad Fiqri Oemry</h4>
        <p>Software Engineer | Web Developer</p>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/ahmadfiqrioemry"
          className="hover:text-blue-500 duration-150"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/fiqrioemry"
          className="hover:text-red-500 duration-150"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.ahmadfiqrioemry.com"
          className="hover:text-green-500 duration-150"
        >
          <FaGlobe />
        </a>
      </div>
    </article>
  );
}
