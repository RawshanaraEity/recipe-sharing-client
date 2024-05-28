const DevInfo = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/SdXycjp/bg-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className=" py-16 px-10"
    >
      <div className="p-8 bg-rose-600  rounded-md shadow-lg text-white  max-w-xl">
        <h3 className="text-2xl font-semibold mb-4">Rawshanara Eity</h3>
        <p className="text-lg font-medium mb-2">Web Developer</p>
        <p className="text-lg mb-4">
          <strong>Educational Background:</strong> MSc. in Physics from National
          University
        </p>
        <p className="text-lg mb-4">
          <strong>Experience:</strong> 1+ years of experience in web
          development, specializing in frontend and backend technologies.
        </p>
        <p className="text-lg">
          <strong>Technologies:</strong> React, Node.js, Express, MongoDB,
          JavaScript, HTML, CSS, Tailwind CSS, Firebase, Strip, Git, GitHub,
          Vercel, Surge, Render
        </p>
      </div>
    </div>
  );
};

export default DevInfo;
